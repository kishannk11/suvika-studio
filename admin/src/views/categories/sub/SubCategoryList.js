import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CButton } from '@coreui/react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import axios from 'axios';
import { API_URL } from '../../../config';
import { checkSession } from '../../../utils/session';

const SubCategoryList = () => {
	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		checkSession();
		fetchSubCategories();
	}, []);

	const fetchSubCategories = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(`${API_URL}/api/subcategory/list`, {
				headers: {
					'Authorization': `Bearer ${token}`,
				},
			});
			if (response.data) {
				console.log(response.data);
				setSubCategories(response.data);
			}
		} catch (error) {
			console.error('Failed to fetch subcategories:', error);
			Swal.fire({
				icon: 'error',
				title: 'Failed to fetch subcategories',
				text: error.response ? error.response.data.message : error.message,
			});
		}
	};

	const handleDelete = async (subCategoryId) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				const token = localStorage.getItem('token');
				try {
					const response = await axios.delete(`${API_URL}/api/subcategory/delete/${subCategoryId}`, {
						headers: {
							'Authorization': `Bearer ${token}`,
						},
					});
					if (response.status === 204) {
						setSubCategories(subCategories.filter(subCategory => subCategory._id !== subCategoryId));
						Swal.fire(
							'Deleted!',
							'Your subcategory has been deleted.',
							'success'
						);
					} else {
						Swal.fire(
							'Failed!',
							'Failed to delete the subcategory.',
							'error'
						);
					}
				} catch (error) {
					Swal.fire(
						'Error!',
						`Error: ${error.response ? error.response.data.message : error.message}`,
						'error'
					);
				}
			}
		}).catch((error) => {
			Swal.fire(
				'Error!',
				`Unexpected error: ${error.message}`,
				'error'
			);
		});
	};
	return (
		<CCard>
			<CCardHeader>
				Subcategory List
			</CCardHeader>
			<CCardBody>
				<CTable align="middle" className="mb-0 border" hover responsive>
					<CTableHead color="light">
						<CTableRow>
							<CTableHeaderCell>Main Category</CTableHeaderCell>
							<CTableHeaderCell>Subcategory Name</CTableHeaderCell>
							<CTableHeaderCell>Actions</CTableHeaderCell>
						</CTableRow>
					</CTableHead>
					<CTableBody>
						{subCategories.map((subcategory, index) => (
							<CTableRow key={index}>
								<CTableDataCell>{subcategory.mainCategoryId.categoryName}</CTableDataCell>
								<CTableDataCell>{subcategory.categoryName}</CTableDataCell>
								<CTableDataCell>
									<Link to={`/categories/sub/edit/${subcategory._id}`} className="text-primary" style={{ cursor: 'pointer', marginRight: '10px' }}>
										<MdEdit />
									</Link>
									<a className="text-danger" onClick={() => handleDelete(subcategory._id)} style={{ cursor: 'pointer' }}>
										<MdDelete />
									</a>
								</CTableDataCell>
							</CTableRow>
						))}
					</CTableBody>
				</CTable>
			</CCardBody>
		</CCard>
	);
};

export default SubCategoryList;

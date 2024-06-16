import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';

import { API_URL } from '../../../config';

const MainCategoryList = () => {
	const [mainCategories, setMainCategories] = useState([]);

	useEffect(() => {
		const fetchMainCategories = async () => {
			const token = localStorage.getItem('token');
			try {
				const response = await axios.get(`${API_URL}/api/maincategory/list`, {
					headers: {
						'Authorization': `Bearer ${token}`,
					},
				});
				setMainCategories(response.data.data);
			} catch (error) {
				console.error('Error fetching main categories:', error);
			}
		};

		fetchMainCategories();
	}, []);

	const deleteMainCategory = async (categoryId) => {
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
					await axios.delete(`${API_URL}/api/maincategory/delete/${categoryId}`, {
						headers: {
							'Authorization': `Bearer ${token}`,
						},
					});
					setMainCategories(mainCategories.filter(category => category._id !== categoryId));
					Swal.fire(
						'Deleted!',
						'Your category has been deleted.',
						'success'
					);
				} catch (error) {
					Swal.fire(
						'Failed!',
						'Failed to delete the category.',
						'error'
					);
				}
			}
		});
	};

	return (
		<CCard>
			<CCardHeader>
				Main Category List
			</CCardHeader>
			<CCardBody>
				<table className="table table-hover table-striped table-bordered">
					<thead>
						<tr>
							<th>Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{mainCategories.map((category, index) => (
							<tr key={index}>
								<td>{category.categoryName}</td>
								<td>
									<Link to={`/categories/main-edit/${category._id}`} className="text-primary" style={{ cursor: 'pointer', marginRight: '10px' }}>
										<MdEdit />
									</Link>
									<a className="text-danger" onClick={() => deleteMainCategory(category._id)} style={{ cursor: 'pointer' }}>
										<MdDelete />
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</CCardBody>
		</CCard>
	);
};

export default MainCategoryList;


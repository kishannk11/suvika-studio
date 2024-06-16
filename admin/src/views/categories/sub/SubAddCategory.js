import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CFormLabel, CFormInput, CButton } from '@coreui/react';
import Swal from 'sweetalert2';
import { API_URL } from '../../../config';
import axios from 'axios';
import { checkSession } from '../../../utils/session';

const SubAddCategory = () => {
	const [categoryName, setCategoryName] = useState('');
	const [mainCategoryId, setMainCategoryId] = useState('');
	const [mainCategories, setMainCategories] = useState([]);

	useEffect(() => {
		checkSession();
		fetchMainCategories();
	}, []);

	const fetchMainCategories = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(`${API_URL}/api/maincategory/list`, {
				headers: {
					'Authorization': `Bearer ${token}`,
				},
			});
			if (response.data) {
				setMainCategories(response.data.data);
			}
		} catch (error) {
			console.error('Failed to fetch main categories:', error);
			Swal.fire({
				icon: 'error',
				title: 'Failed to fetch main categories',
				text: error.response ? error.response.data.message : error.message,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!categoryName.trim() || !mainCategoryId.trim()) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter both a category name and select a main category.',
			});
			return;
		}

		try {
			const response = await axios.post(`${API_URL}/api/subcategory/add`, { categoryName, mainCategoryId }, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('token')}`,
				},
			});

			const result = response.data;
			Swal.fire(
				'Success!',
				'Subcategory added successfully!',
				'success'
			);
			console.log(result);
		} catch (error) {
			console.error('Error:', error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.response ? error.response.data.message : error.message,
			});
		}
	};




	return (
		<>
			<CCard>
				<CCardHeader>
					Add Sub Category
				</CCardHeader>
				<CCardBody>
					<CForm onSubmit={handleSubmit}>
						<div className="mb-3">
							<CFormLabel htmlFor="mainCategoryId">Main Category</CFormLabel>
							<select
								className="form-control"
								id="mainCategoryId"
								value={mainCategoryId}
								onChange={(e) => setMainCategoryId(e.target.value)}
							>
								<option value="">Select a Main Category</option>
								{mainCategories.map((category) => (
									<option key={category._id} value={category._id}>
										{category.categoryName}
									</option>
								))}
							</select>
						</div>
						<div className="mb-3">
							<CFormLabel htmlFor="categoryName">Subcategory Name</CFormLabel>
							<CFormInput
								type="text"
								id="categoryName"
								placeholder="Enter subcategory name"
								value={categoryName}
								onChange={(e) => setCategoryName(e.target.value)}
							/>
						</div>

						<CButton type="submit" color="primary">Add Subcategory</CButton>
					</CForm>
				</CCardBody>
			</CCard>
		</>
	);
};

export default SubAddCategory;

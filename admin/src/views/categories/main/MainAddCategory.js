import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CFormLabel, CFormInput, CButton } from '@coreui/react';
import Swal from 'sweetalert2';
import { API_URL } from '../../../config';
import { checkSession } from '../../../utils/session';
import axios from 'axios';


const MainAddCategory = () => {
	const [categoryName, setCategoryName] = useState('');
	useEffect(() => {
		checkSession();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!categoryName.trim()) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter a category name.',
			});
			return;
		}

		try {
			const response = await axios.post(`${API_URL}/api/maincategory/add`, { categoryName }, {
				headers: {
					'Content-Type': 'application/json',
					// Assuming you have a way to get the auth token
					'Authorization': `Bearer ${localStorage.getItem('token')}`,
				},
			});

			// With Axios, the response data is accessed directly via `response.data`
			const result = response.data;
			Swal.fire(
				'Success!',
				'Category added successfully!',
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
					Add Main Category
				</CCardHeader>
				<CCardBody>
					<CForm onSubmit={handleSubmit}>
						<div className="mb-3">
							<CFormLabel htmlFor="categoryName">Category Name</CFormLabel>
							<CFormInput
								type="text"
								id="categoryName"
								placeholder="Enter category name"
								value={categoryName}
								onChange={(e) => setCategoryName(e.target.value)}
							/>
						</div>
						<CButton type="submit" color="primary">Add Category</CButton>
					</CForm>
				</CCardBody>
			</CCard>
		</>
	);
};

export default MainAddCategory;

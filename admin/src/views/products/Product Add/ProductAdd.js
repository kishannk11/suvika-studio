import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormLabel, CFormInput, CFormTextarea, CButton } from '@coreui/react'
import Swal from 'sweetalert2'
import { API_URL } from '../../../config';
import { checkSession } from '../../../utils/session';

const ProductAdd = () => {
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productQuantity, setProductQuantity] = useState('')
	const [productDiscount, setProductDiscount] = useState('')
	const [productTaxRate, setProductTaxRate] = useState('')
	const [productImages, setProductImages] = useState([])

	useEffect(() => {
		checkSession();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem('token');
		// Extended validation checks
		if (!productName.trim() || !productDescription.trim() || !productPrice.trim() || !productQuantity.trim() || !productDiscount.trim() || !productTaxRate.trim()) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please fill in all required fields.',
			});
			return;
		}

		if (Number.isNaN(Number(productPrice)) || productPrice <= 0 || Number.isNaN(Number(productQuantity)) || productQuantity < 0 || Number.isNaN(Number(productDiscount)) || productDiscount < 0 || Number.isNaN(Number(productTaxRate)) || productTaxRate < 0) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please enter valid numeric values.',
			});
			return;
		}

		// Enhanced security checks (example: input sanitization)
		const sanitizedProductName = productName.replace(/<script>|<\/script>/gi, "");
		const sanitizedProductDescription = productDescription.replace(/<script>|<\/script>/gi, "");
		const sanitizedProductQuantity = productQuantity.replace(/[^0-9]/g, '');
		const sanitizedProductDiscount = productDiscount.replace(/[^0-9.]/g, '');
		const sanitizedProductTaxRate = productTaxRate.replace(/[^0-9.]/g, '');

		// Create a FormData object to handle file uploads
		const formData = new FormData();
		formData.append('productName', sanitizedProductName);
		formData.append('productDescription', sanitizedProductDescription);
		formData.append('productPrice', parseFloat(productPrice).toFixed(2));
		formData.append('productQuantity', parseInt(sanitizedProductQuantity));
		formData.append('productDiscount', parseFloat(sanitizedProductDiscount).toFixed(2));
		formData.append('productTaxRate', parseFloat(sanitizedProductTaxRate).toFixed(2));

		// Append each file to the formData object
		for (const file of productImages) {
			formData.append('productImages', file);
		}

		try {
			const response = await fetch(`${API_URL}/api/products/add`, {
				method: 'POST',
				body: formData, // Send formData instead of JSON
				headers: {
					'Authorization': `Bearer ${token}`,
				},
			});

			if (!response.ok) {
				throw new Error('Failed to add product. Please try again.');
			}

			const result = await response.json();
			Swal.fire(
				'Success!',
				'Product added successfully!',
				'success'
			);
			//console.log(result);
		} catch (error) {
			console.error('Error:', error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error.message,
			});
		}
	}

	return (
		<>
			<CCard>
				<CCardHeader>
					Add Product
				</CCardHeader>
				<CCardBody>
					<CForm onSubmit={handleSubmit}>
						<CRow>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productName">Product Name</CFormLabel>
									<CFormInput
										id="productName"
										placeholder="Enter product name"
										value={productName}
										onChange={(e) => setProductName(e.target.value)}
									/>
								</div>
							</CCol>

							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productPrice">Product Price</CFormLabel>
									<CFormInput
										id="productPrice"
										placeholder="Enter product price"
										value={productPrice}
										onChange={(e) => setProductPrice(e.target.value)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productQuantity">Product Quantity</CFormLabel>
									<CFormInput
										id="productQuantity"
										placeholder="Enter product quantity"
										type="number"
										onChange={(e) => setProductQuantity(e.target.value)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productDiscount">Discount Percentage</CFormLabel>
									<CFormInput
										id="productDiscount"
										placeholder="Enter discount percentage"
										type="number"
										onChange={(e) => setProductDiscount(e.target.value)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productTaxRate">Tax Rate</CFormLabel>
									<CFormInput
										id="productTaxRate"
										placeholder="Enter tax rate"
										type="number"
										onChange={(e) => setProductTaxRate(e.target.value)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productDescription">Product Description</CFormLabel>
									<CFormTextarea
										id="productDescription"
										rows="3"
										placeholder="Enter product description"
										value={productDescription}
										onChange={(e) => setProductDescription(e.target.value)}
									></CFormTextarea>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productImages">Product Images</CFormLabel>
									<CFormInput
										type="file"
										id="productImages"
										multiple
										onChange={(e) => setProductImages(e.target.files)}
									/>
								</div>
							</CCol>
						</CRow>
						<CButton type="submit" color="primary">Add Product</CButton>
					</CForm>
				</CCardBody>
			</CCard>
		</>
	)
}

export default ProductAdd

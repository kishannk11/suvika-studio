import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormLabel, CFormInput, CFormTextarea, CButton, CFormSelect, CFormCheck } from '@coreui/react';
import Swal from 'sweetalert2';
import { API_URL } from '../../../config';
import { checkSession, handleNon200Response } from '../../../utils/session';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
	const [productName, setProductName] = useState('');
	const [productDescription, setProductDescription] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productQuantity, setProductQuantity] = useState('');
	const [productDiscount, setProductDiscount] = useState('');
	const [productTaxRate, setProductTaxRate] = useState('');
	const [productImages, setProductImages] = useState([]);
	const [mainCategories, setMainCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);
	const [mainCategoryId, setMainCategoryId] = useState('');
	const [subCategoryId, setSubCategoryId] = useState('');
	const [discountType, setDiscountType] = useState('percentage');

	const { productId } = useParams();

	useEffect(() => {
		checkSession();
		fetchMainCategories();
		fetchProduct();
	}, []);

	const fetchMainCategories = async () => {
		const token = localStorage.getItem('token');
		try {
			const response = await axios.get(`${API_URL}/api/maincategory/list`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 200) {
				console.log("fetchMainCategories", response.data.data);
				setMainCategories(response.data.data);
			} else {
				handleNon200Response(response);
			}
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Failed to fetch main categories.'
			});
		}
	};

	const fetchSubCategories = async (mainCategoryId) => {
		const token = localStorage.getItem('token');
		try {
			const response = await axios.get(`${API_URL}/api/subcategory/fetch/${mainCategoryId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 200) {
				setSubCategories(response.data.data);
			} else {
				setSubCategories([]);
				handleNon200Response(response);
			}
		} catch (error) {
			console.error(error);
			setSubCategories([]);
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Failed to fetch subcategories.'
			});
		}
	};

	useEffect(() => {
		if (mainCategoryId) {
			fetchSubCategories(mainCategoryId);
		}
	}, [mainCategoryId]);

	const fetchProduct = async () => {
		const token = localStorage.getItem('token');
		try {
			const response = await axios.get(`${API_URL}/api/products/${productId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.data && response.data.data) {
				setProductName(response.data.data.productName);
				setProductDescription(response.data.data.productDescription);
				setProductPrice(response.data.data.productPrice);
				setProductQuantity(response.data.data.productQuantity);
				setProductDiscount(response.data.data.productDiscount);
				setProductTaxRate(response.data.data.productTaxRate);
				setProductImages(response.data.data.productImages);
				setMainCategoryId(response.data.data.mainCategoryId._id);
				setSubCategoryId(response.data.data.subCategoryId._id);
				setDiscountType(response.data.data.discountType);
			} else {
				handleNon200Response(response);
			}
		} catch (error) {
			console.error('Failed to fetch product details:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Failed to fetch product details.'
			});
		}
	};


	const handleMainCategoryChange = (e) => {
		const selectedMainCategoryId = e.target.value;
		console.log('selectedMainCategoryId', selectedMainCategoryId);
		setMainCategoryId(selectedMainCategoryId);
		fetchSubCategories(selectedMainCategoryId);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem('token');
		// Extended validation checks
		if (!productName.trim() || !productDescription.trim() || !productPrice.trim() || !productQuantity.trim() || !productDiscount.trim() || !productTaxRate.trim() || !mainCategories.length || !subCategories.length) {
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
		formData.append('mainCategoryId', mainCategories[0]._id);
		formData.append('subCategoryId', subCategories[0]._id);
		formData.append('discountType', discountType);

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
					Edit Product
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
									<CFormLabel htmlFor="mainCategory">Main Category</CFormLabel>
									<CFormSelect id="mainCategory" value={mainCategoryId} onChange={(e) => { console.log(e.target.value); handleMainCategoryChange(e); }}>
										<option value="">Select Main Category</option>
										{Array.isArray(mainCategories) && mainCategories.map((category) => (
											<option key={category._id} value={category._id}>{category.categoryName}</option>
										))}
									</CFormSelect>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="subCategory">Sub Category</CFormLabel>
									<CFormSelect id="subCategory" value={subCategories} onChange={(e) => setSubCategories(e.target.value)}>
										<option value="">Select Sub Category</option>
										{Array.isArray(subCategories) && subCategories.map((category) => (
											<option key={category._id} value={category._id}>{category.categoryName}</option>
										))}
									</CFormSelect>
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
										value={productQuantity}
										onChange={(e) => setProductQuantity(e.target.value)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productDiscount">Discount</CFormLabel>
									<CFormInput
										id="productDiscount"
										placeholder="Enter discount value"
										type="number"
										value={productDiscount}
										onChange={(e) => setProductDiscount(e.target.value)}
									/>
									<div className="mt-2">
										<CFormCheck
											type="radio"
											name="discountType"
											id="percentage"
											label="Percentage"
											value="percentage"
											checked={discountType === 'percentage'}
											onChange={(e) => setDiscountType(e.target.value)}
										/>
										<CFormCheck
											type="radio"
											name="discountType"
											id="cash"
											label="Cash"
											value="cash"
											checked={discountType === 'cash'}
											onChange={(e) => setDiscountType(e.target.value)}
										/>
									</div>
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
						<CButton type="submit" color="primary">Edit Product</CButton>
					</CForm>
				</CCardBody>
			</CCard>
		</>
	)
}

export default ProductEdit

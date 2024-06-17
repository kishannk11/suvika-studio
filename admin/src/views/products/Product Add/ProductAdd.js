import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormLabel, CFormInput, CFormTextarea, CButton, CFormSelect, CFormCheck, CMultiSelect } from '@coreui/react-pro'
import Swal from 'sweetalert2'
import { API_URL } from '../../../config';
import { checkSession, handleNon200Response } from '../../../utils/session';
import axios from 'axios';

const ProductAdd = () => {
	const [productName, setProductName] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productQuantity, setProductQuantity] = useState('')
	const [productDiscount, setProductDiscount] = useState('')
	const [productTaxRate, setProductTaxRate] = useState('')
	const [productImages, setProductImages] = useState([])
	const [mainCategories, setMainCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);
	const [discountType, setDiscountType] = useState('percentage');
	const [productColors, setProductColors] = useState([]);
	const [additionalInfo, setAdditionalInfo] = useState('');
	const [productTrending, setProductTrending] = useState([]);
	const [productMaterialCare, setProductMaterialCare] = useState('');
	const [productWeight, setProductWeight] = useState('');
	const [productPreOrder, setProductPreOrder] = useState(false);


	useEffect(() => {
		checkSession();
	}, []);


	const fetchMainCategory = async () => {
		const token = localStorage.getItem('token');

		try {
			const response = await axios.get(`${API_URL}/api/maincategory/list`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (response.status === 200) {
				setMainCategories(response.data.data);
			} else {
				handleNon200Response(response);
			}
		} catch (error) {
			if (error.response) {
				handleNon200Response(error.response);
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'Unexpected Error! Please check your network connection.'
				});
			}
		}
	};

	const fetchSubCategory = async (mainCategoryId) => {
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
			if (error.response) {
				setSubCategories([]);
				handleNon200Response(error.response);
			} else {
				setSubCategories([]);
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'Unexpected Error! Please check your network connection.'
				});
			}
		}
	};
	useEffect(() => {
		fetchMainCategory();
	}, []);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem('token');
		// Extended validation checks
		if (!productName.trim() || !productDescription.trim() || !productPrice.trim() || !productQuantity.trim() || !productDiscount.trim() || !productTaxRate.trim() || !mainCategories.length || !subCategories.length || !productMaterialCare.trim() || !productWeight.trim() || !productTrending.length || !productColors.length) {
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
		formData.append('additionalInfo', additionalInfo);
		formData.append('productColors', JSON.stringify(productColors));
		formData.append('productTrending', productTrending);
		formData.append('productMaterialCare', productMaterialCare);
		formData.append('productWeight', productWeight);
		formData.append('productPreOrder', productPreOrder);



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
	const addColor = () => {
		setProductColors([...productColors, { name: '', value: '#ffffff' }]); // Default color value
	};
	const handleColorChange = (value, index) => {
		const newColors = [...productColors];
		newColors[index] = { ...newColors[index], value };
		setProductColors(newColors);
	};

	const handleNameChange = (name, index) => {
		const newColors = [...productColors];
		newColors[index] = { ...newColors[index], name };
		setProductColors(newColors);
	};
	const removeColor = (index) => {
		setProductColors(productColors.filter((_, i) => i !== index));
	};


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
									<CFormLabel htmlFor="mainCategory">Main Category</CFormLabel>
									<CFormSelect id="mainCategory" onChange={(e) => fetchSubCategory(e.target.value)}>
										<option value="">Select Main Category</option>
										{mainCategories && mainCategories.map((category) => (
											<option key={category._id} value={category._id}>{category.categoryName}</option>
										))}
									</CFormSelect>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="subCategory">Sub Category</CFormLabel>
									<CFormSelect id="subCategory">
										<option value="">Select Sub Category</option>
										{subCategories && subCategories.map((subCategory) => (
											<option key={subCategory._id} value={subCategory._id}>{subCategory.categoryName}</option>
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
										onChange={(e) => setProductQuantity(e.target.value)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productColor">Product Color</CFormLabel>
									<div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
										{productColors.map((color, index) => (
											<div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
												<input
													type="text"
													value={color.name}
													onChange={(e) => handleNameChange(e.target.value, index)}
													placeholder="Color Name"
													style={{ marginRight: '5px' }}
												/>
												<input
													type="color"
													value={color.value}
													onChange={(e) => handleColorChange(e.target.value, index)}
													title="Choose your color"
												/>
												<button type="button" onClick={() => removeColor(index)} style={{ marginLeft: '5px' }}>-</button>
											</div>
										))}
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<button type="button" onClick={addColor} style={{ height: '38px' }}>+</button>
										</div>
									</div>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productWeight">Saree Info</CFormLabel>
									<CFormTextarea
										onChange={(e) => setProductWeight(e.target.value)}
										id="productWeight"
										placeholder="Enter Saree Details"
										type="text"
										rows="3"
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productPreOrder">Pre-Order</CFormLabel>
									<CFormCheck
										type="checkbox"
										id="productPreOrder"
										label="Is this product available for pre-order?"
										checked={productPreOrder}
										onChange={(e) => setProductPreOrder(e.target.checked)}
									/>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productTrending">Trending</CFormLabel>
									<div>
										{['Best Seller', 'Trending', 'New', 'Hot-Sales', 'Pre-Order'].map((trend, index) => (
											<CFormCheck
												key={index}
												type="checkbox"
												id={`trend-${trend}`}
												label={trend}
												value={trend}
												onChange={(e) => {
													if (e.target.checked) {
														setProductTrending([...productTrending, trend]);
													} else {
														setProductTrending(productTrending.filter(t => t !== trend));
													}
												}}
												checked={productTrending.includes(trend)}
											/>
										))}
									</div>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productMaterialCare">Material and Care</CFormLabel>
									<CFormTextarea
										onChange={(e) => setProductMaterialCare(e.target.value)}
										id="productMaterialCare"
										rows="3"
										placeholder="Enter material and care information"
									></CFormTextarea>
								</div>
							</CCol>
							<CCol xs="12">
								<div className="mb-3">
									<CFormLabel htmlFor="productDiscount">Discount</CFormLabel>
									<CFormInput
										id="productDiscount"
										placeholder="Enter discount value"
										type="number"
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
									<CFormLabel htmlFor="additionalInfo">Additional Information</CFormLabel>
									<CFormTextarea
										id="additionalInfo"
										rows="3"
										placeholder="Enter additional product information"
										onChange={(e) => setAdditionalInfo(e.target.value)}
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

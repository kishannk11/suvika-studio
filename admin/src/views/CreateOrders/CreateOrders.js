import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CForm, CFormInput, CFormTextarea, CButton, CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CFormLabel as CLabel, CFormSelect, CFormLabel } from '@coreui/react'
import Swal from 'sweetalert2'
import { API_URL } from '../../config';
import { checkSession, handleNon200Response } from '../../utils/session';
import axios from 'axios';
import { MdEdit, MdDelete } from 'react-icons/md';

const CreateOrder = () => {

	useEffect(() => {
		checkSession();
	}, []);

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [selectedProductId, setSelectedProductId] = useState('');

	const handleSearchChange = async (event) => {
		const query = event.target.value;
		if (query.length > 2) {
			const response = await axios.get(`${API_URL}/api/products/search?query=${query}`, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
			});
			if (response.status === 200) {
				setSearchResults(response.data);
			}
		} else {
			setSearchResults([]);
		}
	};


	const handleProductSelect = (productId) => {
		const product = searchResults.find(p => p._id === productId);
		if (product) {
			if (product.productQuantity === 0) {
				Swal.fire({
					icon: 'error',
					title: 'Out of Stock',
					text: 'This product is currently out of stock.'
				});
				return; // Exit the function to prevent adding the product
			} else if (product.productQuantity < 10) {
				Swal.fire({
					icon: 'warning',
					title: 'Low Stock',
					text: 'This product is about to go out of stock.'
				});
			}

			setSelectedProducts(prevProducts => [...prevProducts, { ...product, quantity: 1, discount: 0 }]);
			setSearchResults([]);
		}
	};

	const handleRemoveProduct = (index) => {
		const newSelectedProducts = [...selectedProducts];
		newSelectedProducts.splice(index, 1);
		setSelectedProducts(newSelectedProducts);
	};

	const validateForm = (formData) => {
		const errors = {};

		if (!formData.name) {
			errors.name = 'Name is required';
		}

		const phonePattern = /^[0-9]{10}$/;
		if (!formData.phone) {
			errors.phone = 'Phone is required';
		} else if (!phonePattern.test(formData.phone)) {
			errors.phone = 'Phone number is invalid';
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email) {
			errors.email = 'Email is required';
		} else if (!emailPattern.test(formData.email)) {
			errors.email = 'Email is invalid';
		}

		if (!formData.paymentMethod) {
			errors.paymentMethod = 'Payment method is required';
		}

		if (!formData.address) {
			errors.address = 'Address is required';
		}
		if (selectedProducts.length === 0) {
			errors.products = 'At least one product must be selected';
		}

		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = localStorage.getItem('token');

		const formData = {
			name: e.target.name.value.trim(),
			phone: e.target.phone.value.trim(),
			email: e.target.email.value.trim(),
			paymentMethod: e.target.paymentMethod.value.trim(),
			address: e.target.address.value.trim(),
			comment: e.target.comment.value.trim(),
		};

		const errors = validateForm(formData);
		if (Object.keys(errors).length > 0) {
			Swal.fire({
				icon: 'error',
				title: 'Validation Error',
				html: Object.values(errors).join('<br/>'),
			});
			return;
		}

		const payload = {
			...formData,
			products: selectedProducts.map(product => ({
				productId: product._id,
				quantity: product.quantity,
				discount: product.discount,
				productPrice: product.productPrice,
			}))
		};

		try {
			setLoading(true);
			const response = await axios.post(`${API_URL}/api/orders/create`, payload, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 201) {
				Swal.fire('Success!', response.data.message, 'success');
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
		} finally {
			setLoading(false);
		}
	};

	const handleQuantityChange = (event, index) => {
		const newQuantity = parseInt(event.target.value, 10);
		setSelectedProducts(prevProducts =>
			prevProducts.map((product, idx) =>
				idx === index ? { ...product, quantity: newQuantity } : product
			)
		);
	};

	const handleDiscountChange = (event, index) => {
		const newDiscount = parseFloat(event.target.value);
		if (newDiscount < 0 || newDiscount > 100) {
			Swal.fire({
				icon: 'error',
				title: 'Invalid Discount',
				text: 'Discount value must be between 0 and 100.',
			});
			return;
		}
		setSelectedProducts(prevProducts =>
			prevProducts.map((product, idx) =>
				idx === index ? { ...product, discount: newDiscount } : product
			)
		);
	};

	const grandTotal = selectedProducts.reduce((acc, product) => {
		return acc + (product.productPrice * product.quantity - (product.productPrice * product.quantity * product.discount / 100));
	}, 0);

	return (
		<>
			<CCard>
				<CCardHeader>
					Create Orders
				</CCardHeader>
				<CCardBody>
					<CForm onSubmit={handleSubmit}>
						<CRow className="mb-4">
							<CCol md="6" className="mb-3">
								<div>
									<CLabel htmlFor="name">Name</CLabel>
									<CFormInput type="text" id="name" name="name" placeholder="Enter Name" />
								</div>
							</CCol>
							<CCol md="6" className="mb-3">
								<div>
									<CLabel htmlFor="phone">Phone</CLabel>
									<CFormInput type="text" id="phone" name="phone" placeholder="Enter Phone" />
								</div>
							</CCol>
							<CCol md="6" className="mb-3">
								<div>
									<CLabel htmlFor="email">Email</CLabel>
									<CFormInput type="email" id="email" name="email" placeholder="Enter Email" />
								</div>
							</CCol>

							<CCol md="6" className="mb-3">
								<div>
									<CLabel htmlFor="paymentMethod">Payment Method</CLabel>
									<CFormSelect id="paymentMethod" name="paymentMethod">
										<option value="creditCard">Credit Card</option>
										<option value="paypal">PayPal</option>
										<option value="applePay">Apple Pay</option>
									</CFormSelect>
								</div>
							</CCol>
							<CCol md="12" className="mb-3">
								<div>
									<CLabel htmlFor="address">Address</CLabel>
									<CFormTextarea type="text" id="address" name="address" placeholder="Enter Address" />
								</div>
							</CCol>
							<CCol md="12" className="mb-3">
								<div>
									<CLabel htmlFor="comment">Comment</CLabel>
									<CFormTextarea id="comment" name="comment" placeholder="Enter your comment" />
								</div>
							</CCol>
						</CRow>

						<CRow className="mb-4">
							<CCol md="12" className="mb-3">
								<div>
									<CLabel htmlFor="searchProduct">Search Product</CLabel>
									<CFormInput type="text" id="searchProduct" name="searchProduct" placeholder="Search Product" onChange={handleSearchChange} />
									{searchResults.length > 0 && (
										<select
											id="productDropdown"
											value={selectedProductId}
											onChange={(e) => {
												setSelectedProductId(e.target.value);
												handleProductSelect(e.target.value);
											}}
											style={{ width: '100%', marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
										>
											<option value="">Select a Product</option>
											{searchResults.map(product => (
												<option key={product._id} value={product._id}>{product.productName}</option>
											))}
										</select>
									)}
								</div>
							</CCol>
							<CCol md="12">
								<div style={{ overflowX: 'auto' }}>
									<CTable>
										<CTableHead>
											<CTableRow>
												<CTableHeaderCell>Product</CTableHeaderCell>
												<CTableHeaderCell>Quantity</CTableHeaderCell>
												<CTableHeaderCell>Price</CTableHeaderCell>
												<CTableHeaderCell>Discount</CTableHeaderCell>
												<CTableHeaderCell>Total</CTableHeaderCell>
												<CTableHeaderCell>Action</CTableHeaderCell>
											</CTableRow>
										</CTableHead>
										<CTableBody>
											{selectedProducts.map((product, index) => (
												<CTableRow key={index}>
													<CTableDataCell>{product.productName}</CTableDataCell>
													<CTableDataCell>
														<CFormInput
															type="number"
															value={product.quantity}
															min="1"
															onChange={(e) => handleQuantityChange(e, index)}
															style={{ width: '80px' }}
														/>
													</CTableDataCell>
													<CTableDataCell>{product.productPrice}</CTableDataCell>
													<CTableDataCell>
														<CFormInput type="number" value={product.discount} min="0" max="100" onChange={(e) => handleDiscountChange(e, index)} style={{ width: '80px' }} />
													</CTableDataCell>
													<CTableDataCell>
														{product.productPrice * product.quantity - (product.productPrice * product.quantity * product.discount / 100)}
													</CTableDataCell>
													<CTableDataCell>
														<CButton type="button" color="danger" onClick={() => handleRemoveProduct(index)}>
															<MdDelete />
														</CButton>
													</CTableDataCell>
												</CTableRow>
											))}
										</CTableBody>
									</CTable>
								</div>
							</CCol>
							<CCol md="12" className="text-right">
								<h5>Total: ${grandTotal.toFixed(2)}</h5>
							</CCol>
						</CRow>
						<CButton type="submit" color="primary">Create Order</CButton>
					</CForm>
				</CCardBody>
			</CCard>
		</>
	)
}

export default CreateOrder

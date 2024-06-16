import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CRow, CCol, CFormLabel as CLabel, CFormInput, CButton, CFormSwitch, CFormCheck } from '@coreui/react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL } from '../../config';
import { checkSession, handleNon200Response } from '../../utils/session';

const CreateCoupon = () => {
	const [couponCode, setCouponCode] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [discountPercentage, setDiscountPercentage] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [discountType, setDiscountType] = useState('percentage');

	const validateCouponForm = () => {
		let errors = {};
		if (!couponCode.trim()) {
			errors.couponCode = 'Coupon code is required.';
		}
		if (!expiryDate.trim()) {
			errors.expiryDate = 'Expiry date is required.';
		} else if (new Date(expiryDate) < new Date()) {
			errors.expiryDate = 'Expiry date cannot be a past date.';
		}
		if (!discountPercentage.trim()) {
			errors.discountPercentage = 'Discount is required.';
		} else if (isNaN(discountPercentage) || discountPercentage < 0) {
			errors.discountPercentage = 'Discount must be a number greater than 0.';
		}
		return errors;
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = validateCouponForm();
		if (Object.keys(errors).length > 0) {
			Swal.fire({
				icon: 'error',
				title: 'Validation Errors',
				text: Object.values(errors).join('\n')
			});
			return;
		}
		const token = localStorage.getItem('token');

		try {
			const response = await axios.post(`${API_URL}/api/coupons/add`, {
				couponCode,
				expiryDate,
				discountPercentage,
				discountType,
				isActive
			}, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (response.status === 201) {
				Swal.fire({
					icon: 'success',
					title: 'Coupon Created',
					text: response.data.message
				});
				// Clear form fields
				setCouponCode('');
				setExpiryDate('');
				setDiscountPercentage('');
				setIsActive(false);
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

	return (
		<CCard>
			<CCardHeader>
				Create Coupon
			</CCardHeader>
			<CCardBody>
				<CForm onSubmit={handleSubmit}>
					<CRow className="mb-4">
						<CCol md="6" className="mb-3">
							<div>
								<CLabel htmlFor="couponCode">Coupon Code</CLabel>
								<CFormInput
									type="text"
									id="couponCode"
									value={couponCode}
									onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
									required
								/>
							</div>
						</CCol>
						<CCol md="6" className="mb-3">
							<div>
								<CLabel htmlFor="expiryDate">Expiry Date</CLabel>
								<CFormInput
									type="date"
									id="expiryDate"
									value={expiryDate}
									onChange={(e) => setExpiryDate(e.target.value)}
									required
								/>
							</div>
						</CCol>
						<CCol md="6" className="mb-3">
							<div>
								<CLabel htmlFor="discountValue">Discount Value</CLabel>
								<CFormInput
									type="number"
									id="discountValue"
									value={discountPercentage} // Assuming the state variable name remains the same for simplicity
									onChange={(e) => setDiscountPercentage(e.target.value)}
									required
								/>
							</div>
							<div>
								<CLabel htmlFor="discountType">Discount Type</CLabel>
								<div>
									<CFormCheck
										type="radio"
										id="discountTypePercentage"
										name="discountType"
										value="percentage"
										label="Percentage"
										checked={discountType === 'percentage'}
										onChange={(e) => setDiscountType(e.target.value)}
										required
									/>
									<CFormCheck
										type="radio"
										id="discountTypeCash"
										name="discountType"
										value="cash"
										label="Cash"
										checked={discountType === 'cash'}
										onChange={(e) => setDiscountType(e.target.value)}
										required
									/>
								</div>
							</div>
						</CCol>
						<CCol md="6" className="mb-3">
							<div>
								<CLabel htmlFor="isActive">Active</CLabel>
								<CFormSwitch
									className="mx-1"
									variant="3d"
									color="primary"
									checked={isActive}
									onChange={() => setIsActive(!isActive)}
								/>
							</div>
						</CCol>
					</CRow>
					<CButton type="submit" color="primary">Create Coupon</CButton>
				</CForm>
			</CCardBody>
		</CCard>
	);
};

export default CreateCoupon;

import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CForm, CRow, CCol, CFormLabel as CLabel, CFormInput, CButton, CFormSwitch, CFormCheck } from '@coreui/react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_URL } from '../../config';
import { checkSession, handleNon200Response } from '../../utils/session';
import { useParams } from 'react-router-dom';

const EditCoupon = () => {
	const [couponCode, setCouponCode] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [discountPercentage, setDiscountPercentage] = useState('');
	const [isActive, setIsActive] = useState(false);
	const [discountType, setDiscountType] = useState('percentage');

	const { couponId } = useParams();

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
		if (discountPercentage === '') {
			errors.discountPercentage = 'Discount percentage is required.';
		} else if (isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
			errors.discountPercentage = 'Discount percentage must be a number between 0 and 100.';
		}
		return errors;
	};


	const fetchCouponDetails = async () => {
		const token = localStorage.getItem('token');

		try {
			const response = await axios.get(`${API_URL}/api/coupons/${couponId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (response.status === 200) {
				const { couponCode, expiryDate, discountPercentage, isActive, discountType } = response.data.coupon;
				setCouponCode(couponCode);
				setExpiryDate(new Date(expiryDate).toISOString().split('T')[0]);
				setDiscountPercentage(discountPercentage);
				setIsActive(isActive);
				setDiscountType(discountType);
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

	useEffect(() => {
		fetchCouponDetails();
	}, []);

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
			const response = await axios.put(`${API_URL}/api/coupons/update/${couponId}`, {
				couponCode,
				expiryDate,
				discountPercentage,
				isActive,
				discountType
			}, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			if (response.status === 200) {
				Swal.fire({
					icon: 'success',
					title: 'Coupon Updated',
					text: response.data.message
				});
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
				Update Coupon
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
					<CButton type="submit" color="primary">Update Coupon</CButton>
				</CForm>
			</CCardBody>
		</CCard>
	);
};

export default EditCoupon;

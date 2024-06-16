import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CFormSwitch } from '@coreui/react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { checkSession, handleNon200Response } from '../../utils/session';
import { API_URL } from '../../config';
import axios from 'axios';

const ListCoupon = () => {
	const [coupons, setCoupons] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		checkSession();
	}, []);


	const fetchCoupons = async () => {
		setLoading(true);
		setError(null);
		const token = localStorage.getItem('token');

		try {
			const response = await axios.get(`${API_URL}/api/coupons/list`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 200) {
				setCoupons(response.data.data);
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
					text: 'Unexpected Error!'
				});
			}
		} finally {
			setLoading(false);
		}
	};

	const deleteCoupon = async (couponId) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				const token = localStorage.getItem('token');
				axios.delete(`${API_URL}/api/coupons/delete/${couponId}`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				}).then(response => {
					if (response.status === 200) {
						Swal.fire(
							'Deleted!',
							response.data.message,
							'success'
						);
						fetchCoupons();
					} else {
						handleNon200Response(response);
					}
				}).catch(error => {
					if (error.response) {
						handleNon200Response(error.response);
					} else {
						Swal.fire({
							icon: 'error',
							title: 'Error',
							text: 'Unexpected Error!'
						});
					}
				});
			}
		});
	};

	const toggleCouponStatus = async (couponId) => {
		const token = localStorage.getItem('token');
		axios.put(`${API_URL}/api/coupons/toggle-status/${couponId}`, {}, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(response => {
			if (response.status === 200) {
				Swal.fire(
					'Status Toggled!',
					response.data.message,
					'success'
				);
				fetchCoupons();
			} else {
				handleNon200Response(response);
			}
		}).catch(error => {
			if (error.response) {
				handleNon200Response(error.response);
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'Unexpected Error!'
				});
			}
		});
	};
	useEffect(() => {
		fetchCoupons();
	}, []);

	return (
		<CCard>
			<CCardHeader>
				Coupon List
			</CCardHeader>
			<CCardBody>
				<table className="table table-hover table-striped table-bordered">
					<thead>
						<tr>
							<th>Coupon Code</th>
							<th>Expiry Date</th>
							<th>Discount value</th>
							<th>Discount Type</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{coupons.map((coupon, index) => (
							<tr key={index}>
								<td>{coupon.couponCode}</td>
								<td>{new Date(coupon.expiryDate).toLocaleDateString()}</td>
								<td>{coupon.discountPercentage}</td>
								<td>{coupon.discountType}</td>
								<td>
									<CFormSwitch
										checked={coupon.isActive}
										onChange={() => toggleCouponStatus(coupon._id)}
										label={coupon.isActive ? 'Active' : 'Inactive'}
									/>
								</td>
								<td>
									<Link to={`/coupons/edit/${coupon._id}`} className="text-primary" style={{ cursor: 'pointer', marginRight: '10px' }}>
										<MdEdit />
									</Link>
									<a className="text-danger" onClick={() => deleteCoupon(coupon._id)} style={{ cursor: 'pointer' }}>
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

export default ListCoupon;
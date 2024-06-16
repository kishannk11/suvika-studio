import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { checkSession, handleNon200Response } from '../../utils/session';
import { API_URL } from '../../config';
import axios from 'axios';

const OrdersList = () => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		checkSession();
	}, []);


	const fetchOrders = async () => {
		setLoading(true);
		setError(null);
		const token = localStorage.getItem('token');

		try {
			const response = await axios.get(`${API_URL}/api/orders/list`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 200) {
				setOrders(response.data.data);
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


	useEffect(() => {
		fetchOrders();
	}, []);

	return (
		<CCard>
			<CCardHeader>
				Order List
			</CCardHeader>
			<CCardBody>
				<table className="table table-hover table-striped table-bordered">
					<thead>
						<tr>
							<th>Order ID</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<tr key={index}>
								<td>{order.orderId}</td>
								<td>{order.name}</td>
								<td>{order.phone}</td>
								<td>{order.email}</td>
								<td>
									<Link to={`/orders/edit/${order._id}`} className="text-primary" style={{ cursor: 'pointer', marginRight: '10px' }}>
										<MdEdit />
									</Link>
									<a className="text-danger" onClick={() => deleteOrder(order._id)} style={{ cursor: 'pointer' }}>
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

export default OrdersList;
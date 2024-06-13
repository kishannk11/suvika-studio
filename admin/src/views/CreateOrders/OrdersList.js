import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { checkSession, handleNon200Response } from '../../utils/session';
import { API_URL } from '../../config';

const OrdersList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		checkSession();
	}, []);


	const fetchProducts = async () => {
		setLoading(true);
		setError(null);
		const token = localStorage.getItem('token'); // Retrieve the token from local storage

		try {
			const response = await axios.get(`${API_URL}/api/products/list`, {
				headers: {
					Authorization: `Bearer ${token}` // Include the token in the Authorization header
				}
			});
			if (response.status === 200) {
				setProducts(response.data.data);
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
		fetchProducts();
	}, []);

	return (
		<CCard>
			<CCardHeader>
				Product List
			</CCardHeader>
			<CCardBody>
				<table className="table table-hover table-striped table-bordered">
					<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
							<th>Stock</th>
							<th>Discount</th>
							<th>Tax Rate</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={index}>
								<td>
									<img src={`${API_URL}/${product.productImages[0]}`} alt="Product" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
								</td>
								<td>{product.productName}</td>
								<td>{product.productDescription}</td>
								<td>{product.productPrice}</td>
								<td>{product.productQuantity}</td>
								<td>{product.productDiscount}%</td>
								<td>{product.productTaxRate}%</td>
								<td>
									<Link to={`/products/edit/${product._id}`} className="text-primary" style={{ cursor: 'pointer', marginRight: '10px' }}>
										<MdEdit />
									</Link>
									<a className="text-danger" onClick={() => deleteProduct(product._id)} style={{ cursor: 'pointer' }}>
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
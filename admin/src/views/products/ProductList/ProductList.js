import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

import { API_URL } from '../../../config';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
			const response = await fetch(`${API_URL}/api/products/list`, { // Ensure this matches your endpoint
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`, // Add the authorization header
				},
			});
			const data = await response.json();
			setProducts(data);
		};

		fetchProducts();
	}, []);

	const deleteProduct = async (productId) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async (result) => {
			if (result.isConfirmed) {
				const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
				try {
					const response = await fetch(`${API_URL}/api/products/${productId}`, {
						method: 'DELETE',
						headers: {
							'Authorization': `Bearer ${token}`,
						},
					});

					if (response.ok) {
						// Remove the deleted product from the state
						setProducts(products.filter(product => product._id !== productId));
						Swal.fire(
							'Deleted!',
							'Your product has been deleted.',
							'success'
						);
					} else {
						// Handle any errors, such as displaying a message to the user
						Swal.fire(
							'Failed!',
							'Failed to delete the product.',
							'error'
						);
					}
				} catch (error) {
					Swal.fire(
						'Error!',
						`Error: ${error.message}`,
						'error'
					);
				}
			}
		});
	};

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

export default ProductList;
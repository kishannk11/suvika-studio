import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import axios from 'axios';
import { API_URL } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import { ProductOne as Product } from "@components/product";

const HomeSixProductsTab = ({ className }) => {
	const [loading, setLoading] = useState(false);
	const [key, setKey] = useState('new_arrivals');
	const [products, setProducts] = useState([]);

	const tabData = [
		{ key: "new_arrivals", title: "NEW ARRIVALS" },
		{ key: "specials", title: "SPECIALS" },
		{ key: "best_seller", title: "BEST SELLER" },
		{ key: "trending", title: "MOST VIEWED" },
		{ key: "featured", title: "FEATURED" }
	];

	const fetchProducts = async () => {
		setLoading(true);
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get(`${API_URL}/api/products/list-guest`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 200) {
				setProducts(response.data);
				console.log(response.data);
			} else {
				toast.error('Failed to fetch products');
			}
		} catch (error) {
			toast.error('Unexpected Error!');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className={`container-indent ${className ? className : ''}`}>
			<Container className="container-fluid-custom-mobile-padding">
				<div className="tt-tab-wrapper">
					<Tab.Container id="products-tab" defaultActiveKey="new_arrivals" onSelect={(k) => setKey(k)}>
						<ul className="nav nav-tabs tt-tabs-default">
							{tabData.map(nav => (
								<Nav.Item as="li" key={nav.key}>
									<Nav.Link eventKey={nav.key} className={key === nav.key ? 'active' : ''}>
										{nav.title}
									</Nav.Link>
								</Nav.Item>
							))}
						</ul>
						<Tab.Content>
							{tabData.map(nav => (
								<Tab.Pane eventKey={nav.key} key={nav.key}>
									<Row className="tt-layout-product-item">
										{products.length > 0 ? products.map(product => (
											<Col sm={6} md={4} lg={3} key={product._id}>
												<Product
													page="home"
													product={{
														id: product._id,
														productName: product.productName,
														productDescription: product.productDescription,
														productPrice: product.productPrice,
														quantity: product.productQuantity,
														discount: product.productDiscount,
														taxRate: product.productTaxRate,
														images: product.productImages
													}}
													showVariant={true}
												/>
											</Col>
										)) : <h1>No products available</h1>}
									</Row>
								</Tab.Pane>
							))}
						</Tab.Content>
					</Tab.Container>
				</div>
			</Container>
			<ToastContainer />
		</div>
	);
};

HomeSixProductsTab.propTypes = {
	className: PropTypes.string
}

export default HomeSixProductsTab;
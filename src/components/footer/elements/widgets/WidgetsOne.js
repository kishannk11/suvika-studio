import Link from "next/link";
import {useContext} from "react";
import Widget from "@components/widget";
import {toCapitalize} from "@utils/toCapitalize";
import accountData from "@data/account-menu.json";
import {arrSortByCharacter} from "@utils/method";
import {Col, Container, Row} from "react-bootstrap";
import {getProductsUniqueCategories} from "@utils/product";
import {ProductsContext} from "@global/ProductsContext";

const WidgetsOne = ({className, dark}) => {
    const {products} = useContext(ProductsContext);
    const cats = getProductsUniqueCategories(products, 6);
    const categories = arrSortByCharacter(cats);

    return (
        <div className={`tt-footer-col tt-color-scheme-0${dark ? 3 : 1} ${className ? className : ''}`}>
            <Container>
                <Row>
                    <Col md={6} lg={2} xl={3}>
                        <Widget title="CATEGORIES">
                            <ul className="tt-list">
                                {categories.map(category => (
                                    <li key={category}>
                                        <Link href={`/product/category/${category}`}>
                                            {toCapitalize(category.toLowerCase())}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Widget>
                    </Col>

                    <Col md={6} lg={2} xl={3}>
                        <Widget title="MY ACCOUNT">
                            <ul className="tt-list">
                                {accountData.map(item => (
                                    <li key={item.id}>
                                        <Link href={item.link}>
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Widget>
                    </Col>

                    <Col md={6} lg={2} xl={3}>
                        <Widget title="ABOUT US">
                            <p>We believe in Quality of Happiness when you unwrap the fabric of your life.</p>
                        </Widget>
                    </Col>

                    <Col md={6} lg={2} xl={3}>
                        <Widget title="CONTACT">
                            <address>
                                <p><span>Address:</span> No. 7/A, 1st Floor, 80 feet road, <br/>
                            Bannerghatta Rd, Muthuraya Swamy Layout, <br/>
                            Hanuman Nagar, Bilekahalli, <br/>
                            Bengaluru, Karnataka 560076</p>
                                <p><span>Phone:</span> +91 78921 51829, 
                                +91 73377 99891</p>
                                <p><span>Hours:</span> 7 Days a week from 11 am to 8 pm</p>
                                <p><span>E-mail:</span> <Link href="mailto:suvikastudio@gmail.com">suvikastudio@gmail.com</Link>
                                </p>
                            </address>
                        </Widget>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default WidgetsOne;
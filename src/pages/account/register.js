import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
<<<<<<< HEAD

const RegisterPage = () => {
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Register - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />
            <ContentWrapper>
                <Breadcrumb />

                <div className="container-indent">
                    <Container>
                        <h1 className="tt-title-subpages noborder">CREATE AN ACCOUNT</h1>
                        <div className="tt-login-form">
                            <Row className="justify-content-center">
                                <Col md={8} lg={6}>
                                    <div className="tt-item">
                                        <h2 className="tt-title">PERSONAL INFORMATION</h2>
                                        <div className="form-default">
                                            <form action="/account/login" id="contactform" method="post" noValidate="novalidate">
                                                <div className="form-group">
                                                    <label htmlFor="loginInputName">FIRST NAME *</label>
                                                    <div className="tt-required">* Required Fields</div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="loginInputName"
                                                        className="form-control"
                                                        placeholder="Enter First Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="loginLastName">LAST NAME *</label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        id="loginLastName"
                                                        className="form-control"
                                                        placeholder="Enter Last Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="loginInputEmail">E-MAIL *</label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="loginInputEmail"
                                                        className="form-control"
                                                        placeholder="Enter E-mail"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="loginInputPassword">PASSWORD *</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="loginInputPassword"
                                                        placeholder="Enter Password"
                                                        required
                                                    />
                                                </div>
                                                <Row>
                                                    <Col xs="auto">
                                                        <div className="form-group">
                                                            <button className="btn btn-border" type="submit">CREATE</button>
                                                        </div>
                                                    </Col>
                                                    <Col xs="auto" className="align-self-center">
                                                        <div className="form-group">
                                                            <ul className="additional-links">
                                                                <li>or <Link href="/shop">Return to Store</Link></li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </ContentWrapper>
            <Footer logo={logo} />
        </Fragment>
    );
=======
import axios from 'axios';
import { API_URL } from '../../config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';



const RegisterPage = () => {
	const logo = "/assets/images/no-placeholder/logo.png";
	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		const name = event.target.name.value;
		const lastName = event.target.lastName.value;
		// Validate email and password fields
		if (!email || !password) {
			toast.error('Email and password are required');
			return;
		}

		// Validate email format
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			toast.error('Invalid email format');
			return;
		}

		// Validate password length
		if (password.length < 6) {
			toast.error('Password must be at least 6 characters long');
			return;
		}

		try {
			const response = await axios.post(`${API_URL}/api/signup`, { name, lastName, email, password });
			if (response.status === 201) {
				toast.success('Registration successful!', {
					onClose: () => router.push('/account/login')
				});
			}
		} catch (error) {
			console.error('Registration Error:', error);
			if (error.response && error.response.data) {
				toast.error(error.response.data.message || 'Registration failed. Please try again.');
			} else {
				toast.error('Registration failed. Please try again.');
			}
		}
	};
	return (
		<Fragment>
			<Head>
				<title>Suvika Studio - Saree Shop</title>
			</Head>

			<Header
				logo={logo}
				navbar={true}
				navData={navContent}
				navbarAlignment="left"
			/>
			<ContentWrapper>
				<Breadcrumb />

				<div className="container-indent">
					<Container>
						<h1 className="tt-title-subpages noborder">CREATE AN ACCOUNT</h1>
						<div className="tt-login-form">
							<Row className="justify-content-center">
								<Col md={8} lg={6}>
									<div className="tt-item">
										<h2 className="tt-title">PERSONAL INFORMATION</h2>
										<div className="form-default">
											<form onSubmit={handleSubmit} id="contactform">
												<div className="form-group">
													<label htmlFor="loginInputName">FIRST NAME *</label>
													<div className="tt-required">* Required Fields</div>
													<input
														type="text"
														name="name"
														id="loginInputName"
														className="form-control"
														placeholder="Enter First Name"
														required
													/>
												</div>
												<div className="form-group">
													<label htmlFor="loginLastName">LAST NAME *</label>
													<input
														type="text"
														name="lastName"
														id="loginLastName"
														className="form-control"
														placeholder="Enter Last Name"
														required
													/>
												</div>
												<div className="form-group">
													<label htmlFor="loginInputEmail">E-MAIL *</label>
													<input
														type="text"
														name="email"
														id="loginInputEmail"
														className="form-control"
														placeholder="Enter E-mail"
														required
													/>
												</div>
												<div className="form-group">
													<label htmlFor="loginInputPassword">PASSWORD *</label>
													<input
														type="password"
														name="password"
														className="form-control"
														id="loginInputPassword"
														placeholder="Enter Password"
														required
													/>
												</div>
												<Row>
													<Col xs="auto">
														<div className="form-group">
															<button className="btn btn-border" type="submit">CREATE</button>
														</div>
													</Col>
													<Col xs="auto" className="align-self-center">
														<div className="form-group">
															<ul className="additional-links">
																<li>or <Link href="/shop">Return to Store</Link></li>
															</ul>
														</div>
													</Col>
												</Row>
											</form>
										</div>
										<ToastContainer />
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>

			</ContentWrapper>
			<Footer logo={logo} />
		</Fragment>
	);
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
};

export default RegisterPage;
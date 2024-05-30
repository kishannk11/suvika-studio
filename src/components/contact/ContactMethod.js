import {Col, Row} from "react-bootstrap";

const ContactMethod = ({className}) => {
    return (
        <div className={className ? className : ''}>
            <div className="tt-contact02-col-list">
                <Row>
                    <Col md={4} className="ml-sm-auto mr-sm-auto mt-0">
                        <div className="tt-contact-info mt-5">
                            <i className="tt-icon icon-f-93"/>
                            <h6 className="tt-title">LET’S HAVE A CHAT!</h6>
                            <address>
                                +91 78921 51829<br/>
                                +91 73377 99891
                            </address>
                        </div>
                    </Col>

                    <Col md={4} className="mt-0">
                        <div className="tt-contact-info mt-5">
                            <i className="tt-icon icon-f-24"/>
                            <h6 className="tt-title">VISIT OUR LOCATION</h6>
                            <address>
                            No. 7/A, 1st Floor, 80 feet road, <br/>
                            Bannerghatta Rd, Muthuraya Swamy Layout, <br/>
                            Hanuman Nagar, Bilekahalli, <br/>
                            Bengaluru, Karnataka 560076
                            </address>
                        </div>
                    </Col>

                    <Col md={4} className="mt-0">
                        <div className="tt-contact-info mt-5">
                            <i className="tt-icon icon-f-92"/>
                            <h6 className="tt-title">WORK TIME</h6>
                            <address>
                                7 Days a week<br/>
                                from 11:00 AM to 8:00 PM
                            </address>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactMethod;
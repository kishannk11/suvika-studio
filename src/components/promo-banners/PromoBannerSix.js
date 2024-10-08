import Link from "next/link";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import {Row, Col, Container} from "react-bootstrap";

const PromoBannerSix = ({className, data, containerFluid = true}) => {
    return (
        <div className={`${className ? className : ''} container-indent`}>
            <Container fluid={containerFluid}>
                <Row className="tt-layout-promo-box">
                    {data.map(banner => (
                        <Col sm={6} key={banner.id}>
                            <div className={`tt-promo-box tt-one-child hover-type-4`}>
                                <img src={banner.thumb} alt="wokiee promobanner"/>
                                <div className="tt-description tt-point-v-t tt-point-h-l">
                                    <div className="tt-description-wrapper text-start">
                                        {banner?.subtitle && <div className="tt-title-small">{parse(banner.subtitle)}</div>}
                                        {banner?.title && <div className="tt-title-large">{parse(banner.title)}</div>}
                                        {banner.btn && (
                                            <Link href={banner.btnLink} className={`tt-link ${banner.btnClass}`}>
                                                {banner.btnText}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

PromoBannerSix.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default PromoBannerSix;
import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import slideData from "@data/slider/home-sixteen.json";
import {SliderTwo as Slider} from "@components/slider";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {BrandsTwo as BrandsLogo} from "@components/brands";
import {HomePagesNavData as navContent} from "@data/navbar";
import {HomeSixProductsTab as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSixteen = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>ABCD</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Slider
                    className="tt-offset-small"
                    sliderWrapper="slider-style-2"
                    data={slideData}
                />
                <Products
                    products={productsFashion}
                />
                <BrandsLogo/>
            </ContentWrapper>

            <Footer
                logo={logo}
                newsletter={true}
            />
        </Fragment>
    )
}

export default HomeSixteen;
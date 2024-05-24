import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import slideData from "@data/slider/home-sixteen.json";
import {SliderTwo as Slider} from "@components/slider";
import {HeaderTwo as Header} from "@components/header";
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
                <title>Suvika Studio - Saree Shop</title>
            </Head>

            <Header
                logo={logo}
                dark={true}
                navData={navContent}
                navbarAlignment="center"
                showNotificationBar={false}
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
                newsletter={false}
            />
        </Fragment>
    )
}

export default HomeSixteen;
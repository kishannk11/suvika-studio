import Head from "next/head";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import {FooterOne as Footer} from "@components/footer";
import {HeaderOne as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const PageShopFullWidth = () => {
    const {products} = useContext(ProductsContext);
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Shop Full Width - Wokiee :: React Next JS Multipurpose eCommerce Template</title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Breadcrumb/>

                <ShopGrid
                    products={products}
                    sidebar={false}
                    containerFluid={true}
                />
            </ContentWrapper>

            <Footer logo={logo}/>
        </Fragment>
    );
};

export default PageShopFullWidth;
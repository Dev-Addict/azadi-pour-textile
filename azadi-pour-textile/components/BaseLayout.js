import Head from 'next/head';

import Header from "./Header";
import BasePage from "./BasePage";
import Footer from "./Footer";

const BaseLayout = ({children, className = '', auth, title = ''}) => {
    return (
        <div className="base-layout-container">
            <Head>
                <title>پارچه مبلی آزادی پور کویر{title ? ` - ${title}` : ''}</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/icon.min.css"/>
            </Head>
            <Header auth={auth}/>
            <main className={`base-layout-main ${className}`}>
                <div className="base-layout-base-page-container">
                    <BasePage title={title}>
                        {children}
                    </BasePage>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default BaseLayout;
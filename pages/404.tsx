import blk from '../styles/notfound.module.css';
import { Layout } from "../components/Layout";
import FooterInfo from "../components/Footer/footerinfo";
import Footer from "../components/Footer";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NotFound = () => {

    const { t } = useTranslation('common');
    
    return(
        <Layout>
            <>
                <div className="container">
                    <div className={blk.col}>
                        <div>
                            <h1>404</h1>
                        </div>
                        <div>
                            <span>OPS!</span>
                            {t('welcome')}
                            <p>Essa página não pode ser encontrada.</p>
                        </div>
                    </div>
                </div>
                
                <FooterInfo />
                <Footer />
            </>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return{
		props: {
			...( await serverSideTranslations( locale as string, ['common'] ))
		}
	}
}

export default NotFound;
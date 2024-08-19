import HeadContainer from '../components/Head';
import { Layout } from '../components/Layout'
import Banner from '../components/Banner';
import ProdHome from '../components/prodHome';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FooterInfo from '../components/Footer/footerinfo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {

	const { t } = useTranslation('common');

	return (
		<Layout>
			<>
				<HeadContainer
					title={t('HeadMetaHome.title')}
					description={t('HeadMetaHome.description')}
					tagurl={'https://blink-site-web-hmg-docker.azurewebsites.net'}
					tagimage={'https://blink-site-web-hmg-docker.azurewebsites.net/img/blink.jpg'}
				/>
				
				<Banner />

				<div className='container-vh'>
					<p className='titleLarge'>{t('titleLarge')}</p>
				</div>

				<section className='container-vh'>
					<ProdHome />
				</section>

				{/* <section className='container-vh'>
					<Newsletter />
				</section> */}

				<FooterInfo />
                <Footer />
				
			</>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return{
		props: {
			...( await serverSideTranslations( locale as string, ['common'] ))
		}
	}
}
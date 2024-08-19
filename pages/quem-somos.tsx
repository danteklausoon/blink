import HeadContainer from '../components/Head';
import blk from '../styles/quemsomos.module.css';
import { Layout } from "../components/Layout";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";
import Icon1 from '../public/img/sobreicon1.png';
import Icon2 from '../public/img/sobreicon2.png';
import Icon3 from '../public/img/sobreicon3.png';
import Footer from '../components/Footer';
import FooterInfo from '../components/Footer/footerinfo';
import { imgSobre } from '../utils/data';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';


const QuemSomos = () => {

    const { t } = useTranslation('common');

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Layout>
            <>
                <HeadContainer
                    title={t('whoweare.HeadMeta.title')}
                    description={t('whoweare.HeadMeta.title')}
                    tagurl={'https://blink-site-web-hmg-docker.azurewebsites.net/quem-somos'}
                    tagimage={'https://blink-site-web-hmg-docker.azurewebsites.net/img/sobre/blink.jpg'}
                />

                <div className='container'>

                    <h1 className={blk.title}>{t('whoweare.title')}</h1>

                    <p className={blk.subtitle}>{t('whoweare.subtitle')}</p>
                
                </div>

                <Carousel autoPlay infinite className={blk.carousel} responsive={responsive}>

                    {imgSobre.map((urlImg, index)=>(
                        <div key={index} className={blk.carousel__item}>
                            <Image width={800} height={533} src={urlImg.img} alt={urlImg.text} />
                            {/* <p>{urlImg.text}</p> */}
                        </div>
                    ))}

                </Carousel>

                <div className='container' style={{marginBottom:'100px'}}>

                    <p>{t('whoweare.text01')}</p>
                        
                    <p>{t('whoweare.text02')}</p>

                    <ul className={blk.list}>
                        <li>
                            <Image width={50} height={40} src={Icon1} alt={t('whoweare.strong3')} />
                            <p>
                                <strong>{t('whoweare.strong3')}</strong>
                                {t('whoweare.text03')}
                            </p>
                        </li>
                        <li>
                            <Image width={50} height={40} src={Icon2} alt={t('whoweare.strong4')} />
                            <p>
                                <strong>{t('whoweare.strong4')}</strong>
                                {t('whoweare.text04')}
                            </p>
                        </li>
                        <li>
                            <Image width={40} height={40} src={Icon3} alt={t('whoweare.strong5')} />
                            <p>
                                <strong>{t('whoweare.strong5')}</strong>
                                {t('whoweare.text05')}
                            </p>
                        </li>
                    </ul>

                    <video
                        // autoPlay
                        controls
                        muted
                        loop
                        className={blk.video}
                    >         
                        <source src="./video/video.mp4" type="video/mp4"/>       
                    </video>

                    <h2 className={blk.txt}>{t('whoweare.text06')}</h2>

                    <p>{t('whoweare.text07')}</p>
                        
                    <p>{t('whoweare.text08')}</p>

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

export default QuemSomos;
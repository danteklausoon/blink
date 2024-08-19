import { Layout } from "../../components/Layout";
import blk from '../../styles/produtos.module.css';
import Image from "next/image";
import ImgProd from "../../public/img/embalagens/MIXS.png";
import icon05 from '../../public/img/icones/icone-05.png';
import icon02 from '../../public/img/icones/icone-02.png';
import icon03 from '../../public/img/icones/icone-03.png';
import Footer from "../../components/Footer";
import FooterInfo from "../../components/Footer/footerinfo";
import HeadContainer from "../../components/Head";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Voltar from "../../components/Votlar";
import TextContato from "../../components/TextContato";


const Produto = () =>{

    const { t } = useTranslation('common');
    
    return(
        <Layout>
            <>
                <HeadContainer
                    title={t('mixs.HeadMeta.title')}
                    description={t('mixs.HeadMeta.description')}
                    tagurl={"https://blink-site-web-hmg-docker.azurewebsites.net/produtos/mixs"}
                    tagimage={"https://blink-site-web-hmg-docker.azurewebsites.net/img/embalagens/mixs.jpg"}
                />

                <div className={blk.container}>

                    <Voltar />

                    <div className={blk.pageProd}>

                        <div className={blk.dmobile}>
                            <ul className={blk.boxtitle__icons_vertical}>

                                <li>
                                    <Image width={40} height={40} src={icon05} alt={t('icon01')} />
                                </li>
                                <li>
                                    <Image width={40} height={40} src={icon02} alt={t('icon02')} />
                                </li>
                                <li>
                                    <Image width={40} height={40} src={icon03} alt={t('icon03')} />
                                </li>

                            </ul>
                        </div>

                        <div className={blk.pageProd__img}>
                            <Image width={250} height={415} src={ImgProd} alt="BLENDS" />
                        </div>

                        <div>
                            <h1>{t('mixs.title')}</h1>
                            
                            <p>{t('mixs.text01')}</p>

                            <div className={blk.titleitem}>{t('titleitem')}</div>

                            <ul>
                                <li>{t('mixs.text02')}</li>
                                <li>{t('mixs.text03')}</li>
                                <li>{t('mixs.text04')}</li>
                                <li>{t('mixs.text05')}</li>
                                <li>{t('mixs.text06')}</li>
                                <li>{t('mixs.text07')}</li>
                            </ul>

                            <TextContato />
                            
                        </div>

                        <div className={blk.ddesktop}>
                            <ul className={blk.boxtitle__icons_vertical}>

                                <li>
                                    <Image width={40} height={40} src={icon05} alt={t('icon01')} />
                                    <p>{t('icon01')}</p>
                                </li>
                                
                                <li>
                                    <Image width={40} height={40} src={icon02} alt={t('icon02')} />
                                    <p>{t('icon02')}</p>
                                </li>

                                <li>
                                    <Image width={40} height={40} src={icon03} alt={t('icon03')} />
                                    <p>{t('icon03')}</p>
                                </li>

                            </ul>
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

export default Produto;
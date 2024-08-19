import { Layout } from "../../components/Layout";
import blk from '../../styles/produtos.module.css';
import Image from "next/image";
import icon02 from '../../public/img/icones/icone-02.png';
import icon03 from '../../public/img/icones/icone-03.png';
import icon04 from '../../public/img/icones/icone-04.png';
import icon01 from '../../public/img/icones/icone-01.png';
import icon06 from '../../public/img/icones/icone-06.png';
import ImgProd from "../../public/img/embalagens/MYST.png";
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
                    title={t('myst.HeadMeta.title')}
                    description={t('myst.HeadMeta.description')}
                    tagurl={"https://blink-site-web-hmg-docker.azurewebsites.net/produtos/myst"}
                    tagimage={"https://blink-site-web-hmg-docker.azurewebsites.net/img/embalagens/myst.jpg"}
                />

                <div className={blk.container}>

                    <Voltar />

                    <div className={blk.pageProd}>

                        <div className={blk.dmobile}>
                            <ul className={blk.boxtitle__icons_vertical}>

                                <li>
                                    <Image width={45} height={45} src={icon02} alt={t('icon02')} />
							        <p>{t('icon02')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon03} alt={t('icon03')} />
							        <p>{t('icon03')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon04} alt={t('icon04')} />
							        <p>{t('icon04')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon01} alt={t('icon05')} />
							        <p>{t('icon05')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon06} alt={t('icon06')} />
							        <p>{t('icon06')}</p>
                                </li>

                            </ul>
                        </div>

                        <div className={blk.pageProd__img}>
                            <Image width={250} height={415} src={ImgProd} alt="LEVERDURAS" />
                        </div>

                        <div>
                            <h1>{t('myst.title')}</h1>
                            
                            <p>{t('myst.text01')}</p>

                            <div className={blk.titleitem}>{t('titleitem')}</div>

                            <ul>
                                <li>{t('myst.text02')}</li>
                                <li>{t('myst.text03')}</li>
                                <li>{t('myst.text04')}</li>
                                <li>{t('myst.text05')}</li>
                                <li>{t('myst.text06')}</li>
                            </ul>

                            <TextContato />
                            
                        </div>

                        <div className={blk.ddesktop}>
                            <ul className={blk.boxtitle__icons_vertical}>

                                <li>
                                    <Image width={45} height={45} src={icon02} alt={t('icon02')} />
							        <p>{t('icon02')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon03} alt={t('icon03')} />
							        <p>{t('icon03')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon04} alt={t('icon04')} />
							        <p>{t('icon04')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon01} alt={t('icon05')} />
							        <p>{t('icon05')}</p>
                                </li>
                                <li>
                                    <Image width={45} height={45} src={icon06} alt={t('icon06')} />
							        <p>{t('icon06')}</p>
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
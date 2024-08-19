import { Layout } from "../../components/Layout";
import blkprod from '../../styles/produtos.module.css';
import blk from '../../components/prodHome/blk.module.css';
import Link from "next/link";
import Image from "next/image";
import icon05 from '../../public/img/icones/icone-05.png';
import icon02 from '../../public/img/icones/icone-02.png';
import icon03 from '../../public/img/icones/icone-03.png';
import icon04 from '../../public/img/icones/icone-04.png';
import icon01 from '../../public/img/icones/icone-01.png';
import icon06 from '../../public/img/icones/icone-06.png';
import ImgMyco from '../../public/img/embalagens/MYCO.png';
import ImgMior from '../../public/img/embalagens/MIOR.png';
import ImgMobe from '../../public/img/embalagens/MOBE.png';
import ImgMixs from '../../public/img/embalagens/MIXS.png';
import ImgMyst from '../../public/img/embalagens/MYST.png';
import Footer from "../../components/Footer";
import FooterInfo from "../../components/Footer/footerinfo";
import { useState } from 'react';
import HeadContainer from "../../components/Head";
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Produtos = () => {

    const { t } = useTranslation('common');

    const [aves, setAves]= useState(false);
	const [suinos, setSuinos]= useState(false);
	const [bovinos, setBovinos]= useState(false);
	const [equinos, setEquinos]= useState(false);
	const [pets, setPets]= useState(false);
	const [acqua, setAcqua]= useState(false);

    const
	avesClick = () => { setAves(!aves); },
	suinosClick = () => { setSuinos(!suinos); },
	bovinosClick = () => { setBovinos(!bovinos); },
	equinosClick = () => { setEquinos(!equinos); },
	petsClick = () => { setPets(!pets); },
	acquaClick = () => { setAcqua(!acqua); }

    const [myco, setMyco]= useState(false);
	const [mior, setMior]= useState(false);
	const [mobe, setMobe]= useState(false);
	const [mixs, setMixs]= useState(false);
	const [myst, setMyst]= useState(false);

	const mycoClick = () => { setMyco(!myco); }
	const miorClick = () => { setMior(!mior); }
	const mobeClick = () => { setMobe(!mobe); }
	const mixsClick = () => { setMixs(!mixs); }
	const mystClick = () => { setMyst(!myst); }

    const [btn1, setBtn1]= useState(false);
    const [btn2, setBtn2]= useState(false);
    const [btn3, setBtn3]= useState(false);
    const [btn4, setBtn4]= useState(false);
    const [btn5, setBtn5]= useState(false);

    const btn1Click = () => { setBtn1(!btn1); }
    const btn2Click = () => { setBtn2(!btn2); }
    const btn3Click = () => { setBtn3(!btn3); }
    const btn4Click = () => { setBtn4(!btn4); }
    const btn5Click = () => { setBtn5(!btn5); }

    
    return(
        <Layout>
            <>
                <HeadContainer
                    title={t('produtos.HeadMeta.title')}
                    description={t('produtos.HeadMeta.description')}
                    tagurl={"https://blink-site-web-hmg-docker.azurewebsites.net/produtos"}
                    tagimage={"https://blink-site-web-hmg-docker.azurewebsites.net/img/blink.jpg"}
                />

                <div className="container">

                    <div className={blkprod.product}>

                        <ul className={blk.boxtitle__icons}>
                                
                            <li className={
                                    myco? blk.tabColor : undefined ||
                                    mior? blk.tabColor : undefined ||
                                    mobe? blk.tabColor : undefined ||
                                    mixs? blk.tabColor : undefined
                                }
                                
                                onMouseEnter={avesClick} onMouseOut={avesClick}
                            >
                                <Image width={40} height={40} src={icon05} alt={t('icon01')} />
                                <p>{t('icon01')}</p>
                            </li>
                            <li className={
                                    myco? blk.tabColor : undefined ||
                                    mior? blk.tabColor : undefined ||
                                    mobe? blk.tabColor : undefined ||
                                    mixs? blk.tabColor : undefined ||
                                    myst? blk.tabColor : undefined
                                }

                                onMouseEnter={suinosClick} onMouseOut={suinosClick}
                            >
                                <Image width={40} height={40} src={icon02} alt={t('icon02')} />
                                <p>{t('icon02')}</p>
                            </li>
                            <li className={
                                    myco? blk.tabColor : undefined ||
                                    mior? blk.tabColor : undefined ||
                                    mobe? blk.tabColor : undefined ||
                                    mixs? blk.tabColor : undefined ||
                                    myst? blk.tabColor : undefined
                                }

                                onMouseEnter={bovinosClick} onMouseOut={bovinosClick}
                            >
                                <Image width={40} height={40} src={icon03} alt={t('icon03')} />
                                <p>{t('icon03')}</p>
                            </li>
                            <li className={
                                    myco? blk.tabColor : undefined ||
                                    mior? blk.tabColor : undefined ||
                                    mobe? blk.tabColor : undefined ||
                                    myst? blk.tabColor : undefined
                                }

                                onMouseEnter={equinosClick} onMouseOut={equinosClick}
                            >
                                <Image width={40} height={40} src={icon04} alt={t('icon04')} />
                                <p>{t('icon04')}</p>
                            </li>
                            <li className={
                                    myco? blk.tabColor : undefined ||
                                    mior? blk.tabColor : undefined ||
                                    mobe? blk.tabColor : undefined ||
                                    myst? blk.tabColor : undefined
                                }
                                
                                onMouseEnter={petsClick} onMouseOut={petsClick}
                            >
                                <Image width={40} height={40} src={icon01} alt={t('icon05')} />
                                <p>{t('icon05')}</p>
                            </li>
                            <li className={
                                    myco? blk.tabColor : undefined ||
                                    mior? blk.tabColor : undefined ||
                                    mobe? blk.tabColor : undefined ||
                                    myst? blk.tabColor : undefined
                                }

                                onMouseEnter={acquaClick} onMouseOut={acquaClick}
                            >
                                <Image width={40} height={40} src={icon06} alt={t('icon06')} />
                                <p>{t('icon06')}</p>
                            </li>
                            
                        </ul>

                    </div>

                    <div style={{marginBottom:'50px'}}>

                        <ul className={blk.listembalagemProd}>
                            <li>
                                <Link href={'/produtos/myco'}
                                    className={
                                        aves? blkprod.efeito  : undefined ||
                                        suinos? blkprod.efeito : undefined ||
                                        bovinos? blkprod.efeito : undefined ||
                                        equinos? blkprod.efeito : undefined ||
                                        pets? blkprod.efeito : undefined ||
                                        acqua? blkprod.efeito : undefined
                                    }
                                >
                                    <Image width={256} height={434} src={ImgMyco} alt="MYCO" title="MYCO" onMouseEnter={mycoClick} onMouseOut={mycoClick} />
                                </Link>

                                <div className={blk.listembalagemInfo}>
                                    <p>
                                        <span onClick={btn1Click} className={btn1? 'd-nonemobile' : undefined}>+</span>
                                        <span onClick={btn1Click} className={btn1?  undefined : 'd-nonemobile'}>-</span>
                                        {t('myco.title')}
                                    </p>

                                    <ul className={btn1?  undefined : 'd-nonemobile'}>
                                        <li>{t('myco.text04')}</li> 
                                        <li>{t('myco.text03')}</li>
                                        <li>{t('myco.text02')}</li>
                                    </ul>

                                </div>

                            </li>
                            <li>
                                <Link href={'/produtos/mior'}
                                    className={
                                        aves? blkprod.efeito  : undefined ||
                                        suinos? blkprod.efeito : undefined ||
                                        bovinos? blkprod.efeito : undefined ||
                                        equinos? blkprod.efeito : undefined ||
                                        pets? blkprod.efeito : undefined ||
                                        acqua? blkprod.efeito : undefined
                                    }
                                >
                                    <Image width={256} height={434} src={ImgMior} alt="MYCO" title="MYCO" onMouseEnter={miorClick} onMouseOut={miorClick} />
                                </Link>

                                <div className={blk.listembalagemInfo}>
                                    <p>
                                        <span onClick={btn2Click} className={btn2? 'd-nonemobile' : undefined}>+</span>
                                        <span onClick={btn2Click} className={btn2?  undefined : 'd-nonemobile'}>-</span>
                                        {t('mior.title')}
                                    </p>
                                    <ul className={btn2?  undefined : 'd-nonemobile'}>
                                        <li>{t('mior.text02')}</li>
                                        <li>{t('mior.text03')}</li>
                                        <li>{t('mior.text04')}</li>
                                        <li>{t('mior.text05')}</li>
                                        <li>{t('mior.text06')}</li>
                                        <li>{t('mior.text07')}</li>
                                        <li>{t('mior.text08')}</li>
                                        <li>{t('mior.text09')}</li>
                                        <li>{t('mior.text10')}</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href={'/produtos/mobe'}
                                    className={
                                        aves? blkprod.efeito  : undefined ||
                                        suinos? blkprod.efeito : undefined ||
                                        bovinos? blkprod.efeito : undefined ||
                                        equinos? blkprod.efeito : undefined ||
                                        pets? blkprod.efeito : undefined ||
                                        acqua? blkprod.efeito : undefined
                                    }
                                >
                                    <Image width={256} height={434} src={ImgMobe} alt="MOBE" title="MOBE" onMouseEnter={mobeClick} onMouseOut={mobeClick} />
                                </Link>

                                <div className={blk.listembalagemInfo}>
                                    <p>
                                        <span onClick={btn3Click} className={btn3? 'd-nonemobile' : undefined}>+</span>
                                        <span onClick={btn3Click} className={btn3?  undefined : 'd-nonemobile'}>-</span>
                                        {t('mobe.title')}
                                    </p>
                                    <ul className={btn3?  undefined : 'd-nonemobile'}>
                                        <li>{t('mobe.text02')}</li>
                                        <li>{t('mobe.text03')}</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href={'/produtos/mixs'}
                                    className={
                                        aves? blkprod.efeito  : undefined ||
                                        suinos? blkprod.efeito : undefined ||
                                        bovinos? blkprod.efeito : undefined ||
                                        equinos? 'opacity': undefined ||
                                        pets? 'opacity': undefined ||
                                        acqua? 'opacity': undefined
                                    }
                                >
                                    <Image width={256} height={434} src={ImgMixs} alt="MIXS" title="MIXS" onMouseEnter={mixsClick} onMouseOut={mixsClick} />
                                </Link>

                                <div className={blk.listembalagemInfo}>
                                    <p>
                                        <span onClick={btn4Click} className={btn4? 'd-nonemobile' : undefined}>+</span>
                                        <span onClick={btn4Click} className={btn4?  undefined : 'd-nonemobile'}>-</span>
                                        {t('mixs.title')}
                                    </p>
                                    <ul className={btn4?  undefined : 'd-nonemobile'}>
                                        <li>{t('mixs.text02')}</li>
                                        <li>{t('mixs.text03')}</li>
                                        <li>{t('mixs.text04')}</li>
                                        <li>{t('mixs.text05')}</li>
                                        <li>{t('mixs.text06')}</li>
                                        <li>{t('mixs.text07')}</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href={'/produtos/myst'}
                                    className={
                                        aves? 'opacity' : undefined ||
                                        suinos? blkprod.efeito : undefined ||
                                        bovinos? blkprod.efeito : undefined ||
                                        equinos? blkprod.efeito : undefined ||
                                        pets? blkprod.efeito : undefined ||
                                        acqua? blkprod.efeito : undefined
                                    }
                                >
                                    <Image width={256} height={434} src={ImgMyst} alt="MYST" title="MYST" onMouseEnter={mystClick} onMouseOut={mystClick} />
                                </Link>

                                <div className={blk.listembalagemInfo}>
                                    <p>
                                        <span onClick={btn5Click} className={btn5? 'd-nonemobile' : undefined}>+</span>
                                        <span onClick={btn5Click} className={btn5?  undefined : 'd-nonemobile'}>-</span>
                                        {t('myst.title')}
                                    </p>
                                    <ul className={btn5?  undefined : 'd-nonemobile'}>
                                        <li>{t('myst.text02')}</li>
                                        <li>{t('myst.text03')}</li>
                                        <li>{t('myst.text04')}</li>
                                        <li>{t('myst.text05')}</li>
                                        <li>{t('myst.text06')}</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <FooterInfo />
                <Footer />
            </>
        </Layout>
    );
}

export default Produtos;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return{
		props: {
			...( await serverSideTranslations( locale as string, ['common'] ))
		}
	}
}
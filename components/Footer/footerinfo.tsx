import blk from './blk.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Phone from '../../public/img/footer/icon1.png';
import Maps from '../../public/img/footer/icon2.png';
import Developer from '../../public/img/footer/icon3.png';
import { redeSocial } from '../../utils/data';
import { useTranslation } from 'next-i18next';

const FooterInfo = () => {

    const { t } = useTranslation('common');
    
    return (
        <>
            <div className={blk.footerinfo}>
                <div>
                    <Image width={50} height={50} src={Phone} alt="Telefone" />

                    <p>+55 11 4240-2131</p>
                    <p>+595 631 22285</p>
                </div>

                <div>
                    <Image width={50} height={50} src={Maps} alt="Endereço" />

                    {/* <p>{t('endereco1')}</p> */}
                    <p>{t('endereco2')}</p>
                    <p>{t('endereco3')}</p>
                </div>

                <div>
                    <Image width={50} height={50} src={Developer} alt="E-mail" />

                    <p><a href="mailto:myblink@blinkbiotech.com">myblink@blinkbiotech.com</a></p>
                </div>

                <div>

                    <ul className={blk.social} style={{textAlign:'right'}}>
                        {redeSocial.map((social, index)=>(
                            <li key={index}>
                                <Link target={'_blank'} href={social.path}>
                                    <Image width={50} height={50}
                                        src={social.img}
                                        alt={social.alt}
                                        title={social.alt}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </>
    );
}

export default FooterInfo;
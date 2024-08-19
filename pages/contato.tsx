import HeadContainer from '../components/Head';
import blk from '../styles/contato.module.css';
import Footer from "../components/Footer";
import { Layout } from "../components/Layout";
import Image from 'next/image';
import Developer from '../public/img/footer/icon3.png';
import Link from 'next/link';
import { redeSocial } from '../utils/data';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Contato = () => {

    const { t } = useTranslation('common');

    return(
        <Layout>
            <>
                <HeadContainer
                    title={t('contato.HeadMeta.title')}
                    description={t('contato.HeadMeta.description')}
                    tagurl={'https://blink-site-web-hmg-docker.azurewebsites.net/contato'}
                    tagimage={'https://blink-site-web-hmg-docker.azurewebsites.net/img/blink.jpg'}
                />

                <div className='container' style={{marginTop:'100px'}}>
                    <h1 className={blk.title}>{t('contato.title')}.</h1>

                    <div className={blk.colrow}>
                        <ul>
                            <li style={{display:'flex',alignItems:'center'}}>
                                <Image width={50} height={50} src={Developer} alt="E-mail" style={{marginRight:'15px'}} /> 
                                <a href="mailto:myblink@blinkbiotech.com">myblink@blinkbiotech.com</a>
                            </li>
                            {/* <li>
                                {t('endereco1')}
                            </li> */}
                            <li>
                                {t('endereco2')}
                            </li>
                            <li>
                                {t('endereco3')}
                            </li>

                        </ul>
                        
                        <div>
                            <form className={blk.form}>

                                <input required type='name' placeholder={`${t('contato.nome')}`} />

                                <input required type='email' placeholder={`${t('contato.email')}`} />

                                <select required>
                                    <option hidden selected value=''>{t('contato.assunto.text1')}</option>
                                    <option value='Técnico'>{t('contato.assunto.text2')}</option>
                                    <option value='Comercial'>{t('contato.assunto.text3')}</option>
                                    <option value='Marketing'>{t('contato.assunto.text4')}</option>
                                    <option value='Administrativo'>{t('contato.assunto.text5')}</option>
                                    <option value='Outros'>{t('contato.assunto.text6')}</option>
                                </select>

                                <input required type='text' placeholder={`${t('contato.produtos')}`} />

                                <textarea required rows={5} placeholder={`${t('contato.mensagem')}`}></textarea>

                                <button>{t('contato.enviar')}</button>
                            </form>
                        </div>
                    </div>
                </div>

                <ul className={blk.social}>
                    {redeSocial.map((social, index)=>(
                        <li key={index}>
                            <Link href={social.path}>
                                <Image width={50} height={50}
                                    src={social.img}
                                    alt={social.alt}
                                    title={social.alt}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={blk.footer}>
                    <Footer />
                </div>
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

export default Contato;
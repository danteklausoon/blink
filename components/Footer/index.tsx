import blk from './blk.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuNavigation } from '../../utils/data';
import { useTranslation } from 'next-i18next';

const Footer = () => {

    const { t } = useTranslation('common');

    const router = useRouter();
    
    return (
        <footer>

            <div className={blk.footerbottom}>
                
                <div>
                    <p>2021 © Blink Biotech - {t('footer')}</p>
                </div>

                <nav>

                    <ul className={blk.footerbottom__menu}>

                        <li>
                            <Link className={router.pathname == '/'? blk.active : undefined} href={"/"}>{t('menu.home')}</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/quem-somos'? blk.active : undefined} href={"/quem-somos"}>{t('menu.quemsomos')}</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/produtos'? blk.active : undefined} href={"/produtos"}>{t('menu.produtos')}</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == '/contato'? blk.active : undefined} href={"/contato"}>{t('menu.contato')}</Link>
                        </li>

                    </ul>

                </nav>

            </div>
        </footer>
    );
}

export default Footer;
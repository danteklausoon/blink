import blk from './blk.module.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';


const Navibar = () => {

    const router = useRouter();
    const { t } = useTranslation('common');

    return (
        <nav>

            <ul className={blk.boxmenu__menu}>

                <li>
                    <Link href={'/'}
                        className={router.pathname == '/'? blk.active : undefined}
                    >{t('menu.home')}</Link>
                </li>
                <li>
                    <Link href={'/quem-somos'} 
                        className={router.pathname == '/quem-somos'? blk.active : undefined}
                    >{t('menu.quemsomos')}</Link>
                </li>
                <li>
                    <Link href={'/produtos'} className={router.pathname == '/produtos'? blk.active : undefined}
                    >{t('menu.produtos')}</Link>
                </li>
                <li>
                    <Link href={'/contato'} className={router.pathname == '/contato'? blk.active : undefined}
                    >{t('menu.contato')}</Link>
                </li>

            </ul>

        </nav>
    );
}

export default Navibar;
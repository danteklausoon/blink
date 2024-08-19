import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import blk from '../styles/produtos.module.css';

const Voltar = () => {

    const { t } = useTranslation('common');
    
    return (
        <div className={blk.btnback}>
            <Link href={'/produtos'}>
                {'<<'} {t('btnback')}   
            </Link>
        </div>
    );
}

export default Voltar;
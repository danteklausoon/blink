import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import blk from '../styles/produtos.module.css';

const TextContato = () => {

    const { t } = useTranslation('common');
    
    return (
        <div className={blk.linkcont}>
            {t('textcontat.text1')} 
            <Link href={'/contato'}> <span>{t('textcontat.text2')}</span>.</Link> 
        </div>
    );
}

export default TextContato;
import blk from './blk.module.css';
import { useTranslation } from 'next-i18next';

const Newsletter = () => {

    const { t } = useTranslation('common');

    return(
        <div className={blk.newsletter}>

            <div className={blk.newsletter__texts}>
                <p>{t('por_dentro')}</p>
                <h2>{t('assine')}</h2>
            </div>

            <div className={blk.newsletter__form}>
                <form action="" method="post">
                    <input type='email' placeholder='E-mail' />
                    <button>{t('enviar')}</button>
                </form>
            </div>

        </div>
    );
}

export default Newsletter;
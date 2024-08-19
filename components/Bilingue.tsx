import { useRouter } from 'next/router';
import { useState } from 'react';
import blk from './Layout/blk.module.css';
import Link from 'next/link';

const Bilingual = () => {

    const router = useRouter();
    const [showClick, setShowClick] = useState(false);

    const bilinguiClick = () => {
        setShowClick(!showClick);
    }

    return(

        <div className={blk.boxlingual}>

            <div className={blk.boxlingual__button} onClick={bilinguiClick}>

                {router.locale}

                <ul className={showClick? blk.showboxlingual : undefined}>

                    {router.locales?.map((item, index)=>(

                        <li key={index}
                            style={{display: router.locale === item? 'none' : undefined }}
                            className={ !showClick? blk.noneboxlingual : undefined }
                        >

                            <Link href={""} locale={item} >
                                { item }
                            </Link> 

                        </li>
                        
                    ))}

                </ul>

            </div>

        </div>
    );
}

export default Bilingual;
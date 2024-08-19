import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { slideBanner } from "../../utils/data";
import blk from './blk.module.css';
import Image from "next/image";
import { useTranslation } from 'next-i18next';

const Banner = () => {

    const { t } = useTranslation('common');

	return (
		<>

            <div className={blk.bannerbox}>

                {/* <Carousel autoPlay infiniteLoop interval={8000} showArrows={false} showStatus={false} showThumbs={false}>
                    {slideBanner.map((imgSlide, index)=>(
                        <div key={index}>
                            <Image width={1920} height={1080} className={blk.slideMobile} src={imgSlide.img} alt={imgSlide.alt} />
                        </div>
                    ))}
                </Carousel> */}
                
                <video muted playsInline autoPlay={true} loop={true} controls={false} width="320" height="240" className={blk.bg_video}>
                    <source src="./video/background.webm" type="video/webm"/>  
                    <source src="./video/background.mp4" type="video/mp4"/>  
                </video>

                <div className={blk.bannerbox__texts}>

                    <section>

                        <div className={blk.bannerbox__texts_titles}>
                            <h1>{t('banner.title')}</h1>
                            <p>{t('banner.subtitle')}</p>
                        </div>
                        
                        <ul className={blk.bannerbox__texts_menu}>
                            <li>
                                <p>{t('banner.whowetext')}</p>
                                <Link href={'/quem-somos'}>{t('banner.whowebtn')}</Link>
                            </li>
                            <li>
                                <p>{t('banner.prodtext')}</p>
                                <Link href={'/produtos'}>{t('banner.prodbtn')}</Link>
                            </li>
                            <li>
                                <p>{t('banner.contacttext')}</p>
                                <Link href={'/contato'}>{t('banner.contactbtn')}</Link>
                            </li>
                        </ul>

                    </section>

                </div>
            </div>
				
		</>
	)
}
export default Banner;
import { useState } from 'react';
import blk from './blk.module.css';
import Navibar from '../Navibar';
import Image from 'next/image';
import Logo from '../../public/img/logo-blink.png';
import LogoMobile from '../../public/img/logo-blink-mobile.png';
import Bilingual from '../Bilingue';
import { LayoutElement } from '../../Types/Layout';

export const Layout = ({children}: LayoutElement) => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            <header className={blk.header}>

                <div className={blk.logo} >
                    
                    <Image className={blk.desktop} onClick={handleClick} width={60} src={Logo} alt="Logo Blink" />
                    <Image className={blk.mobile} onClick={handleClick} width={90} src={LogoMobile} alt="Logo Blink" />
                
                </div>

                <div onClick={handleClick} className={show ? blk.boxmenushow : blk.boxmenu}>

                    <Navibar />

                </div>

                <Bilingual />

            </header>

            <main>

                {children}

            </main>

        </>
    );
}
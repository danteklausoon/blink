import blk from './blk.module.css';
import Link from 'next/link';
import Image from 'next/image';
import icon05 from '../../public/img/icones/icone-05.png';
import icon02 from '../../public/img/icones/icone-02.png';
import icon03 from '../../public/img/icones/icone-03.png';
import icon04 from '../../public/img/icones/icone-04.png';
import icon01 from '../../public/img/icones/icone-01.png';
import icon06 from '../../public/img/icones/icone-06.png';
import ImgMyco from '../../public/img/embalagens/MYCO.png';
import ImgMior from '../../public/img/embalagens/MIOR.png';
import ImgMobe from '../../public/img/embalagens/MOBE.png';
import ImgMixs from '../../public/img/embalagens/MIXS.png';
import ImgMyst from '../../public/img/embalagens/MYST.png';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const ProdHome = () => {

	const { t } = useTranslation('common');

	const [aves, setAves]= useState(false);
	const [suinos, setSuinos]= useState(false);
	const [bovinos, setBovinos]= useState(false);
	const [equinos, setEquinos]= useState(false);
	const [pets, setPets]= useState(false);
	const [acqua, setAcqua]= useState(false);

    const 
	avesClick = () => { setAves(!aves); },
	suinosClick = () => { setSuinos(!suinos); },
	bovinosClick = () => { setBovinos(!bovinos); },
	equinosClick = () => { setEquinos(!equinos); },
	petsClick = () => { setPets(!pets); },
	acquaClick = () => { setAcqua(!acqua); };


	const [myco, setMyco]= useState(false);
	const [mior, setMior]= useState(false);
	const [mobe, setMobe]= useState(false);
	const [mixs, setMixs]= useState(false);
	const [myst, setMyst]= useState(false);

	const 
	mycoClick = () => { setMyco(!myco); },
	miorClick = () => { setMior(!mior); },
	mobeClick = () => { setMobe(!mobe); },
	mixsClick = () => { setMixs(!mixs); },
	mystClick = () => { setMyst(!myst); }

	return (
		<>
			<div className={blk.boxtitle}>
				<div>
					<h1>{t('explore_linha')}</h1>
					<p>{t('clique_abaixo')}</p>
				</div>
				<div>
					<ul className={blk.boxtitle__icons}>
						
						<li 
							className={
								myco? blk.tabColor : undefined ||
								mior? blk.tabColor : undefined ||
								mobe? blk.tabColor : undefined ||
								mixs? blk.tabColor : undefined
							}
							
							onMouseEnter={avesClick} onMouseOut={avesClick}
						>
							<Image width={45} height={45} src={icon05} alt={t('icon01')} />
							<p>{t('icon01')}</p>
						</li>
						<li 
							className={
								myco? blk.tabColor : undefined ||
								mior? blk.tabColor : undefined ||
								mobe? blk.tabColor : undefined ||
								mixs? blk.tabColor : undefined ||
								myst? blk.tabColor : undefined
							}

							onMouseEnter={suinosClick} onMouseOut={suinosClick}
						>
							<Image width={45} height={45} src={icon02} alt={t('icon02')} />
							<p>{t('icon02')}</p>
						</li>
						<li 
							className={
								myco? blk.tabColor : undefined ||
								mior? blk.tabColor : undefined ||
								mobe? blk.tabColor : undefined ||
								mixs? blk.tabColor : undefined ||
								myst? blk.tabColor : undefined
							}

							onMouseEnter={bovinosClick} onMouseOut={bovinosClick}
						>
							<Image width={45} height={45} src={icon03} alt={t('icon03')} />
							<p>{t('icon03')}</p>
						</li>
						<li 
							className={
								myco? blk.tabColor : undefined ||
								mior? blk.tabColor : undefined ||
								mobe? blk.tabColor : undefined ||
								myst? blk.tabColor : undefined
							}

							onMouseEnter={equinosClick} onMouseOut={equinosClick}
						>
							<Image width={45} height={45} src={icon04} alt={t('icon04')} />
							<p>{t('icon04')}</p>
						</li>
						<li 
							className={
								myco? blk.tabColor : undefined ||
								mior? blk.tabColor : undefined ||
								mobe? blk.tabColor : undefined ||
								myst? blk.tabColor : undefined
							}
							
							onMouseEnter={petsClick} onMouseOut={petsClick}
						>
							<Image width={45} height={45} src={icon01} alt={t('icon05')} />
							<p>{t('icon05')}</p>
						</li>
						<li 
							className={
								myco? blk.tabColor : undefined ||
								mior? blk.tabColor : undefined ||
								mobe? blk.tabColor : undefined ||
								myst? blk.tabColor : undefined
							}

							onMouseEnter={acquaClick} onMouseOut={acquaClick}
						>
							<Image width={45} height={45} src={icon06} alt={t('icon06')} />
							<p>{t('icon06')}</p>
						</li>
						
					</ul>
				</div>
			</div>


			<ul className={blk.listembalagem}>
				<li>
					<Link href={'/produtos/myco'}
						className={
							aves? 'efeito' : undefined  ||
							suinos? 'efeito': undefined ||
							bovinos? 'efeito': undefined ||
							equinos? 'efeito': undefined ||
							pets? 'efeito': undefined ||
							acqua? 'efeito': undefined
						}
					>
						<Image width={256} height={434} src={ImgMyco} alt="MYCO" title="MYCO" onMouseEnter={mycoClick} onMouseOut={mycoClick} />
					</Link>
				</li>
				<li>
					<Link href={'/produtos/mior'}
						className={
							aves? 'efeito' : undefined ||
							suinos? 'efeito': undefined ||
							bovinos? 'efeito': undefined ||
							equinos? 'efeito': undefined ||
							pets? 'efeito': undefined ||
							acqua? 'efeito': undefined
						}
					>
						<Image width={256} height={434} src={ImgMior} alt="MYCO" title="MYCO" onMouseEnter={miorClick} onMouseOut={miorClick} />
					</Link>
				</li>
				<li>
					<Link href={'/produtos/mobe'}
						className={
							aves? 'efeito' : undefined ||
							suinos? 'efeito': undefined ||
							bovinos? 'efeito': undefined ||
							equinos? 'efeito': undefined ||
							pets? 'efeito': undefined ||
							acqua? 'efeito': undefined
						}
					>
						<Image width={256} height={434} src={ImgMobe} alt="MOBE" title="MOBE" onMouseEnter={mobeClick} onMouseOut={mobeClick} />
					</Link>
				</li>
				<li>
					<Link href={'/produtos/mixs'}
						className={
							aves? 'efeito' : undefined ||
							suinos? 'efeito': undefined ||
							bovinos? 'efeito': undefined ||
							equinos? 'opacity': undefined ||
							pets? 'opacity': undefined ||
							acqua? 'opacity': undefined
						}
					>
						<Image width={256} height={434} src={ImgMixs} alt="MIXS" title="MIXS" onMouseEnter={mixsClick} onMouseOut={mixsClick} />
					</Link>
				</li>
				<li>
					<Link href={'/produtos/myst'}
						className={
							aves? 'opacity' : undefined ||
							suinos? 'efeito': undefined ||
							bovinos? 'efeito': undefined ||
							equinos? 'efeito': undefined ||
							pets? 'efeito': undefined ||
							acqua? 'efeito': undefined
						}
					>
						<Image width={256} height={434} src={ImgMyst} alt="MYST" title="MYST" onMouseEnter={mystClick} onMouseOut={mystClick} />
					</Link>
				</li>
			</ul>
		</>
	);
}

export default ProdHome;
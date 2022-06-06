import { FC } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '@data/dummy';
import { useSharedState } from '@contexts/app';
import { setIsMenuActive } from '@contexts/actions';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: FC = () => {
	const router = useRouter();

	const [{ currentColorMode, isMenuActive, screenSize }, dispatch] =
		useSharedState();
	setIsMenuActive;

	const handleCloseSideBar = () => {
		if (screenSize !== undefined && screenSize <= 900) {
			setIsMenuActive(dispatch, false);
		}
	};

	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

	return (
		<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
			{isMenuActive && (
				<>
					<div className='flex justify-between items-center'>
						<Link href='/'>
							<a
								onClick={handleCloseSideBar}
								className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
							>
								<SiShopware /> <span>Shoppy</span>
							</a>
						</Link>
						<TooltipComponent content='Menu' position='BottomCenter'>
							<button
								type='button'
								onClick={() => setIsMenuActive(dispatch, !isMenuActive)}
								style={{ color: currentColorMode }}
								className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className='mt-10 '>
						{links.map((item) => (
							<div key={item.title}>
								<p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
									{item.title}
								</p>
								{item.links.map((link) => {
									const linkName = `/${link.name}`;
									const isActive = router.pathname.startsWith(linkName);
									return (
										<Link href={linkName} key={linkName}>
											<a
												onClick={handleCloseSideBar}
												style={{
													backgroundColor: isActive ? currentColorMode : '',
												}}
												className={isActive ? activeLink : normalLink}
											>
												{/* <span class='inline'>{link.icon} </span> */}
												{link.icon}{' '}
												<span className='capitalize '>{link.name}</span>
											</a>
										</Link>
									);
								})}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;

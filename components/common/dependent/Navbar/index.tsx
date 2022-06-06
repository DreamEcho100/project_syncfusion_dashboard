/* eslint-disable @next/next/no-img-element */
import { FC, ReactNode, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import avatar from '@data/avatar.jpg';

import {
	handleIsClick,
	setIsMenuActive,
	setScreenSize,
} from '@contexts/actions';
import { useSharedState } from '@contexts/app';
import { TooltipComponent } from '@components/index';
import { Cart, Chat, Notification, UserProfile } from '@components/index';

const NavButton = ({
	title,
	customFunc,
	icon,
	color,
	dotColor,
}: {
	title: string;
	customFunc: () => void;
	icon: ReactNode;
	color: string;
	dotColor?: string;
}) => (
	<TooltipComponent content={title} position='bottomCenter'>
		<button
			type='button'
			onClick={() => customFunc()}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'
		>
			<span
				style={{ background: dotColor }}
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar: FC = () => {
	const [{ currentColorMode, isMenuActive, isClicked, screenSize }, dispatch] =
		useSharedState();

	// handleClick

	useEffect(() => {
		const handleResize = () => setScreenSize(dispatch, window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, [dispatch]);

	useEffect(() => {
		if (screenSize && screenSize <= 900) {
			setIsMenuActive(dispatch, false);
		} else {
			setIsMenuActive(dispatch, true);
		}
	}, [dispatch, screenSize]);

	const handleToggleIsMenuActive = () =>
		setIsMenuActive(dispatch, !isMenuActive);

	return (
		<div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
			<NavButton
				title='Menu'
				customFunc={handleToggleIsMenuActive}
				color={currentColorMode}
				icon={<AiOutlineMenu />}
			/>
			<div className='flex'>
				<NavButton
					title='Cart'
					customFunc={() =>
						handleIsClick(dispatch, {
							isClickedItem: 'cart',
							isClickedState: true,
						})
					}
					color={currentColorMode}
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title='Chat'
					dotColor='#03C9D7'
					customFunc={() =>
						handleIsClick(dispatch, {
							isClickedItem: 'chat',
							isClickedState: true,
						})
					}
					color={currentColorMode}
					icon={<BsChatLeft />}
				/>
				<NavButton
					title='Notification'
					dotColor='rgb(254, 201, 15)'
					customFunc={() =>
						handleIsClick(dispatch, {
							isClickedItem: 'notification',
							isClickedState: true,
						})
					}
					color={currentColorMode}
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content='Profile' position='bottomCenter'>
					<div
						className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
						onClick={() =>
							handleIsClick(dispatch, {
								isClickedItem: 'userProfile',
								isClickedState: true,
							})
						}
					>
						<img
							className='rounded-full w-8 h-8'
							src={avatar.src}
							alt='user-profile'
						/>
						<p>
							<span className='text-gray-400 text-14'>Hi,</span>{' '}
							<span className='text-gray-400 font-bold ml-1 text-14'>
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>

				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;

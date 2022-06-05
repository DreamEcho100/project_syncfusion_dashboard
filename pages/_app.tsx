import type { AppProps } from 'next/app';
import { FiSettings } from 'react-icons/fi';
// import '../styles/globals.css';
import '../styles/index.css';
import { useEffect, useState } from 'react';
import TooltipComponent from '../components/independent/TooltipComponent';

function MyApp({ Component, pageProps }: AppProps) {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const [currentMode, setCurrentMode] = useState<'dark' | 'light'>('light');
	const [currentColor, setCurrentColor] = useState('');
	const [themeSettings, setThemeSettings] = useState(false);

	useEffect(() => {
		document.getElementById('js-licensing')?.remove();
		const currentThemeColor = localStorage.getItem('colorMode');
		const currentThemeMode = localStorage.getItem('themeMode');
		if (
			currentThemeColor &&
			currentThemeMode &&
			// ['light', 'dark'].indexOf(currentThemeMode) !== -1
			(currentThemeMode == 'light' || currentThemeMode == 'dark')
		) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, []);

	return (
		<div
			className={`${
				currentMode === 'dark' ? 'dark' : ''
			} flex relative dark:bg-main-dark-bg`}
		>
			<div className='fixed ring-4 bottom-4' style={{ zIndex: '1000' }}>
				<TooltipComponent
					content='settings'
					position='topRight'
					windowCollision
				>
					<button
						onClick={() => setThemeSettings(true)}
						className='p-3 text-3xl hover:drop-shadow-xl hover:bg-light-gray text-white'
						style={{
							background: 'blue',
							borderRadius: '50%',
						}}
					>
						<FiSettings />
					</button>
				</TooltipComponent>
			</div>
			{isMenuActive ? (
				<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
					{/* <Sidebar /> */}
				</div>
			) : (
				<div className='w-0 dark:bg-secondary-dark-bg'>{/* <Sidebar /> */}</div>
			)}
			<div
				className={
					isMenuActive
						? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
						: 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
				}
			>
				<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
					{/* <Navbar /> */}
				</div>
				<div>
					{/* {themeSettings && (<ThemeSettings />)} */}
					<Component {...pageProps} />
				</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
}

export default MyApp;

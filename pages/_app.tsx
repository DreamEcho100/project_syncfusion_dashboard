import type { AppProps } from 'next/app';
import { FiSettings } from 'react-icons/fi';
// import '../styles/globals.css';
import '../styles/index.css';
import { ReactNode, useEffect } from 'react';
import { TooltipComponent } from '../components';
import { SharedStateProvider, useSharedState } from '../contexts/app';
import { setColorMode, setThemeMode } from '../contexts/actions';
import { EAppContextConsts } from '../contexts/constants';

const Layout = ({ children }: { children: ReactNode }) => {
	const [{ isMenuActive, currentThemeMode }, dispatch] = useSharedState();

	useEffect(() => {
		document.getElementById('js-licensing')?.remove();
		const currentColorMode = localStorage.getItem('colorMode');
		const currentThemeMode = localStorage.getItem('themeMode');
		if (
			currentColorMode &&
			currentThemeMode &&
			// ['light', 'dark'].indexOf(currentThemeMode) !== -1
			(currentThemeMode == 'light' || currentThemeMode == 'dark')
		) {
			setThemeMode(dispatch, currentThemeMode);
			setColorMode(dispatch, currentColorMode);
		}
	}, [dispatch]);

	return (
		<div
			className={`${
				currentThemeMode === 'dark' ? 'dark' : ''
			} flex relative dark:bg-main-dark-bg`}
		>
			<div className='fixed ring-4 bottom-4' style={{ zIndex: '1000' }}>
				<TooltipComponent
					content='settings'
					position='topRight'
					windowCollision
				>
					<button
						onClick={() =>
							dispatch({
								type: EAppContextConsts.SET_THEME_SETTINGS,
								payload: {
									themeSettings: true,
								},
							})
						}
						className='p-3 text-3xl hover:drop-shadow-xl hover:bg-light-gray text-white bg-blue-900'
						style={{
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
					{children}
				</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SharedStateProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SharedStateProvider>
	);
}

export default MyApp;

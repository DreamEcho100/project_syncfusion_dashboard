import { Dispatch } from 'react';
import { EAppContextConsts } from './constants';
import {
	IInitialState,
	IReducerActions,
	TInitialStateScreenSize,
	TSetIsClicked,
} from './ts';

export const setThemeMode = (
	dispatch: Dispatch<IReducerActions>,
	currentThemeMode: IInitialState['currentThemeMode']
) => {
	dispatch({
		type: EAppContextConsts.SET_CURRENT_THEME_MODE,
		payload: {
			currentThemeMode,
		},
	});

	if (localStorage.getItem('themeMode') !== currentThemeMode)
		localStorage.setItem('themeMode', currentThemeMode);
};

export const setColorMode = (
	dispatch: Dispatch<IReducerActions>,
	currentColorMode: IInitialState['currentColorMode']
) => {
	// setCurrentColor(currentColorMode);
	dispatch({
		type: EAppContextConsts.SET_CURRENT_COLOR_MODE,
		payload: {
			currentColorMode,
		},
	});

	if (localStorage.getItem('colorMode') !== currentColorMode)
		localStorage.setItem('colorMode', currentColorMode);
};

export const setThemeSettings = (
	dispatch: Dispatch<IReducerActions>,
	themeSettings: IInitialState['themeSettings']
) => {
	dispatch({
		type: EAppContextConsts.SET_THEME_SETTINGS,
		payload: {
			themeSettings,
		},
	});
};

export const setScreenSize = (
	dispatch: Dispatch<IReducerActions>,
	screenSize: TInitialStateScreenSize
) => {
	dispatch({
		type: EAppContextConsts.SET_SCREEN_SIZE,
		payload: {
			screenSize,
		},
	});
};

export const setIsMenuActive = (
	dispatch: Dispatch<IReducerActions>,
	isMenuActive: IInitialState['isMenuActive']
) => {
	dispatch({
		type: EAppContextConsts.SET_IS_MENU_ACTIVE,
		payload: {
			isMenuActive,
		},
	});
};

export const handleIsClick = (
	dispatch: Dispatch<IReducerActions>,
	{
		isClickedItem,
		isClickedState,
	}: {
		isClickedItem: keyof IInitialState['isClicked'];
		isClickedState: IInitialState['isClicked'][keyof IInitialState['isClicked']];
	}
) => {
	dispatch({
		type: EAppContextConsts.SET_IS_CLICKED,
		payload: {
			isClickedItem,
		},
	});
};

// const initialStateIsClicked = {
// 	chat: false,
// 	cart: false,
// 	userProfile: false,
// 	notification: false,
// };
// const handleClick = (clicked) =>
// 	setIsClicked({ ...initialStateIsClicked, [clicked]: true });

import { Dispatch } from 'react';
import { EAppContextConsts } from './constants';
import { IInitialState, IReducerActions } from './ts';

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

// const initialStateIsClicked = {
// 	chat: false,
// 	cart: false,
// 	userProfile: false,
// 	notification: false,
// };
// const handleClick = (clicked) =>
// 	setIsClicked({ ...initialStateIsClicked, [clicked]: true });

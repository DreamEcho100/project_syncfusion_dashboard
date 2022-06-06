import { IInitialState } from './ts';

export const initialState: IInitialState = {
	screenSize: undefined,
	currentColorMode: '#03C9D7',
	currentThemeMode: 'light',
	themeSettings: false,
	isMenuActive: true,
	isClicked: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
		clicked: false,
	},
};

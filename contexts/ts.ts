import { EAppContextConsts } from './constants';

export type TInitialStateScreenSize = number;

export interface IInitialState {
	screenSize?: TInitialStateScreenSize;
	currentColorMode: string;
	currentThemeMode: 'light' | 'dark';
	themeSettings: boolean;
	isMenuActive: boolean;
	isClicked: {
		chat: boolean;
		cart: boolean;
		userProfile: boolean;
		notification: boolean;
		clicked: boolean;
	};
}

interface ISetReducerAction<Type, Payload = undefined> {
	type: Type;
	payload: Payload;
}
type TSetScreenSize = ISetReducerAction<
	EAppContextConsts.SET_SCREEN_SIZE,
	{
		screenSize: number;
	}
>;

type TSetCurrentColorMode = ISetReducerAction<
	EAppContextConsts.SET_CURRENT_COLOR_MODE,
	{
		currentColorMode: string;
	}
>;
type TSetCurrentThemeMode = ISetReducerAction<
	EAppContextConsts.SET_CURRENT_THEME_MODE,
	{
		currentThemeMode: IInitialState['currentThemeMode'];
	}
>;
type TSetThemeSettings = ISetReducerAction<
	EAppContextConsts.SET_THEME_SETTINGS,
	{
		themeSettings: boolean;
	}
>;
type TSetIsMenuActive = ISetReducerAction<
	EAppContextConsts.SET_IS_MENU_ACTIVE,
	{
		isMenuActive: boolean;
	}
>;
export type TSetIsClicked = ISetReducerAction<
	EAppContextConsts.SET_IS_CLICKED,
	{ isClickedItem: keyof IInitialState['isClicked'] }
>;

export type IReducerActions =
	| TSetScreenSize
	| TSetCurrentColorMode
	| TSetCurrentThemeMode
	| TSetThemeSettings
	| TSetIsMenuActive
	| TSetIsClicked;

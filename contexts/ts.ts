import { EAppContextConsts } from './constants';

export interface IInitialState {
	screenSize?: number;
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

interface ISetReducerCtion<Type, Payload = undefined> {
	type: Type;
	payload: Payload;
}
type TSetScreenSize = ISetReducerCtion<
	EAppContextConsts.SET_SCREEN_SIZE,
	{
		screenSize: number;
	}
>;

type TSetCurrentColorMode = ISetReducerCtion<
	EAppContextConsts.SET_CURRENT_COLOR_MODE,
	{
		currentColorMode: string;
	}
>;
type TSetCurrentThemeMode = ISetReducerCtion<
	EAppContextConsts.SET_CURRENT_THEME_MODE,
	{
		currentThemeMode: IInitialState['currentThemeMode'];
	}
>;
type TSetThemeSettings = ISetReducerCtion<
	EAppContextConsts.SET_THEME_SETTINGS,
	{
		themeSettings: boolean;
	}
>;
type TSetIsMenuActive = ISetReducerCtion<
	EAppContextConsts.SET_IS_MENU_ACTIVE,
	{
		isMenuActive: boolean;
	}
>;
type TSetIsClicked = ISetReducerCtion<
	EAppContextConsts.SET_IS_CLICKED,
	(
		| { chat: boolean }
		| { cart: boolean }
		| { userProfile: boolean }
		| { notification: boolean }
	) & { clicked: boolean }
>;

export type IReducerActions =
	| TSetScreenSize
	| TSetCurrentColorMode
	| TSetCurrentThemeMode
	| TSetThemeSettings
	| TSetIsMenuActive
	| TSetIsClicked;

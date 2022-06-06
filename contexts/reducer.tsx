import { EAppContextConsts } from './constants';
import { IInitialState, IReducerActions } from './ts';

export const reducer = (state: IInitialState, action: IReducerActions) => {
	switch (action.type) {
		case EAppContextConsts.SET_SCREEN_SIZE:
		case EAppContextConsts.SET_CURRENT_COLOR_MODE:
		case EAppContextConsts.SET_CURRENT_THEME_MODE:
		case EAppContextConsts.SET_THEME_SETTINGS:
		case EAppContextConsts.SET_IS_MENU_ACTIVE: {
			return {
				...state,
				...action.payload,
			};
		}
		case EAppContextConsts.SET_IS_CLICKED: {
			return {
				...state,
				isClicked: {
					...state.isClicked,
					...action.payload,
				},
			};
		}
		default:
			return state;
	}
};

import { useReducer } from 'react';
import { createContainer } from 'react-tracked';
import { initialState } from './initialState';
import { reducer } from './reducer';

const useMyState = () => useReducer(reducer, initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
	createContainer(useMyState);

/*
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext(null);

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColorMode, setCurrentColor] = useState('#03C9D7');
	const [currentThemeMode, setCurrentMode] = useState('Light');
	const [themeSettings, setThemeSettings] = useState(false);
	const [isMenuActive, setIsMenuActive] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
	};

	const handleClick = (clicked) =>
		setIsClicked({ ...initialState, [clicked]: true });

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				currentColorMode,
				currentThemeMode,
				isMenuActive,
				screenSize,
				setScreenSize,
				handleClick,
				isClicked,
				initialState,
				setIsClicked,
				setIsMenuActive,
				setCurrentColor,
				setCurrentMode,
				setMode,
				setColor,
				themeSettings,
				setThemeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
*/

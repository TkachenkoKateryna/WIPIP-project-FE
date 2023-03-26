import {
	configureStore,
	ThunkDispatch,
	AnyAction,
	combineReducers,
} from '@reduxjs/toolkit';
import {
	useDispatch as useAppDispatch,
	useSelector as useAppSelector,
	TypedUseSelectorHook,
} from 'react-redux';

import authReducer from './auth/auth.slice';

export const rootReducer = combineReducers({
	authReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAction<ReturnType = void> = (
	dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
	getState: () => RootState,
	extraArgument: unknown
) => ReturnType;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, useSelector, useDispatch };

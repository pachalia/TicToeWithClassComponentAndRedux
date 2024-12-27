import { field, player } from '../components/Game/Game.tsx';

export interface IState {
	currentPlayer: player;
	isGameEnded: boolean;
	isDraw: boolean;
	field: field[];
}

export const initialState: IState = {
	currentPlayer: '0',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const GameReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'GET_STATE':
			return state;
		case 'CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload,
			};
		case 'isGameEnded':
			return {
				...state,
				isGameEnded: payload,
			};
		case 'isDraw':
			return {
				...state,
				isDraw: payload,
			};
		case 'FIELD':
			return {
				...state,
				field: [...payload],
			};
		case 'RESTART_GAME':
			return {
				currentPlayer: '0',
				isGameEnded: false,
				isDraw: false,
				field: ['', '', '', '', '', '', '', '', ''],
			};
		default:
			return state;
	}
};

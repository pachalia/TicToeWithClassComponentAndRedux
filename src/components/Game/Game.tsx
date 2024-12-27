import { GameLayout } from './GameLayout/GameLayout.tsx';
import { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../redux/reducer.ts';
import { isWin } from '../../utils/utils.ts';

export type player = 'X' | '0';
export type field = player | '';

interface IGameProps extends IState {
	restartGame: () => void;
	gameEnded: (payload: boolean) => void;
	draw: (payload: boolean) => void;
	changeCurrentPlayer: (payload: player) => void;
}

export class GameContainer extends Component<IGameProps> {
	update() {
		const { currentPlayer, field, gameEnded, draw, changeCurrentPlayer } = this.props;
		!field.includes('') && isWin(field, currentPlayer) ? gameEnded(true) : null;
		if (!field.includes('') && !isWin(field, currentPlayer)) {
			gameEnded(true);
			draw(true);
		}
		isWin(field, currentPlayer)
			? gameEnded(true)
			: changeCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
	}

	componentDidMount() {
		this.update();
	}

	componentDidUpdate(prevProps: Readonly<IGameProps>) {
		if (this.props.field !== prevProps.field) {
			this.update();
		}
	}

	render() {
		return (
			<>
				<GameLayout />
				{this.props.isGameEnded && (
					<button
						onClick={() => this.props.restartGame()}
						className={'block  m-auto bg-green-500 text-white text-2xl p-2'}
					>
						Начать сначала
					</button>
				)}
			</>
		);
	}
}

const mapStateToProps = (state: IState) => ({
	currentPlayer: state.currentPlayer,
	field: state.field,
	isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch({ type: 'RESTART_GAME' }),
	gameEnded: (payload: boolean) => dispatch({ type: 'isGameEnded', payload }),
	draw: (payload: boolean) => dispatch({ type: 'isDraw', payload }),
	changeCurrentPlayer: (payload: player) =>
		dispatch({ type: 'CURRENT_PLAYER', payload }),
});

export const Game = connect(mapStateToProps, mapDispatchToProps)(GameContainer);

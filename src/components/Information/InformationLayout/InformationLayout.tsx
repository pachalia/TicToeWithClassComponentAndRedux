import { IState } from '../../../redux/reducer.ts';
import { connect } from 'react-redux';
import { Component } from 'react';

interface InformationLayoutProps
	extends Pick<IState, 'isDraw' | 'isGameEnded' | 'currentPlayer'> {}
export class InformationLayoutContainer extends Component<InformationLayoutProps> {
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;
		return (
			<>
				{isDraw && <h1 className={'text-center text-3xl'}>Ничья</h1>}
				{!isDraw && isGameEnded && (
					<h1 className={'text-center text-3xl'}>Победа: {currentPlayer}</h1>
				)}
				{!isDraw && !isGameEnded && (
					<h1 className={'text-center text-3xl'}>Ходит: {currentPlayer}</h1>
				)}
			</>
		);
	}
}

const mapStateToProps = (state: IState) => ({
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);

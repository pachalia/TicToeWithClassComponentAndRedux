import { FieldLayout } from './FieldLayout/FieldLayout.tsx';
import { Component } from 'react';
import { IState } from '../../redux/reducer.ts';
import { connect } from 'react-redux';
import { field } from '../Game/Game.tsx';

interface IFieldProps extends Pick<IState, 'field' | 'currentPlayer'> {
	onField: (payload: field[]) => void;
}

export class FieldContainer extends Component<IFieldProps> {
	clickHandler(i: number) {
		const { field, currentPlayer, onField } = this.props;
		if (field[i] === '') {
			const array = field;
			array[i] = currentPlayer;
			onField(array);
		}
	}

	render() {
		return <FieldLayout clickHandler={this.clickHandler.bind(this)} />;
	}
}

const mapStateToProps = (state: IState) => ({
	currentPlayer: state.currentPlayer,
	field: state.field,
});

const mapDispatchToProps = (dispatch) => ({
	onField: (payload: field[]) => dispatch({ type: 'FIELD', payload }),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);

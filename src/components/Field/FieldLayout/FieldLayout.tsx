import { Component } from 'react';
import { IState } from '../../../redux/reducer.ts';
import { connect } from 'react-redux';

interface IFieldLayoutProps extends Pick<IState, 'field' | 'isGameEnded'> {
	clickHandler: (i: number) => void;
}
export class FieldLayoutContainer extends Component<IFieldLayoutProps> {
	render() {
		const { field, isGameEnded, clickHandler } = this.props;
		return (
			<>
				<div
					className={
						'w-64 h-64 flex m-auto flex-wrap border-2 border-solid border-green-500 mb-7'
					}
				>
					{field.map((val, i) => (
						<div
							className={'w-1/3 h-1/3 flex justify-center items-center'}
							key={i}
						>
							<button
								className={
									'w-full h-full flex border border-solid border-green-500 justify-center items-center text-5xl'
								}
								onClick={() => clickHandler(i)}
								disabled={isGameEnded}
							>
								{val}
							</button>
						</div>
					))}
				</div>
			</>
		);
	}
}

const mapStateToProps = (state: IState) => ({
	field: state.field,
	isGameEnded: state.isGameEnded,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);

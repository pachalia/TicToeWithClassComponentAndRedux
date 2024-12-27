import { Information } from '../../Information/Information.tsx';
import { Field } from '../../Field/Field.tsx';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		return (
			<>
				<Information />
				<Field />
			</>
		);
	}
}

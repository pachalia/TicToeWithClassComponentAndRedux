import { field, player } from '../components/Game/Game';
export const isWin = (field: field[], player: player): boolean => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];
	return WIN_PATTERNS.some((arr) => arr.every((i) => field[i] === player));
};

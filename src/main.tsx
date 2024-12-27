import { createRoot } from 'react-dom/client';
import './index.css';
import { Game } from './components/Game/Game.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Game />
	</Provider>,
);

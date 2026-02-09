import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App/App.tsx';
import store from "../src/store/store.ts";

import './style/index.scss';
import "./style/reset.scss";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)

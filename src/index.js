import ReactDOM from 'react-dom/client';
import './index.scss';
import App from '@/components/App/App';
import {Provider} from 'react-redux';
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);



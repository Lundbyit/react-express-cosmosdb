import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'react-select/dist/react-select.css';
import App from './App/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './Redux/ReduxStore';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

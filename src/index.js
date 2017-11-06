import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicApp from './MusicApp';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react'
import store from './store'

const Index = () => (
   <Provider store = {store}>
      <MusicApp />
   </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

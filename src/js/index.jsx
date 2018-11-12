import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store';
import {App} from './containers/app.jsx';

const store = configureStore();

const Root = () => {
  return (
    <div className='index'>
      <App store={store} />
    </div>
  )
};

ReactDOM.render(<Root />, document.getElementById('index'));
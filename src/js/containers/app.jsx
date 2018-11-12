import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Search} from './search.jsx';
import {Title} from '../components/title.jsx'

export class App extends Component {
  render() {
    const {store} = this.props;

    return (
      <Provider store={store}>
        <div>
          <Title>Giphy Search</Title>
          <Search />
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search} from '../actions/search';
import {Results} from '../components/results.jsx';

export class SearchComponent extends Component {
  constructor (props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (e) {
    e.preventDefault();
    const searchString = _.get(_.first(e.target.elements),'value')
    
    if(!searchString || _.isEmpty(searchString)) {
      // display error
    }
    else {
      this.props.dispatch(search(searchString));
      // @todo put the api_key in some config file
    }
  }

  render () {
    return (
      <div className='search-container'>
        <form onSubmit={this.submitHandler}>
          <input id='searchString' name='searchString' type='text' name='search' /><br />
          <input type='submit' />
        </form>
        <Results results={this.props.results} searchString={this.props.searchString} />
      </div>
    )
  }
}

export const Search = connect(state => ({
  results: state.results,
  searchString: state.searchString,
}))(SearchComponent)

import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {search} from '../actions/search'

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
      console.log(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${encodeURI(searchString)}`)
    }
  }

  render () {
    return (
      <div className='search-container'>
        <form onSubmit={this.submitHandler}>
          <input id='searchString' name='searchString' type='text' name='search' /><br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export const Search = connect(state => ({
  searchString: state.searchString
}))(SearchComponent)
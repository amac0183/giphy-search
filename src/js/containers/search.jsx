import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Results} from '../components/results.jsx';
import {addFavorite, removeFavorite} from '../actions/favorites'
import {search, updateFavoriteStatus} from '../actions/search';

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
      this.props.search({searchString, favorites: this.props.favorites});
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
        <Results
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
          results={this.props.results}
          searchString={this.props.searchString}
          updateFavoriteStatus={this.props.updateFavoriteStatus}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  results: state.search.results,
  searchString: state.search.searchString
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: id => {dispatch(addFavorite(id))},
    removeFavorite: id => {dispatch(removeFavorite(id))},
    search: searchString => {dispatch(search(searchString))},
    updateFavoriteStatus: id => {dispatch(updateFavoriteStatus(id))}
});

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

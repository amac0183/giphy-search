import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Results} from '../components/results.jsx';
import {setError} from '../actions/app_status';
import {addFavorite, removeFavorite} from '../actions/favorites'
import {loadFavorites, loadResults, search, updateFavoriteStatus} from '../actions/search';
import {SearchBar} from '../components/search_bar.jsx'

export class SearchComponent extends Component {
  constructor (props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.favoritesHandler = this.favoritesHandler.bind(this)
  }

  favoritesHandler(e) {
    e.preventDefault();

    if (_.isEmpty(this.props.favorites)) {
      this.props.setError('You do not have any favorites');
    }
    else {
      // clear the search reults if there are any loaded
      if (!_.isEmpty(this.props.results)) {
        this.props.loadResults([])
      }

      this.props.loadFavorites(this.props.favorites);
    }
  }

  submitHandler (e) {
    e.preventDefault();
    const searchString = _.get(_.first(e.target.elements),'value')
    
    if(!searchString || _.isEmpty(searchString)) {
      this.props.setError('Type something in the search box');
    }
    else {
      this.props.search({searchString, favorites: this.props.favorites});
    }
  }

  render () {
    return (
      <div className='search-container'>
        <SearchBar>
          <form onSubmit={this.submitHandler}>
            <input id='searchString' name='searchString' type='text' name='search' />
            <input type='submit' value='Search' />
            <button onClick={this.favoritesHandler} >Favorites</button>
          </form>
        </SearchBar>
        <Results
          addFavorite={this.props.addFavorite}
          errorMessage={this.props.errorMessage}
          errorStatus={this.props.errorStatus}
          removeFavorite={this.props.removeFavorite}
          results={this.props.results}
          searchString={this.props.searchString}
          updateFavoriteStatus={this.props.updateFavoriteStatus}
        />
      </div>
    )
  }
}

SearchComponent.defaultProps = {
  errorStatus: false,
  results: []
};

SearchComponent.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorStatus: PropTypes.bool.isRequired,
  favorites: PropTypes.array.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  searchString: PropTypes.string,
  setError: PropTypes.func.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errorMessage: state.appStatus.message,
  errorStatus: state.appStatus.error,
  favorites: state.favorites,
  results: state.search.results,
  searchString: state.search.searchString
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: id => {dispatch(addFavorite(id))},
    loadFavorites: favorites => {dispatch(loadFavorites(favorites))},
    loadResults: results => {dispatch(loadResults(results))},
    removeFavorite: id => {dispatch(removeFavorite(id))},
    search: searchString => {dispatch(search(searchString))},
    setError: message => {dispatch(setError(message))},
    updateFavoriteStatus: id => {dispatch(updateFavoriteStatus(id))}
});

export const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

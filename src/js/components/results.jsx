import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Giphy} from './giphy.jsx'

export const Results = ({addFavorite, removeFavorite, results, searchString, updateFavoriteStatus}) => (
  <div className='reults-component'>
    {!_.isEmpty(results) && <div>Search Results for {searchString}</div>}
    <div className='results' style={{display: 'flex', flexWrap: 'wrap'}}>
      {
        _.map(results, (result, index) => (
          <Giphy
            key={`giphy-${index}`}
            {...result}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            updateFavoriteStatus={updateFavoriteStatus}
          />
        ))
      }
    </div>
  </div>
)

Results.defaultProps = {
  results: [],
  searchString: ''
};

Results.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired
};

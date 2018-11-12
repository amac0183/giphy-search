import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Giphy} from './giphy.jsx'
import {ResultsContainer} from './results_container.jsx';
import {ResultsStatus} from './results_status.jsx';

export const Results = ({addFavorite, removeFavorite, results, searchString, updateFavoriteStatus}) => (
  <ResultsContainer>
    {!_.isEmpty(results) && <ResultsStatus message={`${_.size(results)} results for ${searchString}`}/>}
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
  </ResultsContainer>
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

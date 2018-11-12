import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {ErrorStatus} from './error_status';
import {Giphy} from './giphy'
import {ResultsContainer} from './results_container';
import {Status} from './status';

export const Results = ({addFavorite, errorMessage, errorStatus, removeFavorite, results,
  searchString, updateFavoriteStatus}) => (
  <ResultsContainer>
    {errorStatus && <ErrorStatus>{errorMessage}</ErrorStatus>}
    {!_.isEmpty(results) && <Status>{_.size(results)} results for {searchString}</Status>}
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

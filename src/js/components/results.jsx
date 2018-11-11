import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Giphy} from './giphy.jsx'

export const Results = ({results, searchString}) => (
  <div className='reults-component'>
    {!_.isEmpty(results) && <div>Search Results for {searchString}</div>}
    <div className='results' style={{display: 'flex', flexWrap: 'wrap'}}>
      {
        _.map(results, (result, index) => (
          <Giphy key={`giphy-${index}`} {...result} />
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
  results: PropTypes.array.isRequired,
  searchString: PropTypes.string.isRequired
};

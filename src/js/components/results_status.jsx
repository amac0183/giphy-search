import React from 'react';
import PropTypes from 'prop-types';
import {Status} from './status.jsx';

export const ResultsStatus = ({message}) => (
  <Status>
    {message}
  </Status>
)

ResultsStatus.propTypes = {
  message: PropTypes.string
}

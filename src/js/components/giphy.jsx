import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const ComponentContainer = styled.div`
  padding: 5px;
`;
const HeadingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
`;
const NameContainer = styled.h3`
  height: 50px;
  margin: 0;
  white-space: normal !important;
  max-width: 80%;
`;
const FavoriteContainer = styled.div`
  padding-right: 5px;
`;
const ImageContainer = styled.div`
  height: 200px;
`;

export class Giphy extends Component {
  render() {
    const {favorite, name, url} = this.props;
    return (
      <ComponentContainer>
        <HeadingContainer>
          <FavoriteContainer>
            {favorite && <Favorite />}
            {!favorite && <FavoriteBorder />}
          </FavoriteContainer>
          <NameContainer>
            {name}
          </NameContainer>
        </HeadingContainer>
        <ImageContainer>
          <img src={url} />
        </ImageContainer>
      </ComponentContainer>
    )
  }
}

Giphy.propTypes = {
  favorite: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

/* 
           */
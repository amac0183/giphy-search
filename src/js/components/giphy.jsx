import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Favorite, FavoriteBorder} from '@material-ui/icons';

const ComponentContainer = styled.div`
  padding: 5px;
  padding-bottom: 15px;
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
  constructor(props) {
    super(props);
    this.addFavoritesHandler = this.addFavoritesHandler.bind(this);
    this.removeFavoritesHandler = this.removeFavoritesHandler.bind(this)
  }

  addFavoritesHandler(e) {
    e.preventDefault();
    this.props.addFavorite(this.props.id);
    this.props.updateFavoriteStatus(this.props.id);
  }

  removeFavoritesHandler(e) {
    e.preventDefault();
    this.props.removeFavorite(this.props.id);
    this.props.updateFavoriteStatus(this.props.id);
  }

  render() {
    const {favorite, name, url} = this.props;
    return (
      <ComponentContainer>
        <ImageContainer>
          <img src={url} />
        </ImageContainer>
        <HeadingContainer>
          {
            favorite && (
              <div onClick={this.removeFavoritesHandler} style={{ widht: '20px', height: '20px'}} >
                <FavoriteContainer>
                  <Favorite />
                </FavoriteContainer>
              </div>
            )
          }
          {
            !favorite && (
              <div onClick={this.addFavoritesHandler} style={{ widht: '20px', height: '20px'}} >
                <FavoriteContainer>
                  <FavoriteBorder />
                </FavoriteContainer>
              </div>
            )
          }
          <NameContainer>
            {name}
          </NameContainer>
        </HeadingContainer>
      </ComponentContainer>
    )
  }
}

Giphy.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

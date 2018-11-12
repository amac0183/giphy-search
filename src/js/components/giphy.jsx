import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Favorite, FavoriteBorder} from '@material-ui/icons';
import {FavoriteContainer} from './giphy_favorite_icon_container';
import {GiphyContainer} from './giphy_container';
import {GiphyImageContainer} from './giphy_image_container';
import {GiphyLabelFavoriteContainer} from './giphy_label_container';
import {GiphyLabel} from './giphy_label';

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
      <GiphyContainer>
        <GiphyImageContainer>
          <img src={url} />
        </GiphyImageContainer>
        <GiphyLabelFavoriteContainer>
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
          <GiphyLabel>
            {name}
          </GiphyLabel>
        </GiphyLabelFavoriteContainer>
      </GiphyContainer>
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

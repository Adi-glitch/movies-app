import React from 'react';
import { addFavourite, removeFromFavourites } from '../actions'



class MovieCard extends React.Component {

    handeFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handeUnFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render (){
        const {movie, isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>

                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button className="unfavourite-btn" onClick={this.handeUnFavouriteClick}>UnFavourite</button>
                            : <button className="favourite-btn" onClick={this.handeFavouriteClick}>Favourite</button>
                        }
                        
                    </div>
                </div>
              
              
            </div>
          );
        
    }
 
}

export default MovieCard;

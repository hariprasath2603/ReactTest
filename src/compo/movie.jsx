import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <React.Fragment>
        {this.state.movies.length > 0 ? (
          <table className={"table table-striped table-hover m-4"}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>No of items</th>
                <th>Rental amount</th>
                <th>Published Date</th>
                <th>Delte</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(mov => (
                <tr key={mov._id}>
                  <td>{mov.title}</td>
                  <td>{mov.genre.name}</td>
                  <td>{mov.numberInStock}</td>
                  <td>{mov.dailyRentalRate}</td>
                  <td>{this.getDate(mov.publishDate)}</td>
                  <td>
                    <button
                      className={"btn btn-danger"}
                      onClick={() => this.movieDelete(mov)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4>No Movies in the database</h4>
        )}
      </React.Fragment>
    );
  }

  getDate = date => {
    return date ? date : "N/A";
  };

  movieDelete = index => {
    const movies = this.state.movies.filter(m => m != index);
    this.setState({ movies });
  };
}

export default Movies;

import React, { Component } from "react";

class MovieForm extends Component {
  saveForm = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Movie Form {this.props.match.params.id}</h1>
        <button onClick={this.saveForm} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;

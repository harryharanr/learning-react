import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement("test")}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>{this.renderTags()}</div>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = (arg) => {
    console.log(arg);
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default Counter;

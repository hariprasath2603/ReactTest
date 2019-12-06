import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //     //colorBage:'badge badge-primary m-2',
  //     //color:'btn btn-dark m-2'
  //   };
  // constructor() {
  //   super();
  //   this.handelIncrement = this.handelIncrement.bind(this);
  // }
  //   handelIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //     console.log(this);
  //   };
  returnValue = () => {
    return this.props.counter.value === 0 ? "ZERO" : this.props.counter.value;
  };
  badgeColor = () => {
    return this.props.counter.value === 0
      ? "badge badge-warning m-2"
      : " badge badge-primary m-2";
  };
  deleteButton = () => {
    return this.props.counter.value === 0
      ? "btn badge-disabled m-2"
      : "btn badge-dark m-2";
  };
  render() {
    return (
      <div>
        <span
          className={this.badgeColor()}
          style={{ minWidth: 50, maxWidth: 100 }}
        >
          {this.returnValue()}
        </span>
        <button
          onClick={() => this.props.onInc(this.props.counter)}
          className={"btn btn-dark m-2"}
        >
          Inc
        </button>
        <button
          onClick={() => this.props.onDec(this.props.counter)}
          className={this.deleteButton()}
        >
          Dec
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handelDelete = idv => {
    const counters = this.state.counters.filter(val => val.id !== idv);
    this.setState({ counters });
    console.log(this.state);
  };
  handelInc = countObj => {
    console.log(countObj);
    const counters = [...this.state.counters];
    const index = counters.indexOf(countObj);

    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state);
  };

  handelDec = countObj => {
    console.log(countObj);
    const counters = [...this.state.counters];
    const index = counters.indexOf(countObj);

    counters[index] = { ...counters[index] };
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
    console.log(this.state);
  };
  reset = () => {
    // const counters = this.state.counters.map(val => {
    //   const mad = val;
    //   mad.value = 0;
    //   return mad;
    // });

    const counters = [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ];
    this.setState({ counters });
  };

  total = () => {
    let count = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      count = count + this.state.counters[i].value;
    }
    console.log(count);
    return count;
  };
  render() {
    return (
      <main className={"container"}>
        <button className="btn btn-dark m-2" onClick={this.reset}>
          Reset
        </button>
        <span>{"Total items "}</span>
        <span>{this.total()}</span>
        {this.state.counters.map(count => (
          <Counter
            key={count.id}
            counter={count}
            onInc={this.handelInc}
            onDec={this.handelDec}
            onDelete={this.handelDelete}
          />
        ))}
      </main>
    );
  }
}

export default Counters;

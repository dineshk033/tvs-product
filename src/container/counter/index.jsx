import React from "react";
class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("init call");
  }
  render() {
    return (
      <div>
        <h1>Welecome Counter app</h1>
        <div
          className="bg-warning text-white fs-1 text-center"
          style={{ height: "100px", lineHeight: "100px" }}
        >
          {this.state.count}
        </div>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default CounterApp;

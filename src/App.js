import React from "react";
import { connect } from "./react-redux";

const addCountAction = {
  type: "plus"
}

const subtractAction = {
  type: "subtract"
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: () => {
      dispatch(addCountAction)
    },
    subtractCount: () => {
      dispatch(subtractAction)
    }
  }
}

function App(props) {
  const { count, addCount, subtractCount } = props;
  return (
    <div className="app">
      {count}
      <button onClick={addCount}>增加</button>
      <button onClick={subtractCount}>减少</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
const Increment = "Increment";
const Decrement = "Decrement";

const incrementAction = {
  type: "Increment",
  amount: 5
}

const decrementAction = {
  type: "Decrement",
  amount: 7
}

const action = {incrementAction,decrementAction};

export default action;
function reducer(state,action){
  if(action.type === "Increment"){
    return state+1;
  }
  else if(action.type === 'Decrement'){
    return state-1;
  }
  else{
    return state;
  }
}

export default reducer;
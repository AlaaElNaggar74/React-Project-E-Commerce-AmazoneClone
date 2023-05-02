export let initialState = {
  // basket: [{  id:2,
  //   imagge:"gh",
  //   price:2894.35,
  //   rate:5,
  //   title:"Products stock photo",
  //   desc:"All content, deadlines, publishing, and revisions managed by one point of contact."}],
  basket: [],
  user: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "checkUser":
      return { ...state, user: action.payload };
    case "AddToCart":
      console.log("action", action);
      console.log("element", state.basket);
      let findElement = state.basket.find(
        (ele) => ele.id === action.payload.id
      );
      if (findElement) {
        // console.log("true",findElement.count++)
        findElement.count++;
        return { ...state, basket: [...state.basket] };
        // console.log("findElement",findElement)
        // return {state}
      } else {
        console.log("returnnnnn", state.basket);

        return {
          ...state,
          basket: [...state.basket, { ...action.payload, count: 1 }],
        };
      }

    case "RemoveToCart":
      let newstat = state.basket.filter((ele) => ele.id !== action.payload.id);
      // console.log("actionREMOVE",action);
      return { ...state, basket: [...newstat] };
    case "clearAll":
      // console.log("action",action)
      return { ...state, basket: [] };
    default:
      return state;
  }
};

export default reducer;

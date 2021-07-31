import { posts } from "../../db.json";

const postsReducer = (state = posts, action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log("adding posts");
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postsReducer;

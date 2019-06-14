import { ADD_ARTICLE, DELETE_ALL_ARTICLES } from "../actions/articles";

const InitialState = {
  articles: []
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      };
    case DELETE_ALL_ARTICLES:
      return {
        articles: []
      };
    default:
      return state;
  }
};

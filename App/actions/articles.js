export const ADD_ARTICLE = "ADD_ARTICLE";
export const DELETE_ALL_ARTICLES = "DELETE_ALL_ARTICLES";

export const addArticle = ({ title, id }) => ({
  type: ADD_ARTICLE,
  payload: { title, id }
});

export const deleteAllArticles = () => ({
  type: DELETE_ALL_ARTICLES
});

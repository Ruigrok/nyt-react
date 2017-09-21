import axios from 'axios';


// NYT API key
const authKey = "a63e0600a8084cdcb4688260c7fcd638";

const helpers = {

  runQuery: (term, start, end) => {

    var params = {};

    params["api-key"] = authKey;
    params["sort"] = "newest"; // a personal preference here
    params["q"] = term.trim();

    if (start) {
      params["begin_date"] = start.trim() + "0101";
    }

    if (end) {
      params["end_date"] = end.trim() + "1231";
    }

    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    console.log(params);
    return axios.get(queryURLBase, {params: params})
      .then((results) => {
        console.log(results.data.response);
        return results.data.response;
      });
  },
 
  // Get saved articles
  getSaved: () => {
    return axios.get('/api/saved')
      .then((response) => {
        return response;
      })
  },

  // Save articles
  saveArticle: (article) => {

    var newArticle = { 
      title: article.headline.main, 
      author: article.byline.original, 
      date: article.pub_date, 
      url: article.web_url 
    };

    return axios.post('/api/saved', newArticle)
      .then((response) => {
        return response.data._id;
      });
  },



  // Delete saved article from database
  deleteArticle: (articleId) => {
    return axios.delete('/api/saved/' + articleId)
      .then((response) => {
        return response;
      })
  }
};


// Export the API helper
export default helpers;

const axios = require("axios");

// NYT API key
var authKey = "a63e0600a8084cdcb4688260c7fcd638";

var helpers = {

  runQuery: function(term, start, end) {

    var term = term.trim();
    var start = start.trim() + "0101";
    var end = end.trim(); + "1231";

    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    return axios.get(queryURLBase, {
      params: {
        "api-key": authKey,
        "q": term,
        "begin_date": start,
        "end_date": end
      }
    })
    .then(function(NYTdata) {
      if (NYTdata.data.response.docs[0]) {
        return NYTdata.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // Get saved articles
  getSaved: function() {
    return axios.get('/api/saved')
      .then(function(response) {
        return response;
      })
  },

  // Save articles
  saveArticle: function(title, author, date, url) {
    var newArticle = { title: title, author: author, date: data, url: url };
    return axios.post('/api/saved', newArticle)
      .then(function(response) {
        return response.data._id;
      });
  },

  // Delete saved article from database
  deleteArticle: function(title, author, date, url) {
    return axios.delete('/api/saved', {
      params: {
        "title": title,
        "author": author, 
        "date": date,
        "url": url
      }
    })
    .then(function(response) {
      return response;
    })
  }
};

// Export the API helper
module.exports = helpers;

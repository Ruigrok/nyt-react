var axios = require("axios");

// NYT API key
var authKey = "a63e0600a8084cdcb4688260c7fcd638";

var helpers = {

  runQuery: function(term, start, end) {

    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
    var queryURL = queryURLBase + "&q=" + term;

    if (parseInt(start)) {
      start = start + "0101";
      queryURL = newURL + "&begin_date=" + start;
  }
  
  if(parseInt(end)) {
      end = end + "0101";
      queryURL = newURL + "&end_date=" + end;
  }

    return axios.get(queryURL).then(function(NYTdata) {
      console.log(NYTdata);
      if (NYTdata.data.response.docs[0]) {
        return NYTdata.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // Get saved articles
  getSaved: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our mongo database
  postArticles: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helpers;

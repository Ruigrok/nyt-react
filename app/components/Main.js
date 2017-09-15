var React = require("react");

var Search = require("./children/Search");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function () {
    return {
      term: "",
      number: "",
      start: "",
      end: "",
      results: [],
      saved: []
    };
  },

  componentDidMount: function () {
/*     helpers.getSaved().then(function (response) {
      if (response !== this.state.saved) {
        this.setState({ saved: response.data });
      }
    }.bind(this)); */
  },

  componentDidUpdate: function () {
    
    helpers.runQuery(this.state.term, this.state.start, this.state.end)
      .then(function (data) {
        console.log(data);
        console.log(this.state.results);
        if (data.length !== this.state.results.length
            || this.state.results == [] 
            || data[0].headline.main !== this.state.results[0].headline.main) {
          this.setState({ results: data});

          helpers.postArticles(this.state.searchTerm).then(function () {

            helpers.getSaved().then(function (response) {
              this.setState({ saved: response.data });

            }.bind(this));
          }.bind(this));
        }
      }.bind(this));
  },

  setSearch: function (search) {
    console.log(search);
    this.setState({
      term: search.term,
      number: search.number,
      start: search.start,
      end: search.end,
    });
  },

  setSaved: function(saved) {
    console.log(saved);
    this.setState({
      term: search.term,
      number: search.number,
      start: search.start,
      end: search.end,
    });
  },

  render: function () {
    return (
      <div className="container">

        <div className="jumbotron" styles={{backgroundColor : '#20315A',  color: 'white'}}>
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
        </div>

        <Search setSearch={this.setSearch} />

        <Results results={this.state.results} />

        <Saved saved={this.state.saved} />

        <div className="row">
          <div className="col-sm-12">
            <hr />
            <h5 className="text-center"><small>Made by Andrew with lots and lots of <i className="fa fa-heart"></i></small></h5>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Main;

import React from 'react';

import { Query } from './children/Query';
import { Results } from './children/Results';
import { helpers } from '../utils/helpers';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {}
    };

    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(newTerm, newStart, newEnd) {
    helpers.runQuery(newTerm, newStart, newEnd)
      .then(function (data) {
        this.setState({
          results: data
        });
      })
  }

  render() {
    return (
      <div className="container">
        {/* Query child compononent is passed a function to return the user input to the Search parent component */}
        <Query newSearch={this.setSearch} />
        {/* Results receives the results from setSearch */}
        <Results results={this.state.results} />
      </div>
    );
  }

}


/* var React = require("react");

var Search = React.createClass({

  getInitialState: function () {
    return {
      term: "",
      number: "5",
      start: "",
      end: ""
    };
  },

  handleChange: function (event) {
    this.setState({
      [event.target.id]: event.target.value,
    });

  },

  handleSubmit: function (event) {
    event.preventDefault();
    this.props.setSearch(this.state);
    this.setState({
      term: "",
      number: "5",
      start: "",
      end: ""
    });
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            </div>
            <div className="panel-body">

              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input
                    value={this.state.term}
                    type="text"
                    className="form-control"
                    id="term"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pwd">Number of Records to Retrieve:</label>
                  <select
                    value={this.state.number}
                    className="form-control"
                    id="number"
                    onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="startYear">Start Year (Optional):</label>
                  <input
                    value={this.state.start}
                    type="text"
                    className="form-control"
                    id="start"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endYear">End Year (Optional):</label>
                  <input
                    value={this.state.end}
                    type="text"
                    className="form-control"
                    id="end"
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;
 */
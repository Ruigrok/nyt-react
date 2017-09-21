import React from 'react';

import { Query } from './children/Query';
import { Results } from './children/Results';
import helpers from '../utils/helpers';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      number: ""
    };

    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(newTerm, newStart, newEnd, number) {
    helpers.runQuery(newTerm, newStart, newEnd)
      .then((data) => {
        console.log(data);
        this.setState({
          results: { docs: data.docs },
          number: number
        });
        
      })
  }

  render() {
    return (

        <div className="container">
          {/* Query child compononent is passed a function to return the user input to the Search parent component */}
          <Query updateSearch={this.setSearch} />
          {/* Results receives the results from setSearch */}
          <Results results={this.state.results} number={this.state.number} />
        </div>

    );
  }

}

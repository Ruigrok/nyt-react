import React from 'react';

import { helpers } from '../utils/helpers';

export class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      start: "",
      end: ""
    };

  }

  handleClick(article) {
    helpers.saveArticle(article)
  }


  render() {
    let display;
    if (!this.props.results) {
      display = (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Submit a search to see articles</em>
            </span>
          </h3>
        </li>
      );
    } else {
      display = (
        <div className="panel-body">
            {this.props.results.map(function (article, i) {

              return (
                <div className="well" key={i}>
                  <h3 name="title">{article.headline.main}</h3>
                  <h5 name="author">{article.byline.original}</h5>
                  <h5 name="date">{article.pub_date}</h5>
                  <a href={article.web_url} target="_blank">
                    <button className="btn btn-default ">View Article</button>
                  </a>

                  <button type="button" className="btn btn-default" onClick={() => this.handleClick(article)}><i className="fa fa-bookmark"></i> Save</button>
                </div>
              );
            })}
          </div>
      );
    }

    return (
      <div className= "row" >
      <div className="col-sm-12">
        <br />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
          </div>
            {/* Render filler text or search results if user has submitted a search */}
            {display}
        </div>
      </div>
      </div >
    );
  }
}




import React from 'react';

import helpers from '../../utils/helpers';
import { Link } from 'react-router';

export class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      start: "",
      end: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(article) {
    helpers.saveArticle(article);
  }


  render() {
    let display;
    
    if (!this.props.results.docs) {
      display = (
        <li className="list-group-item text-center">
          <h3>Submit a search to see articles</h3>
        </li>
      );
    } else {
      display = (
        <div className="panel-body">

          {this.props.results.docs.slice(0, this.props.number).map((article, i) => {

            return (
              <div className="well" key={i}>
                <div className="row">
                  <div className="col-sm-9">
                    <h3 name="title">{article.headline.main}</h3>
                    {typeof article.byline !== 'undefined' &&
                      <h5 name="author">{article.byline.original}</h5>
                    }
                    <h5 name="date">{article.pub_date}</h5>
                  </div>
                  <div className="col-sm-3">
                    <a href={article.web_url} target="_blank">
                      <button className="btn btn-default view">View Article</button>
                    </a>
                    <button type="button" className="btn btn-default save" onClick={() => this.handleClick(article)}><i className="fa fa-bookmark"></i> Save</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="row" >
        <div className="col-sm-12">
          <br />
          <div className="panel panel-primary container-fluid">
            <div className="panel-heading row">
              <div className="col-sm-8">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>Top Articles</strong></h3>
              </div>
              <div className="col-sm-4">
                <h3 className="panel-title pull-right"><Link to="/saved">View Saved Articles</Link></h3>
              </div>

            </div>



            {/* Render filler text or search results if user has submitted a search */}
            {display}
          </div>
        </div>
      </div >
    );
  }
}




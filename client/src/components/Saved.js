import React from 'react';
import { Link } from 'react-router';

import helpers from '../utils/helpers';

export class Saved extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            saved: ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // Get saved articles from the database when the component mounts
    componentDidMount() {
        helpers.getSaved()
            .then((savedArticles) => {
                this.setState({
                    saved: savedArticles.data
                })
            })
    }


    handleClick(article) {
        helpers.deleteArticle(article)
            .then(() => {
                helpers.getSaved()
                    .then((savedArticles) => {
                        this.setState({
                            saved: savedArticles.data
                        })
                    })
            })
    }


    render() {
        let display;
        if (!this.state.saved || this.state.saved.length === 0) {
            display = (
                <li className="list-group-item text-center">
                    <h3>No saved articles</h3>
                </li>
            );
        } else {
            display = (
                <div className="panel-body">

                    {this.state.saved.map((article, i) => {

                        return (
                            <div className="well" key={i}>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h3 name="title">{article.title}</h3>
                                        {typeof article.author !== 'undefined' &&
                                            <h5 name="author">{article.author}</h5>
                                        }
                                        <h5 name="date">{article.date}</h5>
                                    </div>
                                    <div className="col-sm-3">
                                        <a href={article.url} target="_blank">
                                            <button className="btn btn-default view">View Article</button>
                                        </a>
                                        <button type="button" className="btn btn-default save" onClick={() => this.handleClick(article._id)}><i className="fa fa-times"></i> Remove</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row" >
                    <div className="col-sm-12">
                        <br />
                        <div className="panel panel-primary container-fluid">
                            <div className="panel-heading row">
                                <div className="col-sm-8">
                                    <h3 className="panel-title"><strong><i className="fa fa-table"></i> Saved Articles</strong></h3>
                                </div>
                                <div className="col-sm-4">
                                    <h3 className="panel-title pull-right"><Link to="/search">Go Back to Search</Link></h3>
                                </div>
                            </div>
                            {/* Render filler text or saved articles if user has submitted a search */}
                            {display}
                        </div>
                    </div>
                </div >
            </div>
        );
    }

}


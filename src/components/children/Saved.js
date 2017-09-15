var React = require("react");

var Saved = React.createClass({

    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
                        </div>

                        <div className="panel-body" id="wellSection">
{/*                             {this.props.saved.map(function (article, i) {
                                return (
                                    <div className="well">
                                        <h3> {article.title} </h3>
                                        <h5>{article.author}</h5>
                                        <h5>{article.date}</h5>
                                        <a target="_blank" href={article.url} >{article.url}</a>
                                    </div>
                                );
                            })} */}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Saved;

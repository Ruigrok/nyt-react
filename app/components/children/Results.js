var React = require("react");

var Results = React.createClass({

  render: function () {
    return (
      <div className="row">
        <div className="col-sm-12">
          <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
            </div>

            <div className="panel-body">
              {this.props.results.map(function (article, i) {
               // console.log(article.headline.main)
                
                return (
                  <div className="well" key={i}>
                    <h3> {article.headline.main} </h3>
                    <h5>{article.byline.original}</h5>
                    <h5>{article.pub_date}</h5>
                    <a target="_blank" href={article.web_url} >{article.web_url}</a>
                    <button type="button" className="btn btn-default" id="clearAll"><i className="fa fa-bookmark" aria-hidden="true"></i> Save Article</button>
                  </div>
                );
              })}
            </div>

          </div>
        </div>



      </div>
    );
  }
});

module.exports = Results;

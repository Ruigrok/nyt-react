var React = require("react");

var Results = React.createClass({

  getInitialState: function () {
    return {
      title: "",
      author: "",
      date: "",
      url: ""
    };
  },

  handleSubmit: function (event) {
    event.preventDefault();
    this.props.setSearch(this.state);
  },

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

                return (
                  <div className="well" key={i}>
                    <h3 name="title">{article.headline.main}</h3>
                    <h5 name="author">{article.byline.original}</h5>
                    <h5 name="date">{article.pub_date}</h5>
                    <a name="url" target="_blank" href={article.web_url} >{article.web_url}</a>
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

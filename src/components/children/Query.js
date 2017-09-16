import React from 'react';

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
            start: "",
            end: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.setSearch(this.state.term, this.state.start, this.state.end);
    }

    render() {
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

{/*                                 <div className="form-group">
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
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="startYear">Start Year (Optional):</label>
                                    <input
                                        value={this.state.start}
                                        type="text"
                                        className="form-control"
                                        id="start"
                                        onChange={this.handleChange}
                                        required
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
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i> Search</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
import React, { Component } from 'react';

export class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="ui header" htmlFor="">
            {this.props.name}
          </label>
          <input
            className="field"
            type="text"
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

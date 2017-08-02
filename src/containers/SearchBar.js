import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
  }

  onInputChange(city) {
    this.setState({ city });
  }

  // To prevent that the browser refreshes the page on submit
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.city);
    this.setState({ city: '' });
  }

  render() {
    return (
      <div className="search-bar">
        <form
          className="input-group"
          onSubmit={this.onFormSubmit.bind(this)}
        >
          <input
            placeholder="City for forecast"
            className="form-control"
            value={this.state.city}
            onChange={(event) => this.onInputChange(event.target.value)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, { fetchWeather })(SearchBar);

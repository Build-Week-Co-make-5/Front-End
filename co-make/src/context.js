import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    issue_list: [],
    heading: 'Top 10 Issues'
  };

  componentDidMount() {
    axios
      .get(
        `API URL goes here/api/issues&apikey=${process.env.REACT_APP_MM_KEY}`,
      )
      .then(res => {
        // console.log(res.data);
        this.setState({issue_list: res.data.message.body.issue_list});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
     <Context.Provider value={this.state}>
      {this.props.children}
     </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
// Similar to Connect in Redux

// import React from 'react';
// import axios from 'axios';

// const Descriptions = () => {
//   state = {
//     issue: {},
//     descriptions: {}
//   };

//   componentDidMount() {
//     axios
//       .get(
//         `API URL goes here/api/issues_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`,
//       )
//       .then(res => {
//         console.log(res.data);
//         // this.setState({issue_list: res.data.message.body.issue_list});
//       })
//       .catch(err => console.log(err));
//   }

//   return (
//     <div>
//       <h1>Description</h1>
//     </div>
//   );
// }

// export default Descriptions;
// import React from 'react';
// import { Consumer } from '../context';
// import Spinner from './Spinner';
// import Issue from './Issue';

// const PostIssueForm = () => {
//   return (
//     <Consumer>
//       {value => {
//         const { issue_list, heading } = value;
//         if(issue_list === undefined || issue_list.length === 0) {
//           return <Spinner />
//         } else {
//           return (
//             <React.Fragment>
//               <h3 className="text-center mb-4">{heading}</h3>
//               <div className="row">
//                 {issue_list.map(item => (
//                   <Issue key={item.issue.issue_id} issue={item.issue} />
//                 ))}
//               </div>
//             </React.Fragment>
//           );
//         }
//       }}
//     </Consumer>
//   );
// }

// export default PostIssueForm;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';
// import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag'
// const jobsData = {};
// const client = new ApolloClient({
//   uri: 'https://api.graphql.jobs/'
// });
// client
//   .query({
//     query: gql`
//       query job{
//       jobs {
//         id,
//         title,
//         company {
//           name,
//           websiteUrl,
//           logoUrl
//         } ,
//         postedAt,
//         updatedAt
//       }
//     }
//     `
//   })
//   .then(data => console.log(data.data))
//   .then(data => {const jobsData= data.data.jobs})
//   .catch(error => console.error(error));

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


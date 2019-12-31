// import React from 'react'

// const JobList = ( ) => {
//     return (
//         <div className='pa2'>
//         <input
//             className='pa3 ba b--green bg-lightest-blue'
//             type='search'
//             placeholder='search jobs'
//             onChange={onSearchChange}
//         />
//         </div>
//     )
// }

// export default JobList;

// const JOBS_DATA = gql`
//   query lastLaunch {
//     launch {
//       id
//       timestamp
//     }
//   }
// `;

// export function JobList() {
//   const { loading, data } = useQuery(JOBS_DATA);
//   return (
//     <div>
//       <h1>Last Launch</h1>
//       {loading ? <p>Loading</p> : <p>Timestamp: {data.launch.timestamp}</p>}
//     </div>
//   );
// }
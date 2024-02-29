// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const AllJobs = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         // Make a request to the backend route that fetches all jobs for the logged-in employee
//         const token = localStorage.getItem('token');
//                 console.log('Token:', token);
//         const response = await axios.get('http://localhost:5000/api/auth/disjob', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'auth-token': token,
//               },
//         });

//         // Set the retrieved jobs in the state
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     };

//     // Call the fetchJobs function when the component mounts
//     fetchJobs();
//   }, []);

//   return (
//     <div>
//       <h2>All Jobs</h2>
//       <ul>
//         {jobs.map((job) => (
//           <li key={job._id}>
//             <strong>Title:</strong> {job.title} <br />
//             <strong>Company:</strong> {job.company} <br />
//             <strong>Location:</strong> {job.state}, {job.city} <br />
//             <strong>Address:</strong> {job.address} <br />
//             <strong>Description:</strong> {job.description} <br />
//             <strong>Requirements:</strong> {job.requirements.join(', ')} <br />
//             <strong>Posted By:</strong> {job.employer.name} (Employer ID: {job.employer._id}) <br />
//             <Link className="btn btn-primary mx-2" to="/Applyjobs" role="button">
//                 Apply
//               </Link>
//           </li>
//         ))}
        
//       </ul>
//     </div>
//   );
// };

// export default AllJobs;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        const response = await axios.get('http://localhost:5000/api/auth/disjob', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        });

        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error.response || error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>All Jobs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <strong>Title:</strong> {job.title} <br />
              <strong>Company:</strong> {job.company} <br />
              <strong>Location:</strong> {job.state}, {job.city} <br />
              <strong>Address:</strong> {job.address} <br />
              <strong>Description:</strong> {job.description} <br />
              <strong>Requirements:</strong> {job.requirements.join(', ')} <br />
              <strong>Posted By:</strong> {job.employer.name} (Employer ID: {job.employer._id}) <br />
              <Link className="btn btn-primary mx-2" to="/Applyjobs" role="button">
                Apply
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllJobs;

import React, { useState, useEffect } from 'react';

const EmployerList = () => {
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        const fetchEmployers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/employers/allemployers');
                const data = await response.json();
                setEmployers(data);
            } catch (error) {
                console.error('Error fetching employers:', error);
            }
        };

        fetchEmployers();
    }, []);

    return (
        <div>
            <h2>All Employers</h2>
            <ul>
                {employers.map((employer) => (
                    <li key={employer._id}>{employer.name} - {employer.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployerList;

import React from 'react';

export default (props) => {
    //Dynamically Builds Table Rows based on the incoming Props
    const tableRows = props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });

    //Returns the Student Table
    return (
        <table className="table">
            <thead className="thead-inverse">
            <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    )
}
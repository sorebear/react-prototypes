import React from 'react';
import Table from './table';

export default () => {
    //Decleration of Student Objects
    const student1 = {
        name: 'Ralph',
        course: 'Wreck-It',
        grade: 80
    };
    const student2 = {
        name: 'Doug',
        course: 'Squirrels',
        grade: 65
    };
    const student3 = {
        name: 'Sully',
        course: 'Scaring',
        grade: 95
    };

    //Decleration of an Array holding all Student Objects
    const students = [student1, student2, student3];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}



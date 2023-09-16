import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";


const CourseList = ({onSelectCourse}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
        .catch(error => console.log('not fetch data',error))
    }, [])
    return (
        <div className="grid grid-cols-3">
            {
                courses.map(course => <CourseCard
                     key={course.id} 
                     course={course}
                     onSelect={onSelectCourse}
                     ></CourseCard>)
            }
        </div>
    );
};

export default CourseList;
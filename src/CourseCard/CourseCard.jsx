
const CourseCard = ({ course, onSelect }) => {

    const handleSelect = () => {
        onSelect(course);
    }

    return (
        <div className="py-5">
            <div className="card card-compact p-5 w-72 shadow-xl">
                <figure><img src={course.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold pt-3">{course.title}</h2>
                    <p className="pt-3">{course.description}</p>
                    <div className="flex gap-4 mt-2">
                        <img src={course.img2} alt="dollar" />
                        <p>Price: {course.price}</p>
                        <img src={course.img1} alt="book" />
                        <p> Credit: {course.credit}hr</p>
                    </div>
                    <div className="pt-4">
                        <button onClick={handleSelect} className="bg-[#2F80ED]  text-white rounded-lg border w-64 h-10">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
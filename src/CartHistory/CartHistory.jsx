

const CartHistory = ({ selectedCourses, totalCredit, totalPrice, remainingCredit }) => {
    return (
        <div className="shadow-lg p-5 w-72">
            <div className="p-2">
                <p className="text-[#2F80ED] text-lg">Credit Hour Remaining: {remainingCredit} hr</p>
            </div>
            <hr />
            <div className="p-3">
                <h1 className="font-bold text-lg">Course Name</h1>
                <ol className="mt-3">
                    {selectedCourses.map((course, index) => (
                        <li key={index}>
                            {course.title}
                        </li>
                    ))}
                </ol>
            </div>
            <hr />
            <div className="p-3">
                <p>Total Credit Hour: {totalCredit} credits</p>
            </div>
            <hr />
            <div className="p-3">
                <p>Total Price: ${totalPrice} USD</p>
            </div>

        </div>
    );
};

export default CartHistory;
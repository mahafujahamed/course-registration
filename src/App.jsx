
import { useState } from 'react';
import CartHistory from './CartHistory/CartHistory'
import CourseList from './CourseList/CourseList'
import Header from './Header/Header'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  // maximum total credit taken in a semester
  const maxCredit = 20;

  const handleSelectCourse = (course) => {
    // Parse credit as a number
    const creditValue = parseInt(course.credit, 10);
    const priceValue = parseFloat(course.price);

    if (!isNaN(creditValue) && !isNaN(priceValue)) {
      if (totalCredit + creditValue <= maxCredit) {
        setSelectedCourses([...selectedCourses, course]);
        const newTotalPrice = totalPrice + priceValue;
        const newTotalCredit = totalCredit + creditValue;
        setTotalPrice(newTotalPrice);
        setTotalCredit(newTotalCredit);
      } else {
        alert(`Maximum total credit (${maxCredit} credits) exceeded!`);
      }
    } else {
      console.error('Invalid data for course:', course);
    }
  };

  const remainingCredit = maxCredit - totalCredit;

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className=' container flex'>
        <div className='basis-4/5 ms-10'>
          <CourseList onSelectCourse={handleSelectCourse}></CourseList>
        </div>
        <div className='mt-6'>
          <CartHistory selectedCourses={selectedCourses}
            totalCredit={totalCredit}
            totalPrice={totalPrice}
            remainingCredit={remainingCredit}
          ></CartHistory>
        </div>
      </div>
    </>
  )
}

export default App

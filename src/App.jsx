
// import './App.css'

// function App() {
  

//   return (
//     <>
//       <div>
//        <h1 className='text-4xl '>2025</h1>
//       </div>
//       <div className="flex items-center justify-center py-8 px-4">
// {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}

//             <div className="max-w-sm w-full shadow-lg">
//                 <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
//                     <div className="px-4 flex items-center justify-between">
//                         <span  tabIndex="0" className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">October 2025</span>
//                         <div className="flex items-center">
//                             <button aria-label="calendar backward" className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                 <polyline points="15 6 9 12 15 18" />
//                             </svg>
//                         </button>
//                         <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"> 
//                               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                 <polyline points="9 6 15 12 9 18" />
//                             </svg>
//                         </button>

//                         </div>
//                     </div>
//                     <div className="flex items-center justify-between pt-12 overflow-x-auto">
//                         <table className="w-full">
//                             <thead>
//                                 <tr>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Mo</p>
//                                         </div>
//                                     </th>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Tu</p>
//                                         </div>
//                                     </th>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">We</p>
//                                         </div>
//                                     </th>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Th</p>
//                                         </div>
//                                     </th>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Fr</p>
//                                         </div>
//                                     </th>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Sa</p>
//                                         </div>
//                                     </th>
//                                     <th>
//                                         <div className="w-full flex justify-center">
//                                             <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">Su</p>
//                                         </div>
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td className="pt-6">
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
//                                     </td>
//                                     <td className="pt-6">
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
//                                     </td>
//                                     <td className="pt-6">
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
//                                         </div>
//                                     </td>
//                                     <td className="pt-6">
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
//                                         </div>
//                                     </td>
//                                     <td className="pt-6">
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">3</p>
//                                         </div>
//                                     </td>
//                                     <td className="pt-6">
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">4</p>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">5</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">6</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">7</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="w-full h-full">
//                                             <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
//                                                 <a  role="link" tabIndex="0" className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full">8</a>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">9</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">10</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">11</p>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">12</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">13</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">17</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">18</p>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">19</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">20</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">24</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100">25</p>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">26</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">27</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
//                                             <p className="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
//                     <div className="px-4">
//                         <div className="border-b pb-4 border-gray-400 border-dashed">
//                             <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
//                             <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
//                             <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
//                         </div>
//                         <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
//                             <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
//                             <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Orientation session with new hires</a>
//                         </div>
//                         <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
//                             <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
//                             <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
//                             <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
     
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleDateClick = (day) => {
    alert(`You clicked on ${day}/${currentMonth + 1}/${currentYear}`);
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div className="text-gray-300" key={`empty-${i}`}>.</div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      calendarDays.push(
        <div
          className={`p-2 text-center rounded-md cursor-pointer ${
            isToday ? 'bg-green-500 text-white font-bold' : 'hover:bg-gray-200'
          }`}
          key={day}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="w-80 mx-auto border rounded-lg shadow-lg p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          &lt;
        </button>
        <div className="text-lg font-bold">
          {new Date(currentYear, currentMonth).toLocaleString('default', {
            month: 'long',
          })}{' '}
          {currentYear}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          &gt;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-bold mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>
    </div>
  );
};

export default Calendar;

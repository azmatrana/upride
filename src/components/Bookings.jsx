function Bookings() {
  return (
    <div className='py-9 px-11 w-4/6'>
      <div className='flex gap-6'>
        <h2 className='text-black text-2xl'>View Bookings</h2>
        <img src='/public/assets/images/bookings.svg' />
      </div>
      <ul className='flex gap-12 mt-8 border-b mb-6'>
        <li className='t-active'>
          <span className='text-gray-600'>Active</span>
        </li>
        <li>
          <span className='text-gray-600'>Completed</span>
        </li>
        <li>
          <span className='text-gray-600'>Canceled</span>
        </li>
      </ul>
      <table className='border w-full rounded-2xl overflow-hidden'>
        <tr className='bg-gray-200 shadow'>
          <td className='text-sm py-2 text-center'>Name</td>
          <td className='text-sm py-2 text-center'>Date</td>
          <td className='text-sm py-2 text-center'>Package Details</td>
          <td className='text-sm py-2 text-center'>Payment mode</td>
        </tr>
        <tr className='font-light'>
          <td className='text-sm py-3 text-center flex items-center justify-center gap-2'>
            <div className='h-7 aspect-square border rounded-full overflow-hidden'></div>
            <span className='text-black text-sm whitespace-nowrap'>Hello Name!</span>
          </td>
          <td className='text-sm py-3 text-center'>Oct 26, 2022</td>
          <td className='text-sm py-3 text-center'>7958 Swift Village</td>
          <td className='text-sm py-3 text-center'>
            <span className='bg-[#35DBA2] text-white p-0.5 px-3 rounded-xl'>online payment</span>
          </td>
        </tr>
        <tr className='font-light'>
          <td className='text-sm py-3 text-center flex items-center justify-center gap-2'>
            <div className='h-7 aspect-square border rounded-full overflow-hidden'></div>
            <span className='text-black text-sm whitespace-nowrap'>Hello Name!</span>
          </td>
          <td className='text-sm py-3 text-center'>Oct 26, 2022</td>
          <td className='text-sm py-3 text-center'>7958 Swift Village</td>
          <td className='text-sm py-3 text-center'>
            <span className='bg-[#35DBA2] text-white p-0.5 px-3 rounded-xl'>online payment</span>
          </td>
        </tr>
        <tr className='font-light'>
          <td className='text-sm py-3 text-center flex items-center justify-center gap-2'>
            <div className='h-7 aspect-square border rounded-full overflow-hidden'></div>
            <span className='text-black text-sm whitespace-nowrap'>Hello Name!</span>
          </td>
          <td className='text-sm py-3 text-center'>Oct 26, 2022</td>
          <td className='text-sm py-3 text-center'>7958 Swift Village</td>
          <td className='text-sm py-3 text-center'>
            <span className='bg-[#FFCA28] text-white p-0.5 px-3 rounded-xl'>offline payment</span>
          </td>
        </tr>
        <tr className='font-light'>
          <td className='text-sm py-3 text-center flex items-center justify-center gap-2'>
            <div className='h-7 aspect-square border rounded-full overflow-hidden'></div>
            <span className='text-black text-sm whitespace-nowrap'>Hello Name!</span>
          </td>
          <td className='text-sm py-3 text-center'>Oct 26, 2022</td>
          <td className='text-sm py-3 text-center'>7958 Swift Village</td>
          <td className='text-sm py-3 text-center'>
            <span className='bg-[#35DBA2] text-white p-0.5 px-3 rounded-xl'>online payment</span>
          </td>
        </tr>
        <tr></tr>
      </table>
    </div>
  );
}

export default Bookings;

import { useState } from 'react'

const headerTitle = ['image','name','email','phone','options'];
const headerAction = ['Edit','Delete','View'];
const dataTable = [
  {
    image: 'https://preview.cruip.com/cubiq/images/user-40-01.jpg',
    name: 'Patricia Semklo',
    email: ['Option 1', 'Option 2', 'Option 3'], 
    phone: '0123456', 
    options: ['Option 1', 'Option 2', 'Option 3']
  },
  {
    image: 'https://preview.cruip.com/cubiq/images/user-40-01.jpg',
    name: 'Patricia Semklo',
    email: ['Option 1', 'Option 2', 'Option 3'], 
    phone: '0123456', 
    options: ['Option 1', 'Option 2', 'Option 3']
  },
  {
    image: 'https://preview.cruip.com/cubiq/images/user-40-01.jpg',
    name: 'Carolyn McNeail',
    email: ['Option 1', 'Option 2', 'Option 3'],
    phone: '0123456', 
    options: ['Option 1', 'Option 2', 'Option 3']
  }
  // Thêm các khách hàng khác nếu cần
];

const specialColumns = [
  { index: 0, type: 'image' }, // Cột đầu tiên là ảnh
  { index: 2, type: 'combobox' }, 
  { index: 4, type: 'combobox' } // Cột thứ ba là combobox với các tùy chọn
];

function Following() { 
  return (
    <div className='flex'>
        <MyTable 
          headerTitle={headerTitle} 
          dataTable={dataTable} 
          headerAction={headerAction} 
          specialColumns={specialColumns} 
        />
    </div>
  )
}



const MyTable = ({ headerTitle, headerAction, dataTable, specialColumns }) => {
  const toggleAll = () => {
    // Implement toggleAll functionality here
  };

  const uncheckParent = () => {
    // Implement uncheckParent functionality here
  };

  const getColumnType = (index) => {
    const specialColumn = specialColumns.find(col => col.index === index);
    return specialColumn ? specialColumn.type : 'text';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-sm border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-2 px-4">
                <div className="flex items-center">
                  <label className="inline-flex">
                    <span className="text-gray-700 dark:text-gray-300">Select all</span>
                    <input id="parent-checkbox" className="ml-2" type="checkbox" onClick={toggleAll} />
                  </label>
                </div>
              </th>
              {headerTitle.map((title, index) => (
                <th key={index} className="py-2 px-4 text-left">
                  <span className="text-gray-700 dark:text-gray-300">{title}</span>
                </th>
              ))}
              {headerAction.map((action, index) => (
                <th key={index} className="py-2 px-4 text-left">
                  <span className="text-gray-700 dark:text-gray-300">{action}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 dark:text-gray-300">
            {dataTable.map((data, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="py-2 px-4">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span>Select</span>
                      <input className="ml-2" type="checkbox" onClick={uncheckParent} />
                    </label>
                  </div>
                </td>
                {headerTitle.map((title, titleIndex) => (
                  <td key={titleIndex} className="py-2 px-4">
                    {getColumnType(titleIndex) === 'image' ? (
                      <img className="rounded-full" src={data[Object.keys(data)[titleIndex]]} width="40" height="40" alt={`User ${index + 1}`} />
                    ) : getColumnType(titleIndex) === 'combobox' ? (
                      <select className="form-select">
                        {data[Object.keys(data)[titleIndex]].map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      data[Object.keys(data)[titleIndex]]
                    )}
                  </td>
                ))}
                {headerAction.map((action, actionIndex) => (
                  <td key={actionIndex} className="py-2 px-4">
                    <button className="text-blue-600 dark:text-blue-400">{action}</button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default Following
import React from 'react';
const CircularButton = (props) => {
  const handleClick = typeof props.onClick === 'function' ? props.onClick : () => {};
  const size = props?.size || '32px'
  const color = props?.color || '#4F46E5'
  console.log('color:',color);
  return (
    <button
      type="button"
      style={{backgroundColor:color, width:size, height:size}}
      className={`rounded-full flex items-center justify-center group`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className={`text-white`}
        style={{padding:'5px'}}
      >
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
      </svg>
    </button>
  );
};

export default CircularButton;

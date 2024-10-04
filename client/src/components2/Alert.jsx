import React from 'react';

const Alert = ({ type = 'info', message, onClose }) => {
  const baseStyle = 'p-4 mb-4 text-sm rounded-lg';
  let alertStyle = '';

  switch (type) {
    case 'success':
      alertStyle = 'text-green-700 bg-green-100';
      break;
    case 'error':
      alertStyle = 'text-red-700 bg-red-100';
      break;
    case 'warning':
      alertStyle = 'text-yellow-700 bg-yellow-100';
      break;
    case 'info':
    default:
      alertStyle = 'text-blue-700 bg-blue-100';
  }

  return (
    <div className={`${baseStyle} ${alertStyle}`} role="alert">
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-2 text-lg font-semibold">
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;

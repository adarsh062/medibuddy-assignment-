import React from 'react';

function ErrorMsg({ message }) {
  if (!message) return null;
  return (
    <div className="error-message">
      <span> {message}</span>
    </div>
  );
}

export default ErrorMsg;

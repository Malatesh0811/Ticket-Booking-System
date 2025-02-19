import React from "react";

const Notification = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast show position-fixed bottom-0 end-0 m-3 bg-success text-white" role="alert">
      <div className="toast-header bg-success text-white">
        <strong className="me-auto">Success</strong>
        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default Notification;

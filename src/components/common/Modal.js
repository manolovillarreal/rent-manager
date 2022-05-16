import React from "react";

export const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">  
        <div style={{display:"flex"}}>
        <button onClick={onClose} className="modal-btnClose">            
          </button>
        </div>        
          
          <h1 className="modal-title">{title} </h1>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
         
        </div>
      </div>
    </div>
  );
};

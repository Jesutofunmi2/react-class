import React from 'react';
import Button from '../ButtonV2/Button';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const handleCloseOverlay = (e) => {
    if (e.target.className === 'modal-overlay') 
      onClose();        
    }
    

  return (
    <div className="modal-overlay" onClick={handleCloseOverlay}>
      <div className="modal-content">
        <div className='CloseButton'>
            <Button action={onClose} text={"X"} style={"XButton"}/>
         </div>
          <div style={{ textAlign: 'center', marginBottom: '2px' }}>
            <h3>{title}</h3>
        </div>
         <div className='ChildrenContent'>
          {children}
        </div>
       
      </div>
    </div>
  );
};

export default Modal
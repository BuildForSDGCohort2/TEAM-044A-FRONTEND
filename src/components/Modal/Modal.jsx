import React, { Fragment } from "react";
import "./modal.css";

const Modal = ({ handleClose, handleCloseTransfer, show, send, children }) => {
  const showHideClassName =
    show || send ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

        {/* {send ? (
          <Fragment>
            <button className="close" onClick={handleCloseTransfer}>
              Close
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <button className="close" onClick={handleClose}>
              Close
            </button>
          </Fragment>
        )} */}
        <button className="close" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;

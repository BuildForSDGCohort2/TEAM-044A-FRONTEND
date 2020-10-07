import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({ handleClose, show, send, children }) => {
  const showHideClassName =
    show || send ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

        <button className="close" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.elementType])
    .isRequired,
};
export default Modal;

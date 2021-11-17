import React from "react";
import { useEffect } from "react";

export default function Modal({
  text,
  openModal,
  closeModal,
  restoreArticle,
  counter,
  setCounter,
}) {
  useEffect(() => {
    if (counter === 0) {
      closeModal();
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [closeModal, counter, setCounter]);

  return (
    <>
      {openModal && (
        <div className="modalWindow">
          <p className="message">{text}</p>
          <p className="message">This window will disappear after: {counter}</p>
          <div className="options">
            <button
              className="button"
              onClick={() => {
                restoreArticle();
                closeModal();
              }}
            >
              Yes
            </button>
            <button className="button" onClick={() => closeModal()}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import * as React from "react";
import { StyledModal } from "./styled";
import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";

export default function Modal({ title, content }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    function clickHandler(event) {
      if (modalRef.current) {
        const dialogRect = modalRef.current.getBoundingClientRect();
        const isClickInside =
          dialogRect.top <= event.clientY &&
          event.clientY <= dialogRect.top + dialogRect.height &&
          dialogRect.left <= event.clientX &&
          event.clientX <= dialogRect.left + dialogRect.width;

        if (!isClickInside) {
          setIsModalOpen(false);
        }
      }
    }

    window.addEventListener("click", clickHandler);
    return () => window.removeEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    isModalOpen ? modalRef.current.showModal() : modalRef.current.close();
  }, [isModalOpen]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  return (
    <StyledModal ref={modalRef} onKeyDown={handleKeyDown} data-testid="dialog">
      <header>
        <h3>{title}</h3>
        <button onClick={() => setIsModalOpen(false)} data-testid="close-button"></button>
      </header>
      <section>{content}</section>
    </StyledModal>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

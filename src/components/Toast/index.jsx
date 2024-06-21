import * as React from "react";
import PropTypes from "prop-types";
import { StyledToast, StyledContainer } from "src/components/Toast/styled";
import Button from "src/components/Button";
import { useState } from "react";

export default function Toast({ message, duration }) {
  const [toastsData, setToastsData] = useState([]);

  function showToast() {
    const newId = new Date().getTime();
    const delay = duration * 1000;

    setToastsData([
      ...toastsData,
      {
        message: message,
        id: newId,
      },
    ]);

    setTimeout(() => removeToast(newId), delay);
  }

  function removeToast(toastId) {
    setToastsData((toastsData) =>
      toastsData.filter((toast) => toast.id !== toastId)
    );
  }

  const toastsContent = toastsData.map((toast) => {
    return (
      <StyledToast key={toast.id}>
        <p>{message}</p>
        <button onClick={() => removeToast(toast.id)}></button>
      </StyledToast>
    );
  });

  return (
    <>
      <Button
        primary={true}
        label="Toast!"
        onClick={showToast}
        data-testid="open-button"
      />
      <StyledContainer data-testid="container">{toastsContent}</StyledContainer>
    </>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number,
};

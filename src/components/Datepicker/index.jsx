import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Calendar from "src/components/Datepicker/Calendar";
import { StyledInput, StyledWrapper } from "src/components/Datepicker/styled";
import { getDateISO } from "src/components/Datepicker/helpers/calendar";

export default function Datepicker() {
  const [chosenDate, setChosenDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const datepickerRef = useRef(null);

  useEffect(() => {
    function clickHandler(event) {
      if (
        datepickerRef.current &&
        !datepickerRef.current.contains(event.target)
      ) {
        setCalendarOpen(false);
      }
    }

    window.addEventListener("click", clickHandler);
    return () => window.removeEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    setChosenDate(getDateISO(new Date()));
  }, []);

  function toggleCalendar() {
    setCalendarOpen(!calendarOpen);
  }

  function handleChange(event) {
    event.preventDefault();
  }

  function handleDateChange(date) {
    setChosenDate(getDateISO(date));
    setCalendarOpen(false);
  }

  return (
    <StyledWrapper ref={datepickerRef}>
      <StyledInput
        type="text"
        value={chosenDate ? chosenDate.split("-").join(" - ") : ""}
        onChange={handleChange}
        readOnly="readonly"
        placeholder="YYYY - MM - DD"
        onClick={toggleCalendar}
        data-testid="dropdown-toggle"
      />

      {calendarOpen && (
        <Calendar
          initialDate={chosenDate && new Date(chosenDate)}
          onDateChange={handleDateChange}
        />
      )}
    </StyledWrapper>
  );
}
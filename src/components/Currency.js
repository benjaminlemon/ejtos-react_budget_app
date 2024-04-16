import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  let currencyName = () => {
    switch (currency) {
      case "$":
        return "Dollar";
      case "£":
        return "Pound";
      case "€":
        return "Euro";
      case "¥":
        return "Yen";
      default:
        return "Dollar";
    }
  };
  const title = `Currency (${currency} ${currencyName()})`;

  const changeEvent = (eventKey) => {
    const currency = eventKey;

    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };

  return (
    <DropdownButton
      data-bs-theme="dark"
      background-color="green"
      variant="secondary"
      className="mt-2"
      title={title}
      onSelect={(eventKey) => changeEvent(eventKey)}
    >
      <Dropdown.Item href="#/action-1" eventKey="$">
        $ Dollar
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2" eventKey="£">
        £ Pound
      </Dropdown.Item>
      <Dropdown.Item href="#/action-3" eventKey="€">
        € Euro
      </Dropdown.Item>
      <Dropdown.Item href="#/action-4" eventKey="¥">
        ¥ Yen
      </Dropdown.Item>
    </DropdownButton>
  );
};
export default Currency;

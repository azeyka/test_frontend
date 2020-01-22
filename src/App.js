import React from "react";
import "./App.css";
import Button from "./Components/Button";
import { useDispatch } from "react-redux";
import { setButtonState } from "./ReduxStore/actions";

function App() {
  const dispatch = useDispatch();
  const connection = new WebSocket(process.env.REACT_APP_WS_URL);

  const changeButtonState = state => {
    dispatch(setButtonState(state));
  };

  const handleWSMessage = event => {
    try {
      const data = JSON.parse(event.data);
      changeButtonState(data.buttonState);
    } catch {
      console.log("Not valid JSON");
    }
  };

  connection.addEventListener("message", handleWSMessage);
  connection.addEventListener("error", () => console.log("Connection error"));

  return (
    <div className="App">
      <Button connection={connection} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Button from "./Components/Button";
import { useDispatch } from "react-redux";
import { setButtonState } from "./ReduxStore/actions";

function App() {
  const dispatch = useDispatch();
  const connection = new WebSocket("ws://localhost:8080/");

  connection.addEventListener("message", event => {
    let data;
    try {
      data = JSON.parse(event.data);
    } catch (e) {
      console.log("Not valid JSON");
      return;
    }
    dispatch(setButtonState(data.buttonState));
  });

  return (
    <div className="App">
      <Button connection={connection} />
    </div>
  );
}

export default App;

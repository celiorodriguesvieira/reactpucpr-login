import React from "react";
import PageTitle from "./components/PageTitle";
import TextField from "./components/TextField";
import Label from "./components/Label";
import { useForm } from "./components/hooks/useForm";

function App() {
  const { fields, handleTextFieldChange, handleSubmit, status } = useForm();

  return (
    <div className="App">
      <form>
        <PageTitle title="Login" />
        <div>
          <TextField
            name="email"
            onChange={handleTextFieldChange}
            placeholder="email"
            type="text"
            value={fields.email}
          />
        </div>
        <div>
          <TextField
            name="password"
            onChange={handleTextFieldChange}
            placeholder="password"
            type="password"
            value={fields.password}
          />
        </div>
        <div>
          <button onClick={handleSubmit} type="button">
            Acessar
          </button>
        </div>
        <div>
          <Label style={{ color: status.hasError ? "red" : "green" }}>
            {status.message}
          </Label>
        </div>
      </form>
    </div>
  );
}

export default App;

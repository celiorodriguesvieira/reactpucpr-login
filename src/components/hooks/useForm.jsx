import { useState } from "react";
import { useDB } from "./useDB";

export function useForm() {
  const data = useDB();
  const [fields, setFields] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ hasError: false, message: "" });

  const handleTextFieldChange = (event) => {
    setStatus({ hasError: false, message: "" });
    setFields((prevState) => {
      // prevState é o valor anterior.
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = () => {
    if (fields.email.length > 0 && fields.password.length > 0) {
      const found = data.find(
        (item) =>
          item.email === fields.email && item.password === fields.password
      );

      if (found) {
        setStatus({ hasError: false, message: "Login com sucesso!" });
      } else {
        setStatus({ hasError: true, message: "Login ou senha inválidos." });
      }
    } else {
      window.alert("Email e senha são campos obrigatórios.");
    }
  };

  return { fields, handleTextFieldChange, handleSubmit, status, setFields };
}

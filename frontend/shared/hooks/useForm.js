import { useState } from "react";

export const useForm = (initialValues) => {
  const [formState, setFormState] = useState(initialValues);

  const onInput = (id, value) => {
    setFormState({ ...formState, [id]: value });
  };

  return { formState, onInput, setFormState };
};

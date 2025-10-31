import React, { useEffect, useState } from "react";

function Input(props) {
  const [state, setState] = useState({
    id: props.id,
    value: props.value || "",
  });

  const { onInput } = props;
  const { id, value } = state;

  useEffect(() => {
    onInput(id, value);
  }, [id, value]);

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={state.value}
        onChange={(e) => setState({ ...state, value: e.target.value })}
        onInput={onInput}
        className={props.className}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
        value={state.value}
        onChange={(e) => setState({ ...state, value: e.target.value })}
        onInput={onInput}
        className={props.className}
      />
    );
  return (
    <div className={props.parentClass}>
      <label>{props.label}</label>
      {element}
    </div>
  );
}

export default Input;

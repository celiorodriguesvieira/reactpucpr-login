import React from "react";

export default function TextField({
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <input
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}

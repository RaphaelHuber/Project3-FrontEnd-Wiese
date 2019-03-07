import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

const test = [
  { label: "hydro", value: "hydro"},
  { label: "solar", value: "solar"},
  { label: "wind", value: "wind"},
  { label: "bio", value: "bio"},
  { label: "other", value: "other"}
]

const multiSelect = () => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      isMulti
      options={test}
    />
  );
}

export default multiSelect;
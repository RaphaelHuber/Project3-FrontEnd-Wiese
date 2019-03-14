import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

const test = [
  { label: "All sources", value: "all"},
  { label: "Hydropower", value: "hydro"},
  { label: "Solar Energy", value: "solar"},
  { label: "Wind energy", value: "wind"},
  { label: "Biomass", value: "biomass"},
  { label: "Other", value: "other"}
]

const multiSelect = () => {
  return (
    <Select
      closeMenuOnSelect={false}
      defaultValue={[test[0]]}
      components={makeAnimated()}
      isMulti
      options={test}
    />
  );
}

export default multiSelect;
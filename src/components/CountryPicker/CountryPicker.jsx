import React, { useState, useEffect } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      {/* <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect> */}
      <Autocomplete
        options={countries}
        onChange={handleCountryChange}
        renderInput={(params) => <TextField {...params} label="United States" />}
      />
    </FormControl>
  );
};

export default Countries;

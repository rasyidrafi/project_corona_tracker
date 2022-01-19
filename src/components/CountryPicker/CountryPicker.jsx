import React, { useState, useEffect } from 'react';
import { Autocomplete, FormControl } from '@material-ui/core';

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
        onChange={(e) => handleCountryChange(e.target.value)}
        renderInput={(params) => <TextField {...params} label="United States" />}
      />
    </FormControl>
  );
};

export default Countries;

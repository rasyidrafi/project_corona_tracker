import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Terinfeksi"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Jumlah kasus positif COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Sembuh"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Jumlah orang sembuh COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Kematian"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Jumlah kematian karena COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;

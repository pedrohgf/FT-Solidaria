import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  caption: {
    opacity: 0.54
  }
}));

export default function Review(props) {
  const classes = useStyles();

  const getData = (key) => (props.data[key] !== undefined ? props.data[key] : "")

  const getCategory = () => getData('category')

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações Gerais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
            {getData('name')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Nome
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getData('site')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getData('adress')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('city')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('state')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('zip_code')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('phone')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getData('description')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getCategory()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getData('instagram')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getData('facebook')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
           {getData('twitter')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {getData('message')}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
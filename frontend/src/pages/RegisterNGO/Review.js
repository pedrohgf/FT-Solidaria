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

export default function Review({data , data : {name, site, address, city, category_id, state, zip_code, phone, description, instagram, facebook, twitter, message}}) {

  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Informações Gerais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
            {name}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Nome
          </Typography>
        </Grid>
        {site &&
          <Grid item xs={12}>
            <Typography>
              {site}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Site
          </Typography>
          </Grid>}
        <Grid item xs={12}>
          <Typography>
            {address}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Endereço
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {city}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Cidade
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {state}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Estado
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {zip_code}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            CEP / Código Postal
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {phone}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Telefone
          </Typography>
        </Grid>
        {description &&
          <Grid item xs={12}>
            <Typography>
              {description}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Descrição
          </Typography>
          </Grid>}
        {category_id &&
          <Grid item xs={12}>
            <Typography>
              {category_id[0].name}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Categoria
          </Typography>
          </Grid>}
        {instagram &&
          <Grid item xs={12}>
            <Typography>
              {instagram}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Instagram
          </Typography>
          </Grid>}
        {facebook &&
          <Grid item xs={12}>
            <Typography>
              {facebook}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Facebook
          </Typography>
          </Grid>}
        {twitter &&
          <Grid item xs={12}>
            <Typography>
              {twitter}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Twitter
          </Typography>
          </Grid>}
        {message &&
          <Grid item xs={12}>
            <Typography>
              {message}
            </Typography>
            <Typography variant="caption" className={classes.caption}>
              Agradecimento
          </Typography>
          </Grid>}
      </Grid>
    </>
  );
}
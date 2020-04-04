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
        {getData('site') !== "" ? 
        <Grid item xs={12}>
          <Typography>
            {getData('site')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Site
          </Typography>
        </Grid> : <></>}
        <Grid item xs={12}>
          <Typography>
            {getData('address')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Endereço
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('city')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Cidade
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('state')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Estado / Província / Região
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('zip_code')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            CEP / Código Postal
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>
            {getData('phone')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Telefone
          </Typography>
        </Grid>
        {getData('description') !== "" ? 
        <Grid item xs={12}>
          <Typography>
            {getData('description')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Descrição
          </Typography>
        </Grid> : <></>}
        {getCategory() !== "" ? 
        <Grid item xs={12}>
          <Typography>
            {getCategory()}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Categoria
          </Typography>
        </Grid> : <></>}
        {getData('instagram') !== "" ? 
        <Grid item xs={12}>
          <Typography>
            {getData('instagram')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Instagram
          </Typography>
        </Grid> : <></>}
        {getData('facebook') !== "" ? 
        <Grid item xs={12}>
          <Typography>
            {getData('facebook')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Facebook
          </Typography>
        </Grid> : <></>}
        {getData('twitter') !== "" ? 
        <Grid item xs={12}>
          <Typography>
           {getData('twitter')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Twitter
          </Typography>
        </Grid> : <></>}
        {getData('message') !== "" ? 
        <Grid item xs={12}>
          <Typography>
            {getData('message')}
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Agradecimento
          </Typography>
        </Grid> : <></>}
      </Grid>
    </React.Fragment>
  );
}
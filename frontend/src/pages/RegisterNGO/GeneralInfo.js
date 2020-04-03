import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function GeneralInfo() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações Gerais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nome"
            fullWidth
           // autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="site"
            name="site"
            label="Site"
            fullWidth
            //autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Endereço"
            fullWidth
            //autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            //autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Estado / Província / Região" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CEP / Código Postal"
            fullWidth
            // autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Telefone"
            fullWidth
           // autoComplete="billing country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
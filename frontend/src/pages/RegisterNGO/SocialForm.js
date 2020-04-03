import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function SocialForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Redes Sociais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="instagram" label="Instagram" placeholder="exemplo: @ajudae" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="facebook" label="Facebook" placeholder="exemplo: Ajudae" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="twitter" label="Twitter" placeholder="exemplo: @ajudae" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
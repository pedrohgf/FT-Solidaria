import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function SocialForm(props) {
  const updateData = (key, value) => {
    let data = props.data;
    data[key] = value;
    console.log(data)
    props.setData(data)
  };

  const getData = (key) => (props.data[key] !== undefined ? props.data[key] : "")

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Redes Sociais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="instagram" label="Instagram" placeholder="exemplo: @ajudae" fullWidth 
            onChange={(item) => updateData('instagram',item.target.value)}
            defaultValue={getData('instagram')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="facebook" label="Facebook" placeholder="exemplo: Ajudae" fullWidth 
            onChange={(item) => updateData('facebook',item.target.value)}
            defaultValue={getData('facebook')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="twitter" label="Twitter" placeholder="exemplo: @ajudae" fullWidth 
            onChange={(item) => updateData('twitter',item.target.value)}
            defaultValue={getData('twitter')}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
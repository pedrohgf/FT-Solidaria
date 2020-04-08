import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InstagramMask from '../../components/Masks/InstagramMask';
import TwitterMask from '../../components/Masks/TwitterMask';
import { useState } from 'react';

export default function SocialForm(props) {
  
  const getData = (key) => (props.data[key] !== undefined ? props.data[key] : "")
  const [instagram, setInstagram] = useState(getData('instagram'));
  const [twitter, setTwitter] = useState(getData('twitter'));

  const updateData = (key, value) => {
    let data = props.data;
    data[key] = value;
    console.log(data)
    props.setData(data)
  };

  const updateInstagram = (value) => {
    let mask = ""
    
    mask = InstagramMask(value)

    setInstagram(mask)

    updateData('instagram',mask)
  }

  const updateTwitter = (value) => {
    let mask = ""
    
    mask = TwitterMask(value)

    setTwitter(mask)

    updateData('twitter',mask)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Redes Sociais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="instagram" label="Instagram" placeholder="exemplo: @ajudae" fullWidth 
            onChange={(item) => updateInstagram(item.target.value)}
            value={instagram}
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
            onChange={(item) => updateTwitter(item.target.value)}
            value={twitter}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
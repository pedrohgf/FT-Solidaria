import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function Message(props) {

    const updateData = (key, value) => {
        let data = props.data;
        data[key] = value;
        console.log(data)
        props.setData(data)
    };
    
    const getData = (key) => (props.data[key] !== undefined ? props.data[key] : "")
    
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Agradecimento aos doadores
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <TextField
                placeholder="Mensagem de agradecimento"
                multiline
                rows={1}
                rowsMax={10}
                fullWidth={true}
                inputProps={{maxLength : 256}}
                helperText="Mande uma mensagem especial para os doadores visualizarem! :)"
                onChange={(item) => updateData('message',item.target.value)}
                defaultValue={getData('message')}
            />
        </Grid>
      </Grid>
    </>
  );
}
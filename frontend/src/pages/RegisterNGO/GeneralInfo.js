import React from 'react';
import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function GeneralInfo(props) {

  const getData = (key) => (props.data[key] !== undefined ? props.data[key] : "")
  const [category,setCategory]  = useState(getData('category'));

  const handleChange = (event) => {
    setCategory(event.target.value);
    updateData('category',event.target.value)
  };

  const updateData = (key, value) => {
    let data = props.data;
    data[key] = value;
    console.log(data)
    props.setData(data)
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações Gerais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required = {true}
            id="name"
            name="name"
            label="Nome"
            fullWidth
            onChange={(item) => updateData('name',item.target.value)}
            defaultValue={getData('name')}
           // autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="site"
            name="site"
            label="Site"
            fullWidth
            onChange={(item) => updateData('site',item.target.value)}
            defaultValue={getData('site')}
            //autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Endereço"
            fullWidth
            onChange={(item) => updateData('adress',item.target.value)}
            defaultValue={getData('adress')}
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
            onChange={(item) => updateData('city',item.target.value)}
            defaultValue={getData('city')}
            //autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          required
            id="state" 
            name="state" 
            label="Estado / Província / Região" 
            fullWidth
            onChange={(item) => updateData('state',item.target.value)}
            defaultValue={getData('state')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CEP / Código Postal"
            fullWidth
            onChange={(item) => updateData('zip_code',item.target.value)}
            defaultValue={getData('zip_code')}
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
            onChange={(item) => updateData('phone',item.target.value)}
            defaultValue={getData('phone')}
           // autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            label="Descrição"
            rows={1}
            rowsMax={10}
            fullWidth={true}
            inputProps={{maxLength : 256}}
            helperText="Descreva os objetivos e ações que a sua ONG realiza."
            onChange={(item) => updateData('description',item.target.value)}
            defaultValue={getData('description')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth={true}>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value={10}>Educação</MenuItem>
              <MenuItem value={20}>Saúde</MenuItem>
              <MenuItem value={30}>Infância</MenuItem>
              <MenuItem value={40}>Outro</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
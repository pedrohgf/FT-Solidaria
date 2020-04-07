import React from 'react';
import { useState , useEffect} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import brazil_states from '../../assets/brazil_states.json';
//import InputMask from "react-input-mask";
import ZipCodeMask from '../../components/Masks/ZipCodeMask';
import PhoneMask from '../../components/Masks/PhoneMask';
import axios from 'axios';

export default function GeneralInfo(props) {
  const getData = (key) => (props.data[key] !== undefined ? props.data[key] : "")
  const [category, setCategory]  = useState(getData('category_id'));
  const [state,setState]  = useState(getData('state'));
  const [zipCode, setZipCode] = useState(getData('zip_code'));
  const [phone, setPhone] = useState(getData('phone'));
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (event) => {
    console.log(event)
    setCategory(event.target.value);
    updateData('category_id',event.target.value);
    updateData('category_name', event.target.labelId);
  };

  useEffect(() => {
    const fetchData = async () => {
    	const response = await axios.get('http://64.227.29.85:8000/api/v1/get/ong_category/');
    	setCategories(response.data);
    }
    fetchData();
  }, []);

  const handleStateChange = (event) => {
    setState(event.target.value);
    updateData('state',event.target.value)
  };

  const requiredFields = [
    'name',
    'address',
    'city',
    'state',
    'zip_code',
    'phone'
  ]

  const updateData = (key, value) => {
    let data = props.data;
    data[key] = value;
    console.log(data)
    props.setData(data)

    //validation
    const bool_arr = requiredFields.map((field) => (data[field] !== undefined && data[field] !== ""))
    const reducer = (accumulator, currentValue) => accumulator && currentValue;
    const validated = bool_arr.reduce(reducer);

    props.setDisableButton(!validated); // disable button if form not validated
  };

  const updateZipCode = (value) => {
    let mask = ""
    
    mask = ZipCodeMask(value)

    setZipCode(mask)

    updateData('zip_code',mask)
  }

  const updatePhone = (value) => {
    let mask = ""
    
    mask = PhoneMask(value)

    setPhone(mask)

    updateData('phone', mask)
  }

  return (
    <>
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Endereço"
            fullWidth
            onChange={(item) => updateData('address',item.target.value)}
            defaultValue={getData('address')}
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth={true}>
            <InputLabel id="state-label" required>Estado</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              value={state}
              onChange={handleStateChange}
            >
            {brazil_states.map(state => 
              (<MenuItem key={state.id} value={state.id}>{state.name}</MenuItem>)
            )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CEP / Código Postal"
            inputProps={{
              maxLength: 9,
            }}
            fullWidth
            value={zipCode}
            onChange={(item) =>  updateZipCode(item.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Telefone"
            inputProps={{
              maxLength: 15,
            }} 
            value = {phone}
            fullWidth
            onChange={(item) => updatePhone(item.target.value)}
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
        {(categories.length > 0)  &&
        <Grid item xs={12}>
          <FormControl fullWidth={true}>
            <InputLabel id="category-label">Categoria</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
            {categories.map(category =>
              (<MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)
            )}
            </Select>
          </FormControl>
        </Grid>
        }
        {category === 40 ? 
        <Grid item xs={12}>
          <TextField
            id="otherCategory"
            name="otherCategory"
            label="Nome da Categoria"
            fullWidth={true}
            inputProps={{maxLength : 256}}
            helperText="Escreva o nome da nova categoria que deseja inserir."
            onChange={(item) => updateData('otherCategory',item.target.value)}
            defaultValue={getData('otherCategory')}
          />
        </Grid> : <></>}
      </Grid>
    </>
  );
}
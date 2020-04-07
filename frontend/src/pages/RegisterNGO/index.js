import React from 'react';
import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import GeneralInfo from './GeneralInfo';
import SocialForm from './SocialForm';
import Review from './Review';
import Message from './Message';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Informações', 'Redes sociais', 'Agradecimento', 'Resumo'];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function getStepContent(step, data, setData, setDisableButton) {
  switch (step) {
    case 0:
      return <GeneralInfo data={data} setData={setData} setDisableButton={setDisableButton} />;
    case 1:
      return <SocialForm data={data} setData={setData}/>;
    case 2:
      return <Message data={data} setData={setData}/>;
    case 3:
      return <Review data={data}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function RegisterNGO() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const { width } = useWindowDimensions();
  const [data, setData] = useState({});
  const [disableButton, setDisableButton] = useState(true);
  const stepper_orientation = width < 640 ? 'vertical' : 'horizontal';

  const handleNext = () => {
    activeStep === 3 ? saveONG() : setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const saveONG = async () => {
    try {
      console.log("REQUEST FINAL:");
      console.log(data);
      const post_data = Object.assign({},data);
      post_data.category_id = post_data.category_id[0].id;
      await axios.post("http://64.227.29.85:8000/api/v1/create/ongs/", post_data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Ajudaê
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Cadastro
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}  orientation={stepper_orientation}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Obrigado pelo seu cadastro!
                </Typography>
                <Typography variant="subtitle1">
                  Mensagem de agradecimento do Ajudaê.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep, data, setData, setDisableButton)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      VOLTAR
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={disableButton}
                  >
                    {activeStep === steps.length - 1 ? 'Cadastrar' : 'PRÓXIMO'}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </main>
    </>
  );
}
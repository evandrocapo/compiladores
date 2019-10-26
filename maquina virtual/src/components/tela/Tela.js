import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from '../menu/Menu'
import Funcao from '../funcao/Funcao'
import Pilha from '../pilha/Pilha'
import Breakpoint from '../breakpoint/Breakpoint'
import Entrada from '../entrada/Entrada'
import Saida from '../saida/Saida'
import { Divider } from '@material-ui/core';
import axios from 'axios' 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

var recuperarDados = async () =>{
  return await axios.get('/maquina/' + window.location.pathname.replace("/",""))
}

export default function FullWidthGrid() {
  const classes = useStyles();
  var dados

  async function carregar(){
    dados = await recuperarDados();
    dados = dados.data
    console.log(dados)
  }  

  carregar().then(() => {
      console.log("carregado");
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={9}>
          <Menu/>
          <Divider/>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify="center">
        <Grid item xs={'12'} sm={'auto'} lg={'auto'} >
          <Funcao dados={dados}/>
        </Grid>
      
        <Grid item xs={'12'} sm={'auto'} lg={'auto'}>
          <Pilha dados={dados}/>
        </Grid>

        <Grid item xs={12} sm={9}>
            <Divider dados={dados}/>
        </Grid>
      </Grid>

      <Grid container spacing={3} justify="center">
        <Grid item xs={'auto'} sm={'auto'} lg={'auto'}>
          <Entrada dados={dados}/>
        </Grid>

        <Grid item xs={'auto'} sm={'auto'} lg={'auto'}>
          <Saida dados={dados}/>
        </Grid>

        <Grid item xs={'auto'} sm={'auto'} lg={'auto'}>
          <Breakpoint dados={dados}/>
        </Grid>
      </Grid>

    </div>
  );
}
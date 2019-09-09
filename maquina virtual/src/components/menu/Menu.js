import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { blue, blueGrey, red, common, lightBlue, indigo, green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    backgroundColor: 'primary.main',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  input: {
    display: 'none',
  },
}));

var fileSelectedHandler = event => {
  var fileReader = new FileReader();
  fileReader.readAsText(event.target.files[0])
  
  fileReader.onload = e => {
    console.log(e.target.result)
  }
}

export default function CSSGrid() {
  const classes = useStyles(); 

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
      <input
        accept="*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={fileSelectedHandler}
      />
      <label htmlFor="contained-button-file">
        <Button className={classes.paper} borderRadius="20px" color="primary" variant="contained" component="span">
          Arquivo
        </Button>
      </label>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.paper} borderRadius="20px" bgcolor={green[400]}>
          Executar
                        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.paper} borderRadius="20px" bgcolor={red[400]}>
          Sobre
                        </Box>
      </Grid>
      <Divider />
    </Grid>
  )
}
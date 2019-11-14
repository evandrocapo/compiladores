import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    maxWidth: '100%',
    marginTop: theme.spacing(3),
    maxHeight: '300px',
    overflowX: 'auto',
  },
  table: {
    maxWidth: '100%',
  },
}));

function createData(name, calories){
  return { name, calories};
}

const rows = [
  createData('0', 159),
  createData('1', 237),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <center>Conteúdo de saida</center>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Endereço (S)</TableCell>
            <TableCell align="left">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
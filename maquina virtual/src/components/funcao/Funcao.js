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
    maxWidth: 'auto',
    marginTop: theme.spacing(3),
    maxHeight: '300px',
    overflowX: 'auto',
  },
  table: {
    maxWidth: 'auto',
  },
  // tableCell: {
  //   paddingRight: 4,
  //   paddingLeft: 5
  // }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(0, 'NULL', '', '', 'Não faz nada'),
  createData(1, 'JMP', 0, '', 'Loop infinito'),
  createData(0, 'NULL', '', '', 'Não faz nada'),
  createData(1, 'JMP', 0, '', 'Loop infinito'),
  createData(0, 'NULL', '', '', 'Não faz nada'),
  createData(1, 'JMP', 0, '', 'Loop infinito'),
  createData(0, 'NULL', '', '', 'Não faz nada'),
  createData(1, 'JMP', 0, '', 'Loop infinito'),
  createData(0, 'NULL', '', '', 'Não faz nada'),
  createData(1, 'JMP', 0, '', 'Loop infinito'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <center>Instruções a serem executadas pela MV</center>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>I</TableCell>
            <TableCell align="right">Instrução</TableCell>
            <TableCell align="right">Atributo&nbsp;#1</TableCell>
            <TableCell align="right">Atributo&nbsp;#2</TableCell>
            <TableCell align="right">Comentario</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
import React from 'react';
import Grid from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles';
import Menu from '../menu/Menu'
import Funcao from '../funcao/Funcao'
// import Pilha from '../pilha/Pilha'


export default function CSSGrid() {
    return (
        
            <Container maxWidth="sm">
                <Menu />
                <Divider />
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        Instruções a serem executadas pela MV
                        <Funcao />
                    </Grid>
                    <Grid item xs={4}>
                        Conteúdo da pilha
                        {/* <Pilha /> */}
                    </Grid>
                </Grid>
            </Container>
            

    )
}
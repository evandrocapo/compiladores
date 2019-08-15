import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles';
import Menu from '../menu/Menu'

export default function CSSGrid() {
    return (
        
            <Container maxWidth="sm">
                <Menu />
                <Divider />
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        Instruções a serem executadas pela MV
                    </Grid>
                    <Grid item xs={4}>
                        Conteúdo da pilha
                    </Grid>
                </Grid>
            </Container>
            

    )
}
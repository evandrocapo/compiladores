let tInstr = document.getElementById('table-instr');
let tPilha = document.getElementById('table-pilha');
let tEntrada = document.getElementById('table-entrada');
let tSaida = document.getElementById('table-saida');
let tBreakpoint = document.getElementById('table-break');

ipcRenderer.on('att-tables', async (event, data) => {
    instrCreate(await data.program)
    pilhaCreate(await data.pilha)
    entradaCreate(await data.entrada)
    saidaCreate(await data.saida)
    breakpointCreate(await data.breakpoint)
});

function breakpointCreate(breakpoint){
    let i;

    tBreakpoint.innerHTML = `<table id="table-break" style="margin-top:10px; border:2px solid black; margin-left: 10px;float:left; min-width:260px;">
                        <thead>
                            <tr>
                                <th colspan="2">Conteúdo da breakpoint</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Endereço(S)</td>
                            <td>Valor</td>
                        </tr>`

    for(i=0;i<breakpoint.length;i++){
        tBreakpoint.innerHTML += `<tr>
                                <td>${i}</td>
                                <td>${breakpoint[i]}</td>
                            </tr>`
    }

    tBreakpoint.innerHTML += `</table>`
}

function saidaCreate(saida){
    let i;

    tSaida.innerHTML = `<table id="table-saida" style="margin-top:10px; border:2px solid black; margin-left: 10px;float:left; min-width:260px;">
                        <thead>
                            <tr>
                                <th colspan="2">Conteúdo da saida</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Endereço(S)</td>
                            <td>Valor</td>
                        </tr>`

    for(i=0;i<saida.length;i++){
        tSaida.innerHTML += `<tr>
                                <td>${i}</td>
                                <td>${saida[i]}</td>
                            </tr>`
    }

    tSaida.innerHTML += `</table>`
}

function entradaCreate(entrada){
    let i;

    tEntrada.innerHTML = `<table id="table-entrada" style="margin-top:10px; border:2px solid black; margin-left: 10px;float:left; min-width:260px;">
                        <thead>
                            <tr>
                                <th colspan="2">Conteúdo da Entrada</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Endereço(S)</td>
                            <td>Valor</td>
                        </tr>`

    for(i=0;i<entrada.length;i++){
        tEntrada.innerHTML += `<tr>
                                <td>${i}</td>
                                <td>${entrada[i]}</td>
                            </tr>`
    }

    tEntrada.innerHTML += `</table>`
}

function pilhaCreate(pilha){
    let i;

    tPilha.innerHTML = `<table class="hk-message--generic shadow-5" id="table-pilha" style="margin-top:10px; border:2px solid black; margin-left: 10px;float:left; min-width:260px;">
                        <thead>
                            <tr>
                                <th colspan="2">Conteúdo da Pilha</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Endereço(S)</td>
                            <td>Valor</td>
                        </tr>`

    for(i=0;i<pilha.length;i++){
        tPilha.innerHTML += `<tr>
                                <td>${i}</td>
                                <td>${pilha[i]}</td>
                            </tr>`
    }

    tPilha.innerHTML += `</table>`
}

function instrCreate(program) {
    let i;
    let params;
    let program_;
    tInstr.innerHTML = `<table class="hk-message--generic shadow-5" id="table-instr" style="margin-top:10px; border:2px solid black; margin-left: 10px;float:left; min-width:260px;">
                        <thead>
                        <tr>
                            <th colspan="5">Instruções a serem executadas pela MV</th>
                        </tr>
                        </thead>
                            <tr>
                                <td>I</td>
                                <td>Instruções</td>
                                <td>Atributo#1</td>
                                <td>Atributo#2</td>
                                <td>Comentario</td>
                            </tr>`

    for (i = 0; i < program.length; i++) {
        params = program[i].split(' ');
        program_ = params[0];
        if (params[1] == undefined) params

        if (params.length > 1) {
            params = params[1].replace(' ', '');
            params = params.split(',')

            if (params.length > 1) {
                tInstr.innerHTML += `<tr>
                                    <td>${i}</td>
                                    <td>${program_}</td>
                                    <td>${params[0]}</td>
                                    <td>${params[1]}</td>
                                    <td>Comentario</td>
                                </tr>`
            }
            else {
                tInstr.innerHTML += `<tr>
                                        <td>${i}</td>
                                        <td>${program_}</td>
                                        <td>${params[0]}</td>
                                        <td></td>
                                        <td>Comentario</td>
                                    </tr>`
            }
        }
        else {
            tInstr.innerHTML += `<tr>
                                    <td>${i}</td>
                                    <td>${program_}</td>
                                    <td></td>
                                    <td></td>
                                    <td>Comentario</td>
                                </tr>`
        }


    }

    tInstr.innerHTML += `</table>`
}
class AssemblyReader {
    constructor (){

    }

    readSTART(s){
        s = - 1;
    }

    readALLOC(s, m, n, o){
        var k = 0;
        while(k < n){
            s = s + 1;
            m[s] = m[o+k]
        }
    }

    readDALLOC(s, m, n, o){
        var k = n-1;

        while(k => 0){
            m[o+k] = m[s];
            s = s - 1;
        }

    }

    readCALL(s, m, i, p){
        s = s + 1;
        m[s] = i + 1;
        i = p;
    }

    readRETURN(s, m, i){
        i = m[s]; //nao tenho certeza desse I pagina 99
        s = s - 1;
    }

    readRETURNF(){
        // implementar o RETURNF
    }

    readRD(s, m, k){
        s = s + 1;
        m[s] = k; // arrumar, precisa ler do teclado.
    }

    readPRN(s, m){
        print(m[s]);//imprimir m[s]
        s = s - 1;
    }

    readHLT(){
        //parar;
    }

    readLDC(s, m, k){
        s = s + 1;
        m[s] = k;
    }

    readLDV(s, m, n){
        s = s + 1;
        m[s] = m[n];
    }

    readADD(s, m){
        m[s-1] = m[s-1] + m[s];
        s = s - 1;
    }

    readSUB(s, m){
        m[s-1] = m[s-1] - m[s];
        s = s - 1;
    }

    readMULT(s, m){
        m[s-1] = m[s-1] * m[s];
        s = s - 1;
    }

    readDIVI(s, m){
        m[s-1] = m[s-1] / m[s];
        s = s - 1;
    }

    readINV(m){
        m[s] = -(m[s])
    }

    readAND(s, m){
        if(m[s-1] == 1 && m[s] == 1){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readOR(s, m){
        if(m[s-1] == 1 || m[s] == 1){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readNEG(s, m){
        m[s] = 1 - m[s];
    }

    readCME(s, m){
        if(m[s-1] < m[s]){
            m[s-1] = 1
        }
        else{
            m[s-1] = 0
        }

        s = s - 1;
    }

    readCMA(s, m){
        if(m[s-1] > m[s]){
            m[s-1] = 1
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCEQ(s, m){
        if(m[s-1] == m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCDIF(s, m){
        if(m[s-1] != m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCMEQ(s, m){
        if(m[s-1] <= m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readCMAQ(s, m){
        if(m[s-1] >= m[s]){
            m[s-1] = 1;
        }
        else{
            m[s-1] = 0;
        }

        s = s - 1;
    }

    readJMP(i, p){
        i = p;
    }

    readJMPF(s, m, i, p){
        if(m[s] == 0){
            i = p;
        }
        else{
            i = i + 1;
        }

        s = s - 1;
    }

    readNULL(){

    }
}

module.exports = {AssemblyReader}
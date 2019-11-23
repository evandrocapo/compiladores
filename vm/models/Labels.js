class Labels {
    constructor(labels, line){
        this.labels = labels;
        this.line = line;
    }

    getLabels(){
        return this.labels;
    }

    setLabels(labels){
        this.labels = labels;
    }

    getLine(){
        return this.line();
    }
    
    setLine(line){
        this.line = line;
    }
}

module.exports = { Labels }
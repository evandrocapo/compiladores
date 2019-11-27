class Program {
    constructor() {
        if (!!Program.instance) {
            return Program.instance;
        }

        Program.instance = this;

        return this;
    }
}

module.exports = {Program}
class Exchange {
    constructor(select1, select2) {
        this.select1 = select1;
        this.select2 = select2;

    };


    get(url) {
        return new Promise((res, rej) => {

            fetch(url + this.select1)
                .then(response => response.json())
                .then(response => res(response.rates[this.select2]))
                .catch(err => rej(err));

        });

    };
}
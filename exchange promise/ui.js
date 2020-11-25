class Ui {
    selector() {
        return {
            amount: "#amount",
            allCurrncy1: "#firstCurrency",
            allCurrncy2: "#secondCurrency",
            outFirst: "#outFirst",
            outSecond: "#outSecond",
            result: "#result"
        }

    };


    getResult(result) {
        document.querySelector(this.selector().result).value = Number(result.toFixed(2));
    }


    getCurrnacy(currency1, currency2) {
        document.querySelector(this.selector().outFirst).textContent = currency1;
        document.querySelector(this.selector().outSecond).textContent = currency2;
    };


    showMessage(text, color) {
        let conteiner = document.querySelector(".container");
        let row = document.querySelector(".row");
        let alert = document.createElement("div");
        alert.className = `alert alert-${color}`;
        alert.textContent = text;
        conteiner.insertBefore(alert, row);

    }

}
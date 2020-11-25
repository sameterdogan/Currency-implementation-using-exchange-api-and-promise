let ui = new Ui();
let selectors = ui.selector();
let exchange = new Exchange(null, null);
let selected1 = document.querySelector(selectors.allCurrncy1);
let selected2 = document.querySelector(selectors.allCurrncy2);
let amount = document.querySelector(selectors.amount);

//currencyleri result kısmına getirme
let select1, select2;
[select1, select2] = [selected1.options[selected1.selectedIndex].textContent, selected2.options[selected2.selectedIndex].textContent];
ui.getCurrnacy(select1, select2);

loadEventListenner();

function loadEventListenner() {
    //input eventi
    amount.addEventListener("input", e => {
        //currencyleri seçme

        let select1, select2;
        [select1, select2] = [selected1.options[selected1.selectedIndex].textContent, selected2.options[selected2.selectedIndex].textContent]

        //currencyleri exchange  atama
        exchange.select1 = select1;
        exchange.select2 = select2;

        exchange.get("https://api.exchangeratesapi.io/latest?base=")
            .then(res => ui.getResult(Number(e.target.value) * res))
            .catch(err => ui.showMessage("hata oluştu !", "danger"));
    });

    //currnecy1 değiştiğinde 

    selected1.addEventListener("change", (e) => {
        //currencyleri seçme 
        let select1, select2;
        [select1, select2] = [e.target.value, selected2.value];

        //currencyleri exchange  atama
        exchange.select1 = select1;
        exchange.select2 = select2;

        exchange.get("https://api.exchangeratesapi.io/latest?base=")
            .then(res => ui.getResult(Number(amount.value) * res))
            .catch(err => ui.showMessage("hata oluştu", "danger"));

        // currencyleri ui get currncye gönderme
        ui.getCurrnacy(select1, select2);
    });

    //currnecy2 değiştiğinde 

    selected2.addEventListener("change", (e) => {
        //currencyleri seçme 
        let select1, select2;
        [select1, select2] = [selected1.value, e.target.value];

        //currencyleri exchange  atama
        exchange.select1 = select1;
        exchange.select2 = select2;

        exchange.get("https://api.exchangeratesapi.io/latest?base=")
            .then(res => ui.getResult(Number(amount.value) * res))
            .catch(err => ui.showMessage("hata oluştu", "danger"));

        //currencyleri ui getcurrcye gönderme
        ui.getCurrnacy(select1, select2);
    });

};
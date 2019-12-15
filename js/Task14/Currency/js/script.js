let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
    function currency() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.on = function () {
                if (request.readyState === 4 && request.status == 200) {
                    let data =JSON.parse(request.response);
                    resolve();


                } else {
                    reject();

                }
            };
         
            
        });
    }


inputRub.addEventListener('input', () => {
    
    
    currency()
        .then(() => inputUsd.value = inputRub.value / data) 
        .catch(() => inputUsd.value = 'Fuck ...')


});
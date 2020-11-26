
let pass = document.getElementById('pass');
let checkLogin = setInterval(isLoginCorrect, 1000);

function isLoginCorrect () {
    let login = document.getElementById('login').value;
    let reg = /^[a-zA-Z0-9_.]*@[a-z]*\.[a-z]{2,3}/g;
    if (login !== '' && reg.test(login)) {
        pass.removeAttribute('disabled');
    } else {
        pass.setAttribute('disabled', 'disabled');
        pass.value = '';
    }

}
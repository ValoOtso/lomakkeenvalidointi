function validointi(){

    const id = document.getElementById('kid').value
    const salasana = document.getElementById('salasana').value
    const nimi = document.getElementById('nimi').value
    const osoite = document.getElementById('osoite').value
    const postinro = document.getElementById('postinro').value
    const email = document.getElementById('email').value

    document.getElementById('kidError').innerHTML = ''
    document.getElementById('salasanaError').innerHTML = ''
    document.getElementById('nimiError').innerHTML = ''
    document.getElementById('osoiteError').innerHTML = ''
    document.getElementById('postinroError').innerHTML = ''
    document.getElementById('emailError').innerHTML = ''
    document.getElementById('maaError').innerHTML = ''



    let isValid = true;

    if (id.length < 6){
        document.getElementById('kidError').innerHTML = 'ID:n tulee olla vähintään 6 merkkiä'
        isValid = false
    }

    if (salasana.indexOf('!')==-1 
    && salasana.indexOf('@')==-1 
    && salasana.indexOf('£')==-1 
    && salasana.indexOf('$')==-1 
    && salasana.indexOf('€')==-1 
    && salasana.indexOf('&')==-1 
    && salasana.indexOf('%')==-1 
    && salasana.indexOf('#')==-1
    || salasana.length < 6 
    || containsUppercase(salasana) == false 
    || containsNumber(salasana) == false){
        document.getElementById('salasanaError').innerHTML =
         'Salasanan tulee olla vähintään 6 merkkiä ja salasanan tulee sisältää joku erikoismerkeistä "!@£$€&%#" sekä vähintään yksi iso kirjain ja numero!'
        isValid = false
    }

    if (nimi.length < 1){
        document.getElementById('nimiError').innerHTML = 'Syötä nimi!'
        isValid = false
    }

    if (containsOnlyNumbers(postinro) == false){
        document.getElementById('postinroError').innerHTML = 'Postinumeron tulee olla 5 merkkiä ja sisältää ainoastaan numeroita!'
        isValid = false
    }

    if (document.getElementById('maa').value == 'mikamaa'){
        document.getElementById('maaError').innerHTML = 'Valitse maa!'
        isValid = false
    }

    if (osoite.length < 1){
        document.getElementById('osoiteError').innerHTML = 'Syötä osoite!'
        isValid = false
    }

    if (document.querySelector('input[name="sukupuoli"]:checked') === null){
        document.getElementById('sukupuoliError').innerHTML = 'Valitse sukupuoli!'
        isValid = false
    }
    if (document.querySelector('input[name="kieli"]:checked') == null){
        document.getElementById('kieliError').innerHTML = 'Valitse vähintään yksi kieli!'
        isValid = false
    }

    if (validE(email)==false){
        document.getElementById('emailError').innerHTML = 'Syötä sähköposti!'
        isValid = false
    }

    return isValid;
}

function containsUppercase(str) {
    return /[A-Z]/.test(str);
}

function containsNumber(str) {
    return /\d/.test(str);
}

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function validE(e) {
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
}
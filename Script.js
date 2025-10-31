function guessname(){
    var number = prompt("Введите число")
    var guessNumber = 31;
    if (number> guessNumber){
    alert("Ваше число больше")
        return guessname();
    }
    else if (number< guessNumber){
    alert("Ваше число меньше")
        return guessname();
    }
    else{
        return alert("Вы угадали!")
    }
}
//guessname();
function reminder(){
    alert("Вы слишком долго");
    window.close();
    window.location.href("");
}
//setTimeout(reminder,5000);


function validform(){
    var name = document.getElementById("name").value;
    console.log(name);
    var password = document.getElementById("password").value;
    console.log(password);
    var reg_name= /^[а-яёA-Z]+$/i;
    var reg_pass = /^[0-9A-Z]{5,100}$/i;
    if (reg_name.test(name) == false){
        alert("Вы ошиблись в ФИО")
    }
    if (reg_pass.test(password) == false){
        alert("Вы ошиблись в пароле")
    }
}

document.querySelector(".button").addEventListener("click", validform);
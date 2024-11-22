const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];

function vypis(array, output){
    let out_value = document.getElementById(output);
    for(let i = 0; i<array.length; i++){
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>";

    }
}


console.log(vypis(nabidka, "content"));
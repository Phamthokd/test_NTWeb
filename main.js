// 1.bắt sự kiện click btn_change
var btn = document.getElementById("btn_change")
btn.addEventListener('click',click_determine);
// 2.hàm xử lý sự kiện
function click_determine(){
    var select_animal = document.getElementById("select_animal");
    var option_animal = select_animal.options[select_animal.selectedIndex].value;
    var select_eat = document.getElementById("select_eat");
    var option_eat = select_eat.options[select_eat.selectedIndex].value;
    var select_feel = document.getElementById("select_feel");
    var option_feel = select_feel.options[select_feel.selectedIndex].value;
    var img = document.getElementById("img");
    
    console.log(select_animal)
    if(option_animal==select_animal.options[0].value && option_eat==select_eat.options[0].value && option_feel==select_feel.options[0].value){
        var tianw = document.getElementById("text_result");
        tianw.textContent = "You are Human";
        var teanw = document.getElementById("text_description");
        teanw.textContent = "Well, you look like a human";
        img.src ="./img/nguoi.jpg";
    }
    else if(option_animal==select_animal.options[2].value && option_eat==select_eat.options[2].value && option_feel==select_feel.options[2].value){
        var tianw = document.getElementById("text_result");
        tianw.textContent = "You are Alien";
        var teanw = document.getElementById("text_description");
        teanw.textContent = "Well, you look like a Alien";
        img.src ="./img/alien.jpg";
    }
    else{
        var tianw = document.getElementById("text_result");
        tianw.textContent = "you are truly bizarre person";
        var teanw = document.getElementById("text_description");
        teanw.textContent = "?????????????????";
        img.src ="./img/Bizarre.jpg";
    }
}
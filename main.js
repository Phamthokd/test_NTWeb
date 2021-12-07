let btn_change = document.getElementsByClassName("btn_change")
let title = document.getElementsByClassName("title")
let img = document.getElementsByClassName("img")
let txt_animal = document.getElementsByClassName("txt_animal")
btn_change.addEventListener("click", ham);

function ham(){
    let listanimal = ['Alien','Bizarre','normal'];
    let animal = txt_animal.value;
    let result =false;
    for(let i = 0; i<listanimal.length;i++)
        if(animal == listanimal[i]){
            result =true;
            break;
        }
    if(result== true){
        title.textContent = animal
    }

}
"use strict"
let btnLangEng = document.querySelector(".button-lang_Eng");
let btnLangRus = document.querySelector(".button-lang_Ru");
let array = {
    "strLangEng": ["one", "two", "three","four", "five"],
    "strLangRu": ["рад", "два", "три","четыре", "пять"],
}

const showArray = (i)=> {
    array[i].forEach(element => console.log(element));
    }
btnLangEng.addEventListener('click', ()=> {
    console.clear();
    showArray("strLangRu");
    });
btnLangRus.addEventListener('click', ()=> {
    console.clear();
    showArray("strLangEng");
    });
    

    



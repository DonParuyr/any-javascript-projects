// Смена темы ___________________________________________________________________________
const theme = document.querySelector('input');
let themeFlag = true;
theme.addEventListener('click', function() {
    if (!themeFlag) {
        document.querySelector('body').style.background = 'rgb(147 62 62)';
        themeFlag = true;
    } else{
        document.querySelector('body').style.background = '#222';
        themeFlag = false;
    }
}) //__________________________________________________________________________________



let totalPrice = 0; //нач значение корзины

const plus = document.querySelectorAll('button.plus');   // клик "+"
plus.forEach( button => {
    button.addEventListener('click', function() {

        const productCont = button.closest('.product'); //род. элемент плюса
        const price = +productCont.querySelector('.price').innerText.replace(' RUB', '');
        const result = document.getElementById('result');
        
        totalPrice += price;
        
        result.innerText = totalPrice;
        //получаем родительский элемент fruits
        
    })
})
const minus = document.querySelectorAll('button.minus');  // клик "-"
minus.forEach( button => {                           //    для всех minus   
    button.addEventListener('click', function() {    //    добавить обработчик события 'click' и исполнять по собтию функцию.
        const productCont = button.closest('.product'); // род. элемент плюса
        const price = +productCont.querySelector('.price').innerText.replace(' RUB', '');
        const result = document.getElementById('result');
        if (totalPrice === 0) {
            result.innerText = totalPrice;
        } else{
            totalPrice -= price;
        }
 
        result.innerText = totalPrice;  // задаем значение из totalPrice
        
    })
})
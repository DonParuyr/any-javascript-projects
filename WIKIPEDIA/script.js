// function rand() {
//     let bodyColor = Math.random().toFixed(6) * 1e6;
//     document.querySelector('body').style.backgroundColor = (`#${bodyColor}`);
//     document.querySelector('header').style.color = (`#${Math.random().toFixed(6) * 1e6}`);
//     document.querySelector('input').style.backgroundColor = (`#${bodyColor}`);
// }

function blackTheme(){
    document.getElementById('white').style.display = 'block';
    document.getElementById('black').style.display = 'none';

    let bodyColor = '#333';
    let txtColor = '#eee';
    document.querySelector('body').style.backgroundColor = (`${bodyColor}`);
    document.querySelector('header').style.color = (`${txtColor}`);
    document.querySelector('input').style.backgroundColor = (`#${bodyColor}`);

    document.querySelector('.person').style.color = 'white';
}
function whiteTheme(){
    document.getElementById('white').style.display = 'none';
    document.getElementById('black').style.display = 'block';

    let bodyColor = '#e7e7e7';
    let txtColor = '#ff7d7d';
    document.querySelector('body').style.backgroundColor = (`${bodyColor}`);
    document.querySelector('header').style.color = (`${txtColor}`);
    document.querySelector('input').style.backgroundColor = (`#${bodyColor}`);

    document.querySelector('.person').style.color = 'red';

}




let lang ='en';
let linkLanguage = 'Read More';
let resultsCounterOnlyNumber = '';
let linkFlag = 'true';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.search-box');
    const input = form.querySelector('input[type="search"]');
    const resultsContainer = document.querySelector('.results');
    const resultsCounter = document.querySelector('header p');
    resultsCounterOnlyNumber = +(resultsCounter.textContent).match('/\d+/');

    let enLang = document.getElementById('eng');
    enLang.addEventListener('click' , function(){
        languageRU();
        lang = 'ru';
        linkLanguage = 'Читать дальше';
    })
    let ruLang = document.getElementById('rus');
    ruLang.addEventListener('click' , function(){
        languageEN();
        lang = 'en';
        linkLanguage = 'Read More';
    })
    
    
    function languageEN(){
        document.getElementById('eng').style.display = 'block';
        document.getElementById('rus').style.display = 'none';

        document.querySelector('header h1').innerHTML = 'DON';
        document.querySelector('header h2').innerHTML = 'SEARCH';
        document.querySelector('header h2').style.fontSize = '50px';
        document.querySelector('header h2').style.marginTop = '0px';

        document.querySelector('input').placeholder = 'Your prompt';
        
    }
    function languageRU(){
        document.getElementById('rus').style.display = 'block';
        document.getElementById('eng').style.display = 'none';

        document.querySelector('header h1').innerHTML = 'ДОН';
        document.querySelector('header h2').innerHTML = 'ПОИСКОВИК';
        document.querySelector('header h2').style.fontSize = '31px';
        document.querySelector('header h2').style.marginTop = '19px';

        document.querySelector('input').placeholder = 'Введите ваш запрос';
    }

   
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = input.value;
        if (searchTerm) {
            searchWikipedia(searchTerm);
        }
    });
    
    function searchWikipedia(searchTerm) {
        const url = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=100&srsearch=${encodeURIComponent(searchTerm)}`;

        fetch(url).then(response => response.json()).then(data => {
            displayResults(data.query.search);
        }).catch(error => alert('Error : ' + error));
    }

    function displayResults(results) {
        
        resultsContainer.innerHTML = '';
        if (lang == 'en'){
            resultsCounter.innerHTML = `Results Count : ${results.length}`;
        }else if (lang == 'ru'){
            resultsCounter.textContent = `Результатов : ${results.length}`;
        }

        // resultsCounter.textContent = `Results Count : ${results.length}`;
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.innerHTML = `

            <h3>${result.title}</h3>
            <p>${result.snippet}</p>
            <a href="https://${lang}.wikipedia.org/?curid=${result.pageid}" target="_blank">${linkLanguage}</a>
            `;
            resultsContainer.appendChild(resultElement);


            flag = false;

        });
    }

});


















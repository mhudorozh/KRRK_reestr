var counter = 0;	//счетчик отмеченных чек-боксов

// Используется для переключения меню на маленьком экране при нажатии на иконку меню

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

//Раскрывает/скрывает блоки при нажатии на определенные элементы
//id - идентификатор div

function show_description(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
    
//Поиск в выпадающих списках фильтрации
//divStr - идентификатор div, в котором расположены теги "а", содержащие список для поиска
//inputStr - тег input, из которого считывается подстрока для поиска

function filter_search(divStr, inputStr) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(inputStr);
    filter = input.value.toUpperCase();
    div = document.getElementById(divStr);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

//Подсчет количества отмеченых чек-боксов и вывод в кружок
//checkbox - идентификатор checkbox, над которым совершилось дейсвтие (отметили/убрали галочку)
function handleChange(checkbox) {

	if(checkbox.checked == true) counter++; else counter--;
	
	if(counter > 0) document.getElementById("test").style.visibility = 'visible';
	else document.getElementById("test").style.visibility = 'hidden';

	document.getElementById("test").innerHTML = counter;
}

//Наложение слоя поверх основной страницы с описанием услуги при нажатиии
//на услугу в списке услуг
function on() {
    document.getElementById("overlay").style.display = "block";
    var body = document.body;
    body.classList.add('noscroll');

}

//Закрытие слоя с описанием услуги при нажатии на пустое место
function off() {
    document.getElementById("overlay").style.display = "none";
} 
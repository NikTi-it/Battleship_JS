//Логика для кораблей
var randomLoc = Math.floor((Math.random() * 5) + 1);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var emptyinput =/(?<![\.\d])\d+(?![\.\d])/; //Переменная для проверки пустого или некорректного ввода
var usedone = new Array(); //Массив для проверки повторной атаки в ячейку
while (isSunk == false) {
    guess = prompt("Привет! Это мини морской бой, в семи ячейках ООООООО (от одного до семи) спрятан вражеский трёхпалубный корабль OOO, нужно потопить его за меньшее количество попыток. Готовьсь, цельсь, пли! (Введи число 1-7):");
    if (guess == null) {
        (alert("Игра отменена, активировано самоуничтожение корабля, всего доброго!"));
        window.close();
        break; // Действия в случае нажатия отмены
    } else if (emptyinput.test(guess) == false) { //Проверка пустого или некорректного ввода
        alert("Пустой или некорректный ввод! Введи корректный номер ячейки!");
    } else if  (guess < 1 || guess > 7) {
        alert("Введи корректный номер ячейки!");
    } else if (usedone.includes(guess)) {
        alert("Сюды ты уже стрелял!");
    } else if (guess == null) {
        alert("Игра отменена, для повторного запуска обнови страницу");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попал!");
            hits = hits + 1;
            usedone.push(guess); // Добавление потопленной ячейки в массив
            if (hits == 3) {
                isSunk = true;
        	alert("Корабль потоплен!");
            }
        } else {
           alert("Мимо!");
        }
    }
}

if (isSunk == true) {
    var stats = "Использовано попыток для потопления корабля -  " + guesses +", " + "точность составляет " + Math.round(3/guesses*100)+"%! \n\nЧтобы сыграть снова обнови страницу.";
    alert(stats);}
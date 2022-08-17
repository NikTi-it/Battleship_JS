//Логика для кораблей
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var emptyinput = /^[0-9]/; //Переменная для проверки пустого или некорректного ввода
var usedone = new Array(); //Массив для проверки повторной атаки в ячейку
while (isSunk == false) {
    guess = prompt("Привет! Это мини морской бой, в семи ячейках ООООООО (от нуля до шести) спрятан вражеский трёхпалубный корабль OOO, нужно потопить его за меньшее количество попыток. Готовьсь, цельсь, пли! (Введи числов 0-6):");
    if (emptyinput.test(guess) == false) { //Проверка пустого или некорректного ввода
        alert("Пустой или некорректный ввод! Введи корректный номер ячейки!");
    } else if  (guess < 0 || guess > 6) {
        alert("Введи корректный номер ячейки!");
    } else if (usedone.includes(guess)) {
        alert("Сюды ты уже стрелял!");
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

var stats = "Использовано попыток для потопления корабля -  " + guesses +", " + "точность составляет " + Math.round(3/guesses*100)+"%";
alert(stats);
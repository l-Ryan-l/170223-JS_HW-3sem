/* 
Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать 
введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту 
и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8

Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые

были получены ранее.

Формула перевода градусов Цельсия в градусы Фаренгейта:

градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
*/

const tempCelcius = Number.parseFloat(prompt("Введите температуру в Цельсиях"));
let tempFahr = convertCToF(tempCelcius);
convertCToF(tempCelcius);
alert(`${tempCelcius} градусов по Цельсию, равно ${Math.round(tempFahr * 100) / 100} градусов по Фаренгейту.`);

function convertCToF(tempCelsius) {
    return 1.8 * tempCelcius + 32;    
}


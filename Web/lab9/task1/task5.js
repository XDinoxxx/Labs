function getFutureDayOfWeek(date, k) {
    var daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var futureDate = new Date(date.getTime() + k * 24 * 60 * 60 * 1000);
    var futureDayOfWeek = futureDate.getDay();
    return daysOfWeek[futureDayOfWeek];
}
var currentDate = new Date();
var k = 7;
var futureDayOfWeek = getFutureDayOfWeek(currentDate, k);
console.log(futureDayOfWeek);

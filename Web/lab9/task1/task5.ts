function getFutureDayOfWeek(date: Date, k: number): string {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const futureDate = new Date(date.getTime() + k * 24 * 60 * 60 * 1000);
    const futureDayOfWeek = futureDate.getDay();
  
    return daysOfWeek[futureDayOfWeek];
  }
  
  const currentDate = new Date();
  const k = 7; 
  
  const futureDayOfWeek = getFutureDayOfWeek(currentDate, k);
  console.log(futureDayOfWeek); 
  
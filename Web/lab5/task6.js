function sortDates(dates) {
    dates.sort(function(a, b) {
      return new Date(a) - new Date(b);
    });
    return dates;
  }
  
  // Пример использования
  var dateArray = ['2042-01-01', '222-12-01', '2022-03-14', '2022-04-01'];
  console.log(sortDates(dateArray)); 
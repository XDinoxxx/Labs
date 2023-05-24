// определяем объект-калькулятор
var calculator = {
  currentValue: '0',
  operator: "",
  memoryValue: "",
  newNumber: true,
  isDecimal: false,

  // добавление цифры
  addDigit: function (digit) {
    if (this.newNumber) {
      this.currentValue = digit;
      this.newNumber = false;
    }
    else if (this.currentValue == "0") {
      this.currentValue = digit;
    }
    else {
      this.currentValue += digit;
    }
    this.updateDisplay();
  },

  // добавление десятичной запятой
  addDecimalPoint: function() {
    this.newNumber = false;
    if (!this.isDecimal) {
      this.currentValue += ".";
      this.isDecimal = true;
    }
    this.updateDisplay();
  },

  // смена знака текущего числа
  negate: function () {
    if (this.currentValue != "0") {
      if (this.currentValue[0] == "-") {
        this.currentValue = this.currentValue.substr(1);
      }
      else {
        this.currentValue = "-" + this.currentValue;
      }
      this.updateDisplay();
    }
  },

  // вычисление обратного значения текущего числа
  inverse: function () {
    var value = parseFloat(this.currentValue);
    if (value != 0) {
      this.currentValue = 1 / value;
      this.updateDisplay();
    }
    else {
      this.currentValue = "Ошибка";
      this.newNumber = true;
      this.isDecimal = false;
    }
  },

  // вычисление квадратного корня из текущего числа
  sqrt: function () {
    var value = parseFloat(this.currentValue);
    if (value >= 0) {
      this.currentValue = Math.sqrt(value);
      this.updateDisplay();
    }
    else {
      this.currentValue = "Ошибка";
      this.newNumber = true;
      this.isDecimal = false;
    }
  },

  // вычисление процента от текущего числа
  percent: function () {
    var value = parseFloat(this.currentValue);
    if (value != 0) {
      this.currentValue = value / 100;
      this.updateDisplay();
    }
  },

  // добавление оператора (+-*/)
  addOperator: function (operator) {
    this.calculate();
    this.operator = operator;
    this.memoryValue = this.currentValue;
    this.newNumber = true;
    this.isDecimal = false;
  },

  // очистка текущего значения
  clearEntry: function () {
    this.currentValue = Number("0");
    this.newNumber = true;
    this.isDecimal = false;
    this.updateDisplay();
  },

  // очистка калькулятора
  clear: function () {
    this.currentValue = Number("0");
    this.operator = "";
    this.memoryValue = "";
    this.newNumber = true;
    this.isDecimal = false;
    this.updateDisplay();
  },

  // удаление последней цифры
  backspace: function () {
    if (this.currentValue.length > 1) {
      this.currentValue = this.currentValue.slice(0, -1);
    }
    else {
      this.currentValue = "0";
    }
    if (this.currentValue.indexOf(".") == -1) {
      this.isDecimal = false;
    }
    this.updateDisplay();
  },

  // вычисление результата
  calculate: function () {
    if (this.operator != "") {
      var currentValueFloat = parseFloat(this.currentValue);
      var memoryValueFloat = parseFloat(this.memoryValue);
      switch (this.operator) {
        case "+":
          this.currentValue = memoryValueFloat + currentValueFloat;
          break;
        case "-":
          this.currentValue = memoryValueFloat - currentValueFloat;
          break;
        case "*":
          this.currentValue = memoryValueFloat * currentValueFloat;
          break;
        case "/":
          if (currentValueFloat == 0) {
            this.currentValue = "Ошибка";
          }
          else {
            this.currentValue = memoryValueFloat / currentValueFloat;
          }
          break;
      }
      this.operator = "";
      this.memoryValue = "";
      this.newNumber = true;
      this.isDecimal = false;
      this.updateDisplay();
    }
  },

  // обновление дисплея калькулятора
  updateDisplay: function () {
    document.getElementById("display").value = this.currentValue;
  }
};
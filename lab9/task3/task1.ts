class Integer {
  _value!: number;
  @IsInt
  set value(value: any) {
    this._value = value;
  }

  @positivenumber
  sqrt() {
    console.log(Math.sqrt(this._value));
  }
}

function IsInt<This, Return>(
  target: (this: This, arg: any) => Return,
  context: ClassSetterDecoratorContext<This>
) {
  console.log("Set method");
  return function (this: This, arg: any) {
    console.log(!Number.isInteger(arg));

    if (!Number.isInteger(arg)) {
      // console.log("ne 4islo");
      // return;
      throw new Error("Не integer");
    }
    const res = target.call(this, arg);
    return res;
  };
}

function positivenumber<This extends Integer, Return>(
  target: (this: This) => void,
  context: ClassMethodDecoratorContext<This, (this: This) => Return>
) {
  const originalMethod = target;
  target = function () {
    if (this._value > 0) {
      originalMethod.call(this);
    } else {
      console.log(`${this._value} <= 0`);
    }
  };
  return target;
}

const num = new Integer();
num.value = -9;
num.sqrt();

const num2 = new Integer();
num.value = 4;
num.sqrt();
//console.log(num.value);

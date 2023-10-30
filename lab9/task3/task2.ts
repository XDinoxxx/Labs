class User {
  nickname: string;
  role: string;
  constructor(nickname: string, role: string) {
    this.nickname = nickname;
    this.role = role;
  }
  @adminOnly
  first_print() {
    console.log("Я все могу");
  }
  second_print() {
    console.log("Я не все могу");
  }
}

function adminOnly<This extends User, Return>(
  target: (this: This) => void,
  context: ClassMethodDecoratorContext<This, (this: This) => Return>
) {
  const originalMethod = target;
  target = function () {
    if (this.role === "admin") {
      originalMethod.call(this);
    } else {
      console.log("Недостаточно прав");
    }
  };
  return target;
}

const user1 = new User("Helgard", "customer");
const user2 = new User("Levante", "admin");

user1.first_print();
user1.second_print();
user2.first_print();
user1.second_print();

// 实现一个类-能够链式调用person.talk('hello').sleep(3000).talk('world')

// function Person() {
//   this.talk = function(str) {
//     console.log(str);
//     return this;
//   };
//   this.sleep = function(time) {
//     setTimeout(()=>{},3000)
//   }
// }
class Person {
  constructor() {
    this.tasks = [];
    this.tasks.push(() => {
      this.then();
    });
    setTimeout(() => {
      this.then();
    })
  }
  talk(str) {
    this.tasks.push(() => {
      console.log(str);
      this.then();
    })
    return this;
  }
  sleep(time) {
    this.tasks.push(() => {
      console.log('sleep' + time + 'ms');
      setTimeout(() => {
        this.then();
      }, time)
    });
    return this;
  }
  then() {
    let task = this.tasks.shift();
    task && task();
    return this;
  }
}

// let person = new Person();
// person.talk('hello').sleep(3000).talk('world');

// console.log('++++++++++++++++++++');
// setTimeout(() => {
//   console.log(1);
// },0)
// console.log(2);
// new Promise(res => {
//   res(console.log(3))
//   console.log(4);
// }).then(() => {
//   console.log(5);
// })
(async () => console.log(8))();
let p = new Promise((res, rej) => {
  res(console.log(5))
  console.log(2);
  console.log(3);
  res(console.log(4));
  rej(console.log(7))
  setTimeout(() => {
    console.log(6);
  })
});
p.then(() => {
  console.log(1);
});

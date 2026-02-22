// function add(a,b){
//     console.log(a+b);
// }

// function addNum(a,b){
//     return a+b;
// }

// const addNum = (a,b)=> a+b;

// const greet = x => "Hello World" + x;

// let num3 = 100;

// const addNum = (num1,num2) => {
//     console.log(num3);
//     const user = "foobar";

//     let num4 = 200;
//     return num1+num2;
// }

// console.log(num3);
// console.log(num4);
// console.log(addNum(2,3));

// const timer = {
//     seconds: 0,
//     start: function(){
//         setInterval(function(){
//             this.seconds++;
//             console.log(this.seconds);
//         }, 1000)
//     }
// }

const timer = {
  seconds: 0,
  start: function () {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  },
};

timer.start();

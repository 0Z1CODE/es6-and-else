// function *foo(){
//   yield console.log(Math.random());
//   yield console.log(12)
// }

// function *foo () {
//   yield 1
//   yield 2
//   yield 3
//   return 4
// }

// function *bar() {
//   let x = yield *foo()
//   console.log("x", x);
// }

// for (let v of bar()) {
//   console.log(v);
// }

// function* foo() {
//   yield* [1, 2, 3];
// }

//requrssion
// function *foo(x) {
//   if(x < 3) {
//     x = yield *foo(x+1)
//   }
//   console.log(x *2);
//  return x * 2;
 
// } 

// //?!#
// function *foo() {
//   yield 1
//   yield 2
//   yield 3
// }

// // for (let v of foo()) {
// //   console.log(v);
// // }



// let it = foo();
// console.log(it.next());
// console.log(it.next("aaa"));
// console.log(it.next("ccc"));
// console.log(it.next("ccc"));


//?!#
// let a 
// function *foo() {
//   try {
//     yield console.log(122)
//     yield console.log(12)

//   } finally  {
//     console.log("clean iterations ");
//   }
// }

// let it = foo();

// it.next()
// it.return(a = "returned")
// it.next()
// console.log(a)


//?!#
//exm
// function *foo() {
//   let x = yield 42
//   console.log(x);
// }


function foo() {
  return{
    next: function(v) {
      
    }
  }
}





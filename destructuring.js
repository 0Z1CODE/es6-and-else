// {
//   let o1 = { a: 1, b: 2, c: 3 },
//     a2 = [];
//   ({ a: a2[0], b: a2[1], c: a2[2] } = o1);
//   // console.log(a2); //[1,2,3]
// }
// //equel
// {
//   let obj = { a: 1, b: 2, c: 3 };
//   let arr = Object.values(obj);
//   // console.log(arr);
// }

{
  let x = 10, y = 20
  console.log(x,y); //10, 20
  [y,x] = [x,y]
  console.log(x,y);// 20,10

}
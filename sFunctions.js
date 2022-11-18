{
  let arr = Array(12); //[ <12 empty items> ]
  console.log(arr);
  console.log(arr.length); // 12
  arr[3] = 12;
  console.log(arr); //[ <3 empty items>, 12, <8 empty items> ]
}
//Array.of
{
  let arr = Array.of(12);
  console.log(arr); //12
  console.log(arr.length); // 1
}
// Array.from
{
  let arrLike = {
    length: 5,
    0: "foo",
    1: "bar"
  }
  let arr = Array.prototype.slice.call(arrLike)
  console.log(arr) //[ 'foo', 'bar', <1 empty item> ]

  let arrNew = Array.from(arrLike)
  console.log(arrNew);  [ 'foo', 'bar', undefined ]

  let s = new Set([12,34,"43"])
  console.log(Array.from(s))

 const cbArray =  Array.from(arrLike,  (val, idx) =>  {
    if (typeof val == "string" ) {
     return val.toLocaleUpperCase()
    }
    else return idx
  } )

  console.log(cbArray);

  let arr2 = Array.from(arr)

  console.log(arr2 === arr)

}
//copyWithin
{
let arr = [1,2,3,4,5]
console.log(arr.copyWithin(3,0));
console.log(arr.copyWithin(3,1));
}

{

let obj = {
  foo: 42,
  [Symbol("bar")]: "hello",
  baz: true
}

console.log(Object.getOwnPropertySymbols(obj));

}


Object.setPrototypeOf
{
  let obj1 = {
    foo() {
      console.log("foo23");
    },
    calc(x, y) {
      console.log(x + y);
    },
  };
  let obj2 = {};

  let obj3 = Object.setPrototypeOf({}, obj1);

  Object.setPrototypeOf(obj2, obj1);

  obj3.calc(12, 24);
  obj2.calc(12, 4);
}

 {
  let target = {some: "let"}, o1 = {a: 1}, o2= {b:2}, o3={c:3}
  Object.assign(target,o1, o2,o3)
  console.log(target);

 }

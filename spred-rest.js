{
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(...arr);
}

{
  let arr = [2, 3, 4];
  let arr2 = [1, ...arr, 5, 6];
  console.log(...arr2);
}

{
  let foo = (a, b, ...c) => {
    console.log(a, b, c);
    console.log("c", c);
  };
  foo(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

{
  let foo = (...args) => {
    console.log(args);
  };
  foo(1, "lol", { a: 12 }, [1, 2, 3], undefined);
}

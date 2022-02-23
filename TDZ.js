{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a;
}

{
  console.log(typeof a); // undefined
  //let no init in this block scope
}

{
  console.log(typeof a); //ReferenceError: Cannot access 'a' before initialization
  let a

}



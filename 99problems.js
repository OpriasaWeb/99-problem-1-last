// Kata: 99 problems, 1 last in list


// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null

function last(xs){
  if(xs.length > 0){
    return xs.pop() // pop is used to removes the last elements and returns the removed array
  } else{
    return null
  }
}

console.log(last([1, 2, 3]));
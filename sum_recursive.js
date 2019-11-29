const sumItems = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log("current element",arr[i])
    if (!Array.isArray(arr[i])) {
      total = total + arr[i]//for loop?

    }else{
      console.log(total)
      total =  total + sumItems(arr[i])//?
      console.log(total)
  }
}
return total};
console.log(sumItems([1, 2,[3, 4], 5]))
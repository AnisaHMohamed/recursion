function printItems(array) {
  for (item of array) {
    if (Array.isArray(item)) {
      //console.log(item)
      printItems(item)
    } else {
      console.log(item)
    }
  }
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);
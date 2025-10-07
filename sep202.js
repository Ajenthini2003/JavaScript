function printRange(array, start, end) {
  if (start < 0 || end >= array.length || start > end) {
    console.log("Invalid range");
    return;
  }

  for (let i = start; i <= end; i++) {
    console.log(array[i]);
  }
}




function addAnElement(array, index, element) {
  if (index < 0 || index > array.length) {
    console.log("Invalid index");
    return array;
  }

  array.splice(index, 0, element); // (start, deleteCount, item)
  return array;
}

//4.
function printRange(array, start, end) {
  if (start < 0 || end >= array.length || start > end) {
    console.log("Invalid range");
    return;
  }

  for (let i = start; i <= end; i++) {
    console.log(array[i]);
  }
}

//5.
function addLeast(array, element) {
  array.push(element);  // push() → adds to end
  return array;
}


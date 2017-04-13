var numArr = [];

// Adds input numbers to an array
function addToArr() {
  var number = document.getElementById("newnumber").value;
  numArr.push(number);
  console.log(JSON.stringify(numArr));  
}
  
function calculate() {
  // Gets the length of the array for "count"
  var count = numArr.length;
  console.log("Count: " + count);
  
  
  // Calculates the sum of the numbers in the array  
  var sum = 0;
  for (var i = 0; i < numArr.length; i++){
    sum += parseFloat(numArr[i]);
    console.log("Sum: " + sum);  
  }
  
  
  // Calculates the average of the numbers in the array
  var avg = sum / numArr.length;
  console.log("Average: " + avg);
  
  
  // Prints the results in the div
  document.getElementById("count").innerHTML = "Count: " + count;
  document.getElementById("sum").innerHTML = "Sum: " + sum.toFixed(2);
  document.getElementById("average").innerHTML = "Average: " + avg.toFixed(2);
  event.preventDefault(); 
}


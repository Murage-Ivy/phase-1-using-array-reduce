const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(
  (accumulator, batteryBatch) => batteryBatch + accumulator
);

function myReducer(arr, reducer, initalValue) {
  let accum = initalValue;
  for (const element of arr) {
    accum = reducer(accum, element);
  }
  return accum;
}

function batteryCounter(totalAmount, battery) {
  return totalAmount + battery;
}

let totalBatteriess = myReducer(batteryBatches, batteryCounter, 0);
console.log(totalBatteriess);
console.log(totalBatteries);
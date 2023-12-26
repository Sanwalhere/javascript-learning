//--------------------------------------------------|Calculate Grade Function|-----------------------------------------------

const data = [890, 54, 96];

function calculateGrade(marks) {
  const avg = calculateAvg(marks);

  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}

function calculateAvg(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) total += array[i];
  return Math.floor(total / 3);
}
console.log(calculateGrade(data));

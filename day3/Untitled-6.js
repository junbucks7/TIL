const a = 5;

for (let i = 1; i <= a; i++) {
  let sum = "";
  for (let j = 1; j <= a - i; j++) {
    sum = sum + " ";
  }
  for (let k = 1; k <= i; k++) {
    sum = sum + "*";
  }
  console.log(sum);
}

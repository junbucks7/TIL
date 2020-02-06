const a = 5;

for (let i = 1; i <= a; i++) {
  let sum = "";
  for (let j = 1; j <= i; j++) {
    sum = sum + "*";
  }
  console.log(sum);
}

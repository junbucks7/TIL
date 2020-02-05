const A = 1900;

if (A % 4 === 0 && A % 400 === 0) {
  console.log("1");
} else if (A % 4 === 0 && A % 100 === 0) {
  console.log("0");
}

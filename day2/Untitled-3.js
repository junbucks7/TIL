const A = 20;
const B = 20;
const C = 20;

if (A >= B && A >= C) {
  if (B >= C) {
    console.log(B);
  } else if (C >= B) {
    console.log(C);
  }
} else if (B >= A && B >= C) {
  if (A >= C) {
    console.log(A);
  } else if (C >= A) {
    console.log(C);
  }
} else if (C >= A && C >= B) {
  if (A >= B) {
    console.log(A);
  } else if (B > A) {
    console.log(B);
  }
}

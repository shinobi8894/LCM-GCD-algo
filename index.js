function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// Function to return LCM of two numbers
function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

// Driver program to test above function

let a = 15,
  b = 20;
document.write("LCM of " + a + " and " + b + " is " + lcm(a, b));

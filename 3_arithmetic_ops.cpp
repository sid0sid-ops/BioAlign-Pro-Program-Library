// W.A.P. to demo Binary Operators
/*
Program Name: Arithmetic operations
Description: Basic math (+, -, *, /, %) operations in C++.
Concepts Used: Binary Operators
*/

#include <iostream>
using namespace std;
int main() {
  int a, b;
  cout << "Enter two values: ";
  cin >> a >> b;
  cout << "Sum: " << a + b << "\nDiff: " << a - b;
  cout << "\nMul: " << a * b << "\nDiv: " << (b != 0 ? a / b : 0);
  cout << "\nMod: " << (b != 0 ? a % b : 0) << endl;
  return 0;
}

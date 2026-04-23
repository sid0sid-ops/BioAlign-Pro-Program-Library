// W.A.P. to perform basic arithmetic operations
/*
Algorithm:
Step 1: Start
Step 2: Read two numbers
Step 3: Perform +, -, *, /, % and print
Step 4: End

Program Name: Arithmetic Ops
Description: Basic math calculator
Concepts Used: Operators
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

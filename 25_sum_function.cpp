// W.A.P. to calculate sum using function
/*
Algorithm:
Step 1: Start
Step 2: Define function sum(a, b)
Step 3: return a+b
Step 4: End

Program Name: Function Sum
Description: Abstract addition inside function
Concepts Used: user defined functions
*/
#include <iostream>
using namespace std;

int getSum(int a, int b) {
    return a + b;
}

int main() {
    cout << "Sum is: " << getSum(3, 4) << endl;
    return 0;
}

// W.A.P. to demo Function Basics
/*
Program Name: Sum using function
Description: Encapsulating code into reusable blocks that accept parameters and return values.
Concepts Used: Function Basics
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

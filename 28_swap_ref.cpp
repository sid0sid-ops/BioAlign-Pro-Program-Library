// W.A.P. to demo Pass by Reference
/*
Program Name: Swap (Call by Reference)
Description: Passing memory addresses (&) so functions can modify original variables.
Concepts Used: Pass by Reference
*/

#include <iostream>
using namespace std;

// Function declaration (using pointers for call by reference)
void ChangeVal(int *x, int *y);

int main() {
    int a = 10;
    int b = 20;

    cout << "Before swapping: a = " << a << ", b = " << b << endl;

    // Passing the addresses of a and b (Actual Parameters)
    ChangeVal(&a, &b);

    cout << "After swapping:  a = " << a << ", b = " << b << endl;
    return 0;
}

// Function definition
void ChangeVal(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

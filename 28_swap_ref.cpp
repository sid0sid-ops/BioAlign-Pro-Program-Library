// W.A.P. to swap values using Call by Reference (Pointers)
/*
Algorithm:
Step 1: Start
Step 2: Initialize a=10, b=20
Step 3: Pass addresses (&a, &b) to ChangeVal()
Step 4: Inside ChangeVal, dereference pointers and swap
Step 5: Original values are permanently modified. End

Program Name: Swap - Call by Reference (Pointers)
Description: Passes address of variables to a function so it can
             permanently modify them using pointer dereferencing.
Concepts Used: pointers, call by reference, dereferencing
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

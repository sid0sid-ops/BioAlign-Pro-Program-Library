// W.A.P. to demo Memory Addresses
/*
Program Name: Pointer basics
Description: Introduction to pointers (*), dereferencing, and the address-of operator (&).
Concepts Used: Memory Addresses
*/

#include <iostream>
using namespace std;

int main() {
    int val = 10;
    int *ptr = &val;
    cout << "Address: " << ptr << ", Value: " << *ptr << endl;
    return 0;
}

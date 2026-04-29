// W.A.P. to demo Pointer Arithmetic
/*
Program Name: Add numbers via pointers
Description: Using pointers to indirectly access and sum distinct memory locations.
Concepts Used: Pointer Arithmetic
*/

#include <iostream>
using namespace std;

int main() {
    int a=5, b=6;
    int *p1=&a, *p2=&b;
    cout << "Sum: " << *p1 + *p2 << endl;
    return 0;
}

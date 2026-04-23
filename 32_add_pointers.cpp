// W.A.P. to add two numbers using pointers
/*
Algorithm:
Step 1: Start
Step 2: Assign pointers to a & b
Step 3: sum = *ptrA + *ptrB
Step 4: End

Program Name: Pointers Addition
Description: Accesses values directly from memory
Concepts Used: pointer dereference arithmetic
*/
#include <iostream>
using namespace std;

int main() {
    int a=5, b=6;
    int *p1=&a, *p2=&b;
    cout << "Sum: " << *p1 + *p2 << endl;
    return 0;
}

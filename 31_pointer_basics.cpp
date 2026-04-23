// W.A.P. to demo pointer basics
/*
Algorithm:
Step 1: Start
Step 2: Declare var and ptr=&var
Step 3: Print address & ptr, value *ptr
Step 4: End

Program Name: Pointer Basics
Description: Intro to memory pointers
Concepts Used: pointers, dereference
*/
#include <iostream>
using namespace std;

int main() {
    int val = 10;
    int *ptr = &val;
    cout << "Address: " << ptr << ", Value: " << *ptr << endl;
    return 0;
}

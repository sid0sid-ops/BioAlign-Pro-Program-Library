// W.A.P. to display first 10 terms of Fibonacci series using for loop
/*
Algorithm:
Step 1: Start
Step 2: Initialize a=0, b=1
Step 3: For i=1 to 10: print a, next=a+b, a=b, b=next
Step 4: End

Program Name: Fibonacci 10 Terms (for)
Description: Generates and displays the first 10 indices of the Fibonacci sequence using a for loop.
Concepts Used: for loops, iteration
*/
#include <iostream>
using namespace std;

int main() {
    int a = 0, b = 1, next;
    cout << "Fibonacci series (First 10 terms): \n";
    for(int i=0; i<10; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
    return 0;
}

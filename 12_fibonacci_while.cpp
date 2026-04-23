// W.A.P. to display first 10 terms of Fibonacci series using while loop
/*
Algorithm:
Step 1: Start
Step 2: Initialize a=0, b=1, count=10
Step 3: While count > 0: print a, next=a+b, a=b, b=next, count--
Step 4: End

Program Name: Fibonacci 10 Terms (while)
Description: Generates and displays the first 10 indices of the Fibonacci sequence using a while loop.
Concepts Used: while loops, iteration
*/
#include <iostream>
using namespace std;

int main() {
    int count = 10, a = 0, b = 1, next;
    cout << "Fibonacci series (First 10 terms): \n";
    while(count > 0) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
        count--;
    }
    cout << endl;
    return 0;
}

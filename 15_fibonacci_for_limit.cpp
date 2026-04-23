// W.A.P. to display Fibonacci series under number 10 using for loop
/*
Algorithm:
Step 1: Start
Step 2: Initialize a=0, b=1
Step 3: Use for loop with no fixed count: print a, next=a+b, a=b, b=next. Break if a >= 10.
Step 4: End

Program Name: Fibonacci Under 10 (for)
Description: Generates and displays all Fibonacci numbers whose value is strictly less than 10 using a for loop.
Concepts Used: for loops, break statements
*/
#include <iostream>
using namespace std;

int main() {
    int a = 0, b = 1, next;
    cout << "Fibonacci series (Under value 10): \n";
    for(;;) {
        if(a >= 10) break;
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
    return 0;
}

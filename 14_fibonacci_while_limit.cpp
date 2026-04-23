// W.A.P. to display Fibonacci series under number 10 using while loop
/*
Algorithm:
Step 1: Start
Step 2: Initialize a=0, b=1
Step 3: While a < 10: print a, next=a+b, a=b, b=next
Step 4: End

Program Name: Fibonacci Under 10 (while)
Description: Generates and displays all Fibonacci numbers whose value is strictly less than 10 using a while loop.
Concepts Used: while loops, conditional boundaries
*/
#include <iostream>
using namespace std;

int main() {
    int a = 0, b = 1, next;
    cout << "Fibonacci series (Under value 10): \n";
    while(a < 10) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
    return 0;
}

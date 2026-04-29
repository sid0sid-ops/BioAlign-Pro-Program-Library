// W.A.P. to demo Value Boundaries
/*
Program Name: Fibonacci Under 10 (while)
Description: Generates all Fibonacci numbers strictly less than 10 using a while loop.
Concepts Used: Value Boundaries
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

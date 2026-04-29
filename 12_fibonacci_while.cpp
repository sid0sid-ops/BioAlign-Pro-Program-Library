// W.A.P. to demo While Loops
/*
Program Name: Fibonacci 10 Terms (while)
Description: Generates and displays the first 10 terms of the Fibonacci sequence using a while loop.
Concepts Used: While Loops
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

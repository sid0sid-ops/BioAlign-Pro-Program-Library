// W.A.P. to demo For Loops
/*
Program Name: Fibonacci 10 Terms (for)
Description: Generates and displays the first 10 terms of the Fibonacci sequence using a for loop.
Concepts Used: For Loops
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

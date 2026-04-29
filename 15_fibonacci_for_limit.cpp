// W.A.P. to demo Bounded Iteration
/*
Program Name: Fibonacci Under 10 (for)
Description: Generates all Fibonacci numbers strictly less than 10 using a for loop.
Concepts Used: Bounded Iteration
*/

#include <iostream>
using namespace std;

int main() {
    int next;
    cout << "Fibonacci series (Under value 10): \n";
    
    // Simple conditional iteration matching exact bounds 
    for(int a = 0, b = 1; a < 10; ) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    
    cout << endl;
    return 0;
}

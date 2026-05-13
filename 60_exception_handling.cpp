// W.A.P. to demo Try, Catch, Throw
/*
Program Name: Exception handling (div by 0)
Description: Safely catching dangerous runtime errors (like division by zero) without crashing the program.
Concepts Used: Try, Catch, Throw
*/

#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 0;

    try {
        if (b == 0)
            throw b;   // throwing error

        cout << "Result: " << a / b << endl;
    }
    catch (int x) {
        cout << "Error: Division by zero!" << endl;
    }

    return 0;
}

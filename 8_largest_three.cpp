// W.A.P. to demo Nested Conditionals
/*
Program Name: Largest among three
Description: Using logical AND (&&) to compare multiple variables simultaneously.
Concepts Used: Nested Conditionals
*/

#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20, c = 3;

    if ((a > b) && (a > c)) {
        cout << "a is greatest: " << a << endl;
    }
    else if ((b > a) && (b > c)) {
        cout << "b is greatest: " << b << endl;
    }
    else {
        cout << "c is greatest: " << c << endl;
    }

    return 0;
}

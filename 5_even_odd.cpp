// W.A.P. to demo Modulo Arithmetic
/*
Program Name: Even or Odd check
Description: Checking remainders with the modulo operator (%) and an if-else block.
Concepts Used: Modulo Arithmetic
*/

#include <iostream>
using namespace std;

int main() {
    int i = 9;

    if (i > 0) {
        cout << "The number " << i << " is positive." << endl;
        if (i % 2 == 0) {
            cout << "The number " << i << " is even." << endl;
        } else {
            cout << "The number " << i << " is odd." << endl;
        }
    } else {
        cout << "The number " << i << " is negative." << endl;
    }

    return 0;
}

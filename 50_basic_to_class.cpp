// W.A.P. to demo Type Conversion
/*
Program Name: Basic-to-class conversion
Description: Using overloaded constructors to implicitly convert an `int` or `float` into a complex Class object.
Concepts Used: Type Conversion
*/

#include <iostream>
using namespace std;

class Time {
    int hr, min;
public:
    // conversion constructor
    Time(int t) {
        hr = t / 60;
        min = t % 60;
    }
    void show() { cout << hr << "h " << min << "m\n"; }
};

int main() {
    Time t = 130;  // integer converting to class type implicitly
    t.show();
    return 0;
}

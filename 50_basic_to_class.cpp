// W.A.P. to convert basic data type to class type
/*
Algorithm:
Step 1: Start
Step 2: Define Time class with (hours, minutes)
Step 3: Overload constructor to take int totalMinutes
Step 4: Create object with Time t = 130
Step 5: End

Program Name: Basic to Class Conversion
Description: Int to object conversion
Concepts Used: Constructor overloading, type conversion
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

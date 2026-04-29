// W.A.P. to demo Complex Boolean Logic
/*
Program Name: Leap year check
Description: Handling multple conditions (divisible by 4, not 100, unless 400).
Concepts Used: Complex Boolean Logic
*/

#include <iostream>
using namespace std;
int main() {
    int year;
    cout << "Enter year: ";
    cin >> year;
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        cout << year << " is a Leap Year.\n";
    } else {
        cout << year << " is not a Leap Year.\n";
    }
    return 0;
}

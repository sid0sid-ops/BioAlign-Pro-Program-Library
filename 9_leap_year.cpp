// W.A.P. to check leap year
/*
Algorithm:
Step 1: Start
Step 2: Input year
Step 3: If divisible by 400 or (divisible by 4 and not 100), leap year
Step 4: End

Program Name: Leap Year
Description: Date validation
Concepts Used: Logical operators
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

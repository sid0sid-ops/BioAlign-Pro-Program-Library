// W.A.P. to check Even/Odd using Nested If-Else
/*
Algorithm:
    Step1: Start
    Step2: Read/Input a number and store in A
    Step3: Is A < 0? 
           If YES then C = "ODD"
           If NO then C = "even"
    Step4: Display C
    Step5: Stop

Program Name: Nested If-Else (Even/Odd/Positive/Negative)
Description: Uses a nested if-else structure to first check if a
             number is positive or negative, then if positive,
             further checks if it is even or odd.
Concepts Used: nested if-else, modulo operator
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

// W.A.P. to find the largest number using Else-If Ladder
/*
Algorithm:
Step 1: Start
Step 2: Initialize a=10, b=20, c=3
Step 3: If a > b AND a > c -> a is greatest
Step 4: Else if b > a AND b > c -> b is greatest
Step 5: Else -> c is greatest. End

Program Name: Else-If Ladder (Largest of Three)
Description: Uses a clean else-if ladder structure with logical AND
             to determine which of three numbers is the greatest.
Concepts Used: else-if ladder, logical AND (&&)
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

// W.A.P. to check Armstrong number
/*
Algorithm:
Step 1: Start
Step 2: Input n. Store copy.
Step 3: Sum cubes of each digit.
Step 4: If sum == copy, it's Armstrong.
Step 5: End

Program Name: Armstrong Number
Description: Checks if sum of cubes of digits equals number
Concepts Used: arithmetic operators, while loop
*/
#include <iostream>
using namespace std;
int main() {
    int n, num, digit, sum = 0;
    cout << "Enter a pos integer: ";
    cin >> n;
    num = n;
    while(num != 0) {
        digit = num % 10;
        sum += digit * digit * digit;
        num /= 10;
    }
    if(sum == n) cout << n << " is Armstrong.\n";
    else cout << n << " is Not Armstrong.\n";
    return 0;
}

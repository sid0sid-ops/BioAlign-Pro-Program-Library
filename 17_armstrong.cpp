// W.A.P. to demo Digit Extraction
/*
Program Name: Armstrong number
Description: Using modulo 10 and division to process a number digit-by-digit.
Concepts Used: Digit Extraction
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

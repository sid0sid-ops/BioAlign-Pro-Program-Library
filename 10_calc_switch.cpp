// W.A.P. to create a calculator using switch
/*
Algorithm:
Step 1: Start
Step 2: Take operator & 2 numbers
Step 3: switch(operator) to compute
Step 4: End

Program Name: Switch Calculator
Description: Basic mathematical operations
Concepts Used: switch-case
*/
#include <iostream>
using namespace std;
int main() {
    char op; float a, b;
    cout << "Enter operator (+,-,*,/) and 2 numbers: ";
    cin >> op >> a >> b;
    switch(op) {
        case '+': cout << a+b; break;
        case '-': cout << a-b; break;
        case '*': cout << a*b; break;
        case '/': if (b!=0) cout << a/b; else cout << "Div by 0"; break;
        default: cout << "Invalid op";
    }
    return 0;
}

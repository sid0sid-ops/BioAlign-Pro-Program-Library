// W.A.P. to demo Switch Case
/*
Program Name: Calculator (switch)
Description: Using a switch statement instead of multiple if-else blocks to achieve clean routing.
Concepts Used: Switch Case
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

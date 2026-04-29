// W.A.P. to demo Simple condition
/*
Program Name: Smallest of two numbers
Description: Basic conditional assignment.
Concepts Used: Simple condition
*/

#include <iostream>
using namespace std;

int main() {
    int A, B, small;
    cout << "Enter two numbers: ";
    cin >> A >> B;
    if (A < B) small = A;
    if (B < A) small = B;
    cout << "Small: " << small << endl;
    return 0;
}

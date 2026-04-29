// W.A.P. to demo String Manipulation
/*
Program Name: Reverse a string
Description: Iterating backwards over a string or swapping characters in-place.
Concepts Used: String Manipulation
*/

#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    cout << "Enter DNA: ";
    cin >> s;
    cout << "Reversed: ";
    for(int i = s.length()-1; i >= 0; i--) {
        cout << s[i];
    }
    cout << endl;
    return 0;
}

// W.A.P. to reverse a string
/*
Algorithm:
Step 1: Start
Step 2: Get string
Step 3: Loop backwards from len-1 to 0, print char
Step 4: End

Program Name: Reverse String
Description: Reverses order of chars
Concepts Used: strings, loops
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

// W.A.P. to demo Input Streams
/*
Program Name: Take integer input & display
Description: Using std::cin to read user input into a variable memory address.
Concepts Used: Input Streams
*/

#include <iostream>
using namespace std;
int main() {
    int length;
    cout << "Enter sequence length: ";
    cin >> length;
    cout << "Length is: " << length << endl;
    return 0;
}

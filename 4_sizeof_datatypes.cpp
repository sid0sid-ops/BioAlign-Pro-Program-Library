// W.A.P. to find size of basic data types using sizeof()
/*
Algorithm:
Step 1: Start
Step 2: Print sizeof int, float, char, double
Step 3: End

Program Name: Sizeof types
Description: Prints byte size of types
Concepts Used: sizeof operator
*/
#include <iostream>
using namespace std;
int main() {
    cout << "int: " << sizeof(int) << " bytes\n";
    cout << "float: " << sizeof(float) << " bytes\n";
    cout << "char: " << sizeof(char) << " bytes\n";
    cout << "double: " << sizeof(double) << " bytes\n";
    return 0;
}

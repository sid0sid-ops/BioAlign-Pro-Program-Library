// W.A.P. to overload unary ++
/*
Algorithm:
Step 1: Start
Step 2: void operator++()
Step 3: Increment class member
Step 4: End

Program Name: Unary Overload
Description: Overloading ++
Concepts Used: Operator overloading
*/
#include <iostream>
using namespace std;

class Cursor {
    int pos = 1;
public:
    void operator++() { pos++; }
    void show() { cout << "Pos: " << pos << endl; }
};

int main() {
    Cursor c;
    ++c;
    c.show();
    return 0;
}

// W.A.P. to demo OOP
/*
Program Name: Class & Object Basics
Description: GfG class showcasing pure basic encapsulation.
Concepts Used: OOP
*/

#include <iostream>
using namespace std;

class GfG {
public:
    int val; // Data member
    void show() { // Member function
        cout << "Value: " << val << endl;
    }
};

int main() {
    GfG obj;
    obj.val = 10;
    obj.show();
    return 0;
}

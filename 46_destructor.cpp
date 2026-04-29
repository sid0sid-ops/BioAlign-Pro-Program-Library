// W.A.P. to demo Cleanup
/*
Program Name: Destructor
Description: Special methods (`~Name()`) that fire when an object is destroyed or falls out of scope.
Concepts Used: Cleanup
*/

#include <iostream>
using namespace std;

class Demo {
public:
    // Constructor
    Demo() {
        cout << "Constructor called (Object created)" << endl;
    }

    // Destructor
    ~Demo() {
        cout << "Destructor called (Object destroyed)" << endl;
    }

    void display() {
        cout << "Inside display function" << endl;
    }
};

int main() {
    Demo obj;   // Object created

    obj.display();

    return 0;   // Destructor automatically called here
}
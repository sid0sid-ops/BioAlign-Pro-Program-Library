// W.A.P. to demo destructor
/*
Algorithm:
Step 1: Start
Step 2: Define ~Class()
Step 3: Print msg on destroy
Step 4: End

Program Name: Destructor
Description: Memory cleanup method
Concepts Used: destructors (~)
*/
#include <iostream>
using namespace std;

class DemoDes {
public:
    DemoDes() { cout << "Created\n"; }
    ~DemoDes() { cout << "Destroyed\n"; }
};

int main() {
    {
        DemoDes d;
    } // goes out of scope, prints destroyed
    return 0;
}

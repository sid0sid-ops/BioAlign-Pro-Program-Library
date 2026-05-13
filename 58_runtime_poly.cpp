// W.A.P. to demo Virtual Functions
/*
Program Name: Runtime polymorphism
Description: Using `virtual` and pointers to allow derived classes to override base class behavior securely at runtime.
Concepts Used: Virtual Functions
*/

#include <iostream>
using namespace std;

class Cell {
public:
    virtual void type() { 
        cout << "Generic Cell" << endl; 
    }
};

class BloodCell : public Cell {
public:
    void type() override { 
        cout << "Red Blood Cell" << endl; 
    }
};

int main() {
    Cell* pointer;
    BloodCell blood;
    
    // Pointer of Base points to object of Derived
    pointer = &blood;
    pointer->type(); 
    
    return 0;
}

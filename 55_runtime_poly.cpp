// W.A.P. to demo runtime polymorphism using virtual
/*
Algorithm:
Step 1: Start
Step 2: Base with virtual show()
Step 3: Derived overrides show()
Step 4: Base ptr pointing to Derived calls Derived's show()
Step 5: End

Program Name: Runtime Polymorphism
Description: Dynamic method dispatch
Concepts Used: virtual, pointers
*/
#include <iostream>
using namespace std;

class Base {
public:
    virtual void display() { cout << "Base class function" << endl; }
};

class Derived : public Base {
public:
    void display() override { cout << "Derived class function" << endl; }
};

int main() {
    Base *b_ptr;
    Derived d;
    b_ptr = &d;
    b_ptr->display();
    return 0;
}

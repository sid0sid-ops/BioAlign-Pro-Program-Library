// W.A.P. to demo multilevel inheritance
/*
Algorithm:
        [ Class A ]  (Base)
             |
             v
        [ Class B ]  (Intermediate Derived)
             |
             v
        [ Class C ]  (Final Derived)

Program Name: Multilevel Inheritance
Description: Inheritance chain
Concepts Used: Multilevel inheritance
*/
#include <iostream>
using namespace std;

class A { 
public:
    void meth1() { cout << "A" << endl; }
};
class B : public A { 
public:
    void meth2() { cout << "B" << endl; }
};
class C : public B { 
public:
    void meth3() { cout << "C" << endl; }
};

int main() {
    C c;
    c.meth1(); c.meth2(); c.meth3();
    return 0;
}

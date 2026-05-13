// W.A.P. to demo Inheritance Chains
/*
Program Name: Multilevel inheritance
Description: A -> B -> C hierarchy. Grandparent, parent, child relationship scaling properties.
Concepts Used: Inheritance Chains
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

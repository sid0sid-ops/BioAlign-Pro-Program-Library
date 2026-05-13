// W.A.P. to demo Public/Private/Protected
/*
Program Name: Access specifiers
Description: Demonstrating the strict boundaries of class member visibility.
Concepts Used: Public/Private/Protected
*/

#include <iostream>
using namespace std;

class Test {
private: int a = 1;
protected: int b = 2;
public: int c = 3;
    void show() { cout << a << b << c << endl; }
};

int main() {
    Test t;
    // t.a and t.b are inaccessible here
    cout << "Public var: " << t.c << endl;
    t.show();
    return 0;
}

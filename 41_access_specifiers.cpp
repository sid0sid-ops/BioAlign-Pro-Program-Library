// W.A.P. to demo access specifiers
/*
Algorithm:
Step 1: Start
Step 2: public, private, protected vars
Step 3: demonstrate access from main (public works, other fail without getters)
Step 4: End

Program Name: Access Speciifers
Description: Pub / Priv / Prot
Concepts Used: data hiding
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

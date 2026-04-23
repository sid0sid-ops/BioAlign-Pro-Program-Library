// W.A.P. to define func outside class (::)
/*
Algorithm:
Step 1: Start
Step 2: Declare func in class. Define outside Action::func()
Step 3: End

Program Name: Scope Resolution
Description: Out of class definition pattern
Concepts Used: Scope resolution operator (::)
*/
#include <iostream>
using namespace std;

class Demo {
public:
    void display();
};

void Demo::display() {
    cout << "Outside class!" << endl;
}

int main() {
    Demo d; d.display();
    return 0;
}

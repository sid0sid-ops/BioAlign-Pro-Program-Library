// W.A.P. to demo Scope Resolution
/*
Program Name: Function outside class
Description: Declaring a method inside a class, but defining it outside use the `::` operator.
Concepts Used: Scope Resolution
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

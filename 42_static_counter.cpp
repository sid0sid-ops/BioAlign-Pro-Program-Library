// W.A.P. to demo Static Members
/*
Program Name: Static object counter
Description: Using variables that belong to the Class itself, shared across all instantiated objects.
Concepts Used: Static Members
*/

#include <iostream>
using namespace std;

class Item {
    static int count;
public:
    Item() { count++; }
    static void show() { cout << "Count: " << count << endl; }
};
// init static
int Item::count = 0;

int main() {
    Item i1, i2;
    Item::show();
    return 0;
}

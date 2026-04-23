// W.A.P. to count objects using static
/*
Algorithm:
Step 1: Start
Step 2: static int count.
Step 3: ++count in constructor.
Step 4: static func to return count.
Step 5: End

Program Name: Static Member
Description: Class scoped variables
Concepts Used: static members
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

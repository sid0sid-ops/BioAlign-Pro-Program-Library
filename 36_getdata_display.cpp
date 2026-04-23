// W.A.P. to use getData and display inside class
/*
Algorithm:
Step 1: Start
Step 2: Class with getData() to cin, display() to cout
Step 3: Call via Object
Step 4: End

Program Name: Member Functions
Description: Class functions
Concepts Used: Member functions
*/
#include <iostream>
using namespace std;

class DataObj {
    int data;
public:
    void getData() { cin >> data; }
    void display() { cout << "Data: " << data << endl; }
};

int main() {
    DataObj d;
    cout << "Enter data: "; d.getData();
    d.display();
    return 0;
}

// W.A.P. to demo Methods
/*
Program Name: getData() and display()
Description: Adding member functions to a class to intake and output object state.
Concepts Used: Methods
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

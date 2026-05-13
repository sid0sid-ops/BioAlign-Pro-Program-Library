// W.A.P. to demo C++ Standard Operation
/*
Program Name: 54 Hybrid Inheritance
Description: A standard bio-informatics logic sample.
Concepts Used: C++ Standard Operation
*/

#include <iostream>
using namespace std;

// Top level base class
class Device {
public:
    Device() { cout << "Device constructor executed." << endl; }
    void powerOn() {
        cout << "Device powers on successfully." << endl;
    }
};

// First intermediate class inherits virtually!
class Printer : virtual public Device {
public:
    void print() { cout << "Printing document..." << endl; }
};

// Second intermediate class inherits virtually!
class Scanner : virtual public Device {
public:
    void scan() { cout << "Scanning document..." << endl; }
};

// Bottom level inherits identically
class Copier_Combo : public Printer, public Scanner {
public:
    void copy() {
        cout << "Duplicating utilizing scanning and printing flows..." << endl;
    }
};

int main() {
    Copier_Combo machine;
    
    // Due to 'virtual' inheritance, there is only ONE copy of powerOn()
    // Resolving the diamond ambiguity elegantly!
    machine.powerOn();     
    machine.scan();
    machine.print();
    machine.copy();
    
    return 0;
}

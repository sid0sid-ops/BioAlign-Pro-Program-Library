// W.A.P. to demonstrate hybrid inheritance preventing diamond ambiguity
/*
Algorithm:
Showcase a class diamond issue -> Base -> (Intermediate A & B) -> Final.
We utilize virtual inheritance over Intermediate levels to merge the dual-copies of the Base class logically!
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
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

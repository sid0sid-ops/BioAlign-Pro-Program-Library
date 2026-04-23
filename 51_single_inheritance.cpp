// W.A.P. to demo single inheritance
/*
Algorithm:
       [ Vehicle Class ] (Base)
               |
          (inherits)
               |
               v
         [ Car Class ]   (Derived)

Program Name: Single Inheritance
Description: Parent child relations
Concepts Used: Single Inheritance
*/
#include <iostream>
using namespace std;

// Base Class
class Cell {
public:
    void metabolize() {
        cout << "Cell is performing metabolic reactions." << endl;
    }
};

// Derived Class
class Neuron : public Cell {
public:
    void sendSignal() {
        cout << "Neuron is transmitting an electrical impulse." << endl;
    }
};

int main() {
    Neuron n;
    n.metabolize(); // Inherited from Cell 
    n.sendSignal(); // Specific to Neuron
    return 0;
}
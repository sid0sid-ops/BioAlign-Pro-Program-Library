// W.A.P. to demo Code Reusability
/*
Program Name: Single inheritance
Description: A child class extending a parent class, inheriting its methods and public attributes.
Concepts Used: Code Reusability
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
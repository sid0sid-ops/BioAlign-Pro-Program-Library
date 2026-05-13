// W.A.P. to demo Multiple Parent Classes
/*
Program Name: Multiple inheritance
Description: A class extending two or more distinct parent classes (unique to C++).
Concepts Used: Multiple Parent Classes
*/

#include <iostream>
using namespace std;

class DNA {
public:
    void storeInfo() { cout << "DNA: Storing genetic sequence." << endl; }
};

class Histone {
public:
    void provideStructure() { cout << "Histone: Providing structural support." << endl; }
};

// Chromosome inherits from BOTH DNA and Histone
class Chromosome : public DNA, public Histone {
public:
    void replicate() { cout << "Chromosome: Replicating during S-phase." << endl; }
};

int main() {
    Chromosome chr;
    chr.storeInfo();        // From DNA 
    chr.provideStructure(); // From Histone 
    chr.replicate();
    return 0;
}
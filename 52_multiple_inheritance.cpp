// W.A.P. to demo multiple inheritance
/*
Program Name: Multiple Inheritance
Description: Multiple parent classes
Concepts Used: Multiple inheritance
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
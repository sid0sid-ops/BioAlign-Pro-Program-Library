// W.A.P. to demo Polymorphism (Compile-time)
/*
Program Name: Function overloading
Description: Creating multiple functions with the same name but different argument signatures.
Concepts Used: Polymorphism (Compile-time)
*/

#include <iostream>
using namespace std;

// Add single base
void addDNA(char base) {
    cout << "Added base: " << base << endl;
}

// Add full sequence
void addDNA(string seq) {
    cout << "Added sequence: " << seq << endl;
}

int main() {
    addDNA('A');
    addDNA("ATGC");
    
    return 0;
}

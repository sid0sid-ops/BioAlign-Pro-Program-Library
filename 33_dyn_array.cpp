// W.A.P. to demo Heap Allocation
/*
Program Name: Dynamic array
Description: Using `new` and `delete` to manually allocate arrays at runtime based on dynamic sizes.
Concepts Used: Heap Allocation
*/

#include <iostream>
using namespace std;

int main() {
    int length = 5; 
    
    // Allocate memory dynamically
    char* dna = new char[length];
    
    for(int i = 0; i < length; i++) {
        dna[i] = 'A'; // Fill with Adenine
    }
    
    cout << "Sequence: ";
    for(int i = 0; i < length; i++) {
        cout << dna[i];
    }
    cout << endl;
    
    delete[] dna; // Always free memory!
    
    return 0;
}

// W.A.P. to demo Memory Cloning
/*
Program Name: Copy Constructor
Description: Exploring explicit reference passing to bypass infinite instancing loops during copy routines.
Concepts Used: Memory Cloning
*/

#include <iostream>
using namespace std;

class Sequence {
public:
    int length;
    
    // Parameterized Constructor
    Sequence(int l) {
        length = l;
        cout << "Primary Sequence initialized randomly...\n";
    }
    
    // Explicitly Typed Copy Constructor (Passing reference to avoid infinite loop)
    Sequence(const Sequence &obj) {
        length = obj.length;
        cout << "Copy Constructor securely duplicated length: " << length << ".\n";
    }
};

int main() {
    cout << "Creating seq1... \n";
    Sequence seq1(1500);        
    
    cout << "\nCreating seq2 by cloning seq1... \n";
    Sequence seq2 = seq1;   // This explicitly invokes the Copy Constructor
    
    return 0;
}

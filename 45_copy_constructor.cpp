// W.A.P. to demo Copy Constructors
/*
Algorithm:
Step 1: Start
Step 2: Instantiate Parameterized Constructor (seq1)
Step 3: Clone seq1 into seq2 using Copy Constructor
Step 4: End

Program Name: Copy Constructor
Description: Passing class instances by reference safely.
Concepts Used: Object instancing, references
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
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

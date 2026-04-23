// W.A.P. to demo constructors
/*
Algorithm:
Step 1: Start
Step 2: Instantiate Default Constructor (no args)
Step 3: Instantiate Parameterized Constructor (passes integer)
Step 4: End

Program Name: Explicit Constructors
Description: Basic instantiation sequences
Concepts Used: Object instancing, arguments
*/
#include <iostream>
using namespace std;

class Sequence {
public:
    int length;
    
    // 1. Default Constructor
    Sequence() {
        length = 0;
        cout << "Default Constructor called.\n";
    }
    
    // 2. Parameterized Constructor
    Sequence(int l) {
        length = l;
        cout << "Parameterized Constructor called with length: " << length << ".\n";
    }
};

int main() {
    cout << "Creating seq1... \n";
    Sequence seq1;             
    
    cout << "Creating seq2... \n";
    Sequence seq2(100);        
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

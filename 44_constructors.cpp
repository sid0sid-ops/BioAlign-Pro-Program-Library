// W.A.P. to demo Initialization
/*
Program Name: Constructors
Description: Special methods that fire automatically to set up state when an object is born.
Concepts Used: Initialization
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

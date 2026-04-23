// W.A.P. to demonstrate a friend function
/*
Concepts Used: Friend Functions exist outside a class, they don't use '::', and take object instances safely as arguments!
Note: A friend method has privileges to reach straight inside the class boundary and retrieve private data members.
*/

#include <iostream>
using namespace std;

class ConfidentialBox {
private:
    int secretKey;
    
public:
    ConfidentialBox(int k) : secretKey(k) {}
    
    // Declaration strictly noting friend status 
    friend void revealSecret(const ConfidentialBox& box); 
};

// Defined globally, OUTSIDE the scope, WITHOUT referencing class namespace
void revealSecret(const ConfidentialBox& box) {
    // The friend safely pulls the locked private variable
    cout << "The private Secret Key inside the box is: " << box.secretKey << endl;
}

int main() {
    ConfidentialBox secure(99824);
    
    // Invoked purely as a global function passing our object over 
    revealSecret(secure);
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}
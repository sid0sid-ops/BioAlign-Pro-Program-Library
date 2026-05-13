// W.A.P. to demo Memory Architecture
/*
Program Name: Deep vs Shallow Copy
Description: Exploring the catastrophic consequences of shallow-copy pointer duplications and building explicit Deep Copy constructors using heap (new) allocation.
Concepts Used: Memory Architecture
*/

#include <iostream>
using namespace std;

class Buffer {
public:
    int* data;
    
    // Parameterized Constructor mapping array to heap
    Buffer(int val) {
        data = new int;
        *data = val;
        cout << "Constructor executed: Memory allocated at " << data << " (Val: " << *data << ")\n";
    }
    
    // Deep Copy Constructor
    Buffer(const Buffer &source) {
        // Without this, both pointers would point to the same memory address (Shallow Copy Crash!)
        data = new int; 
        *data = *(source.data);
        cout << "Deep Copy executed: NEW memory allocated at " << data << " (Val: " << *data << ")\n";
    }
    
    ~Buffer() {
        delete data; // Free distinct heap locations safely
        cout << "Destructor: Memory freed.\n";
    }
};

int main() {
    cout << "Instantiating Primary Buffer:\n";
    Buffer obj1(42);
    
    cout << "\nCloning to Secondary Buffer:\n";
    Buffer obj2 = obj1; // This fundamentally triggers our Deep Copy Constructor
    
    cout << "\nTerminating application bounds:\n";
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

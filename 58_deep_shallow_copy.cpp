// W.A.P. to distinguish Deep vs Shallow object copies
/*
Algorithm:
Step 1: Start
Step 2: Create object requesting heap memory inside constructor
Step 3: Implement Deep Copy constructor allocating entirely NEW memory
Step 4: Clone object. Both objects now contain independent memory pointers!
Step 5: End

Program Name: Deep vs Shallow Copy
Description: Safely utilizing heap memory inside objects
Concepts Used: Deep copy, dynamic allocation, pointers, heap
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

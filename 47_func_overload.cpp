// W.A.P. to demonstrate function overloading using ints and floats
/*
Algorithm:
Create two forms of the 'add' function.
One matching integer arguments.
One matching floating-point arguments.
Display the resulting sum inside main for both cases safely.
*/

#include <iostream>
using namespace std;

// Function to add two integers
int add(int a, int b) {
    return a + b;
}

// Function to add two floating-point numbers
float add(float a, float b) {
    return a + b;
}

int main() {
    int intSum = add(10, 20);
    float floatSum = add(5.5f, 3.2f);
    
    cout << "Integer Addition Results: " << intSum << endl;
    cout << "Floating-Point Addition Results: " << floatSum << endl;
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

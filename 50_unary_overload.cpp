// W.A.P. to demo Operator Overloading
/*
Program Name: Unary ++ operator
Description: Redefining base operators like ++ to work intimately with custom classes.
Concepts Used: Operator Overloading
*/

#include <iostream>
using namespace std;

class Generation {
private:
    int count;
public:
    Generation() { count = 0; }
    
    // Unary operator overload
    void operator++() {
        count++; // Increment generation directly
    }
    
    void display() {
        cout << "Generation: " << count << endl;
    }
};

int main() {
    Generation gen;
    gen.display();
    
    ++gen; // Using the overloaded ++ 
    gen.display();
    
    return 0;
}

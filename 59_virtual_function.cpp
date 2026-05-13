// W.A.P. to demo Runtime Polymorphism
/*
Program Name: Virtual Function
Description: Demonstrating runtime polymorphism via a dedicated virtual method interface mapping derived mutations securely.
Concepts Used: Runtime Polymorphism
*/

#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() { 
        cout << "Animal sound" << endl; 
    }
};

// Dog overrides the virtual function
class Dog : public Animal {
public:
    void sound() override { 
        cout << "Bark!" << endl; 
    }
};

int main() {
    // Dynamic memory allocation casting to Base pointer
    Animal* a = new Dog();
    a->sound(); // Late binding via virtual keyword
    
    delete a;
    return 0;
}

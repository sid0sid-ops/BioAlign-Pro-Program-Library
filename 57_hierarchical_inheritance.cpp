// W.A.P. to demo Multiple Derived Classes
/*
Program Name: Hierarchical Inheritance
Description: Demonstrating one parent class passing traits to multiple distinct parallel child classes.
Concepts Used: Multiple Derived Classes
*/

#include <iostream>
using namespace std;

class Cell {
public:
    void divide() {
        cout << "Cell is dividing." << endl;
    }
};

class PlantCell : public Cell {
public:
    void photosynthesis() {
        cout << "Making food via sunlight." << endl;
    }
};

class AnimalCell : public Cell {
public:
    void move() {
        cout << "Animal cell moving." << endl;
    }
};

int main() {
    PlantCell plant;
    AnimalCell animal;
    
    plant.divide();
    plant.photosynthesis();
    
    animal.divide();
    animal.move();
    
    return 0;
}

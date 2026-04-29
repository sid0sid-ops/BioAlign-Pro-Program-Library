// W.A.P. to demo Binary Overloading
/*
Program Name: Binary + (Complex)
Description: Overloading + to add two custom objects together (like Complex Numbers).
Concepts Used: Binary Overloading
*/

#include <iostream>
using namespace std;

class DNA {
private:
    string seq;
public:
    DNA(string s = "") { seq = s; }
    
    // Overload + to easily combine sequences
    DNA operator+(DNA other) {
        return DNA(seq + other.seq); 
    }
    
    void display() {
        cout << "DNA: " << seq << endl;
    }
};

int main() {
    DNA strand1("AT");
    DNA strand2("GC");
    
    // Straightforward addition
    DNA combined = strand1 + strand2;
    combined.display();
    
    return 0;
}

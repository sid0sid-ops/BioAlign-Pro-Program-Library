// W.A.P. to overload the + operator to add two complex numbers
/*
Algorithm:
Implement Complex class containing real and imaginary floats.
Overload operator+ to return a new synthesized Complex object.
Format the print function neatly as real + i(imaginary).
*/

#include <iostream>
using namespace std;

class Complex {
private:
    float real;
    float imag;

public:
    // Constructor 
    Complex(float r = 0, float i = 0) : real(r), imag(i) {}

    // Overloading the '+' operator
    Complex operator+(const Complex& obj) {
        Complex res;
        res.real = real + obj.real;
        res.imag = imag + obj.imag;
        return res;
    }

    // Display formatted output
    void display() const {
        cout << real << " + i(" << imag << ")" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5);
    Complex c2(1.5, 4.5);
    
    Complex c3 = c1 + c2; // Using overloaded operator
    
    cout << "First Complex Number: ";
    c1.display();
    
    cout << "Second Complex Number: ";
    c2.display();
    
    cout << "Result of Addition: ";
    c3.display();

    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

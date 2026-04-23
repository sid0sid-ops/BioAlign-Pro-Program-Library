// W.A.P. to demonstrate Call by Value using a Class
/*
Algorithm:
Step 1: Start
Step 2: Get values of a and b using getdata()
Step 3: Call Swap_FunctionCalling() which swaps private members
Step 4: Display swapped values. End

Program Name: Swap - Call by Value (Class)
Description: A class encapsulates two integers and swaps them internally.
Concepts Used: class, private members, call by value (object scope)
*/
#include <iostream>
using namespace std;

class FunctionCalling {
private:
    int a;
    int b;

public:
    void Swap_FunctionCalling();
    void getdata() {
        cout << "Enter the value of a:" << endl;
        cin >> a;
        cout << "Enter the value of b:" << endl;
        cin >> b;
        cout << "Before swapping: a = " << a << "\t b = " << b << endl;
    }
};

void FunctionCalling::Swap_FunctionCalling() {
    int temp = 0;
    temp = a;
    a = b;
    b = temp;
    cout << "After swapping:  a = " << a << "\t b = " << b << endl;
}

int main() {
    FunctionCalling obj;
    obj.getdata();
    obj.Swap_FunctionCalling();
    return 0;
}

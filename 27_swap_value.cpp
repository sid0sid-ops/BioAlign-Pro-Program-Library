// W.A.P. to demo Pass by Value
/*
Program Name: Swap (Call by Value)
Description: Demonstrating that passing standard arguments creates copies, making local swaps fail globally.
Concepts Used: Pass by Value
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

// W.A.P. to demo Data Hiding
/*
Program Name: Bank (Encapsulation)
Description: Using private modifiers to protect sensitive data, accessed only via public getter/setter methods.
Concepts Used: Data Hiding
*/

#include <iostream>
using namespace std;

class BankAcc {
    int balance = 0; // private
public:
    void deposit(int amt) { balance += amt; }
    void show() { cout << "Bal: " << balance << endl; }
};

int main() {
    BankAcc b;
    b.deposit(500);
    b.show();
    return 0;
}

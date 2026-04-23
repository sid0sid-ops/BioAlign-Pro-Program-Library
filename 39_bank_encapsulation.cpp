// W.A.P. to demo Encapsulation (BankAccount)
/*
Algorithm:
Step 1: Start
Step 2: private balance. public dep/with.
Step 3: Access balance only via functions
Step 4: End

Program Name: Encapsulation
Description: Info hiding
Concepts Used: private variables
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

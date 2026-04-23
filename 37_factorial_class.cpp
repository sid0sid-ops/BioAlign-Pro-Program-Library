// W.A.P. to calc factorial using class
/*
Algorithm:
Step 1: Start
Step 2: Class Fact with calculate()
Step 3: Run loop inside method
Step 4: End

Program Name: Factorial OOP
Description: Math via object
Concepts Used: OOP member methods
*/
#include <iostream>
using namespace std;

class Factorial {
public:
    int calc(int n) {
        int f = 1;
        for(int i=1; i<=n; i++) f *= i;
        return f;
    }
};

int main() {
    Factorial obj;
    cout << "Fact 5: " << obj.calc(5) << endl;
    return 0;
}

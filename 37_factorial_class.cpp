// W.A.P. to demo Encapsulated Logic
/*
Program Name: Factorial class
Description: Wrapping procedural logic (factorial algorithm) securely inside an object-oriented shell.
Concepts Used: Encapsulated Logic
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

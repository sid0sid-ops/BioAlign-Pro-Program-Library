// W.A.P. to find recursive factorial
/*
Algorithm:
Step 1: Start
Step 2: Base fact(1)=1
Step 3: fact(n) = n * fact(n-1)
Step 4: End

Program Name: Recursive Factorial
Description: Factorial using recursion
Concepts Used: recursion
*/
#include <iostream>
using namespace std;

int fact(int n) {
    if(n <= 1) return 1;
    return n * fact(n - 1);
}

int main() {
    cout << "Factorial 4: " << fact(4) << endl;
    return 0;
}

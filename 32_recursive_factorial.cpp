// W.A.P. to demo Recursive Math
/*
Program Name: Recursive factorial
Description: Classic algorithmic recursion calculating n! by breaking down to n * (n-1)!
Concepts Used: Recursive Math
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

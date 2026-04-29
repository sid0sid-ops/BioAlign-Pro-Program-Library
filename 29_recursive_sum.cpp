// W.A.P. to demo Recursion
/*
Program Name: Recursive sum of naturals
Description: A function calling itself with a base case to prevent infinite loops.
Concepts Used: Recursion
*/

#include <iostream>
using namespace std;

int rSum(int n) {
    if(n <= 0) return 0;
    return n + rSum(n - 1);
}

int main() {
    cout << "Sum to 5: " << rSum(5) << endl;
    return 0;
}

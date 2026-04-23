// W.A.P. to calculate recursive sum
/*
Algorithm:
Step 1: Start
Step 2: Base case n<=0 return 0
Step 3: Recursive n + sum(n-1)
Step 4: End

Program Name: Recursive Sum
Description: Sum of natural numbers using recursion
Concepts Used: recursion
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

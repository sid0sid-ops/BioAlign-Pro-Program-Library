// W.A.P. to check prime number
/*
Algorithm:
Step 1: Start
Step 2: Input n
Step 3: If n <= 1 -> Not Prime
Step 4: Loop i from 2 to sqrt(n)
Step 5: If n % i == 0 -> finding divisor means Not Prime immediately. Break list.
Step 6: End

Program Name: Prime Check
Description: Validates prime numbers computationally optimized to O(sqrt(n)) time.
Concepts Used: loops, conditional logic, early break
*/
#include <iostream>
using namespace std;
int main() {
    int n;
    bool isPrime = true;
    
    cout << "Enter a number: ";
    cin >> n;
    
    if (n <= 1) {
        isPrime = false;
    } else {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) 
        cout << n << " is Prime.\n";
    else 
        cout << n << " is Not Prime.\n";
        
    return 0;
}

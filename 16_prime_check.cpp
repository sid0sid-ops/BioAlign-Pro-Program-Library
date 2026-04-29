// W.A.P. to demo Algorithmic Search
/*
Program Name: Prime number check
Description: Looping up to half the number to check for factors, determining primality.
Concepts Used: Algorithmic Search
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

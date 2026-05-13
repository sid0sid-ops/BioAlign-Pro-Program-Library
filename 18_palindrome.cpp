// W.A.P. to check whether a number is Palindrome or not
/*
Program Name: Palindrome Number
Description: A palindrome number remains the same
when its digits are reversed.

Concepts Used:
1. while Loop
2. Modulus Operator
3. Reverse Number Logic

Bioinformatics Note: Used to detect palindromic sequences in DNA (e.g. restriction enzyme sites).
*/

#include <iostream>
using namespace std;

int main()
{
    int num, original, reverse = 0, rem;

    cout << "Enter a number: ";
    cin >> num;

    original = num;

    // Reversing the number
    while(num > 0)
    {
        rem = num % 10;
        reverse = reverse * 10 + rem;
        num = num / 10;
    }

    // Checking palindrome
    if(original == reverse)
    {
        cout << "Palindrome Number" << endl;
    }
    else
    {
        cout << "Not a Palindrome Number" << endl;
    }

    return 0;
}

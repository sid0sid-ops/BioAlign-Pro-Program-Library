// W.A.P. to demo Pass by Reference
/*
Program Name: Swap (Call by Reference)
Description: Passing memory addresses (&) so functions can modify original variables.
Concepts Used: Pass by Reference
*/
#include <iostream>
using namespace std;

// Function using references (&) to swap original values
void swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}

int main()
{
    int x = 10, y = 20;

    cout << "Before swap : x = " << x << " , y = " << y << endl;

    swap(x, y);

    cout << "After swap : x = " << x << " , y = " << y << endl;

    return 0;
}
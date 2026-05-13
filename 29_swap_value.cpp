// W.A.P. to demo Pass by Value
/*
Program Name: Swap (Call by Value)
Description: Demonstrating that passing standard arguments creates copies, making local swaps fail globally.
Concepts Used: Pass by Value
*/

#include <iostream>
using namespace std;

void swap(int a, int b)
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

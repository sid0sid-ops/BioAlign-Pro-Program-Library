// Swapping two numbers using pointers
/*
Program Name: Swap Using Pointers
Description: Modifies variable values directly in memory using pointer dereferencing.

Concepts Used: Pointers, Call by Reference

Bioinformatics Note: In-place memory swap of large genomic sequences to avoid expensive copy operations.
*/

#include <iostream>
using namespace std;

// Function using pointers
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int x = 10, y = 20;

    cout << "Before swap : x = " << x << " , y = " << y << endl;

    swap(&x, &y);

    cout << "After swap : x = " << x << " , y = " << y << endl;

    return 0;
}

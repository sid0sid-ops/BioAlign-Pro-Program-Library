// W.A.P. to add numbers using Array
/*
Program Name: Array Addition
Description: Using an array to store multiple numbers
and finding their total sum.

Concepts Used:
1. Array
2. for Loop
3. Addition

Bioinformatics Note: Aggregates total sequence quality scores across a block of reads.
*/

#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {10, 20, 30, 40, 50};
    int sum = 0;

    // Adding array elements
    for(int i = 0; i < 5; i++)
    {
        sum = sum + arr[i];
    }

    cout << "Sum of array elements = " << sum << endl;

    return 0;
}

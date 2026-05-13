// W.A.P. to demo Array Decay
/*
Program Name: Pass array to function
Description: Passing arrays to functions (they decay to pointers to the first element).
Concepts Used: Array Decay
*/

#include <iostream>
using namespace std;

void printArray(int arr[], int size) {
    for(int i=0; i<size; i++) cout << arr[i] << " ";
}

int main() {
    int seq[] = {1, 2, 3, 4};
    printArray(seq, 4);
    return 0;
}

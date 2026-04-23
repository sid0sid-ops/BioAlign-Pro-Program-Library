// W.A.P. to pass array to function
/*
Algorithm:
Step 1: Start
Step 2: Define func(int arr[], int size)
Step 3: Print elements inside func
Step 4: End

Program Name: Pass Array Array
Description: Pass arrays by reference to function
Concepts Used: arrays, functions
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

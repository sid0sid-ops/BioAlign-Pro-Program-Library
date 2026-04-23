// W.A.P. to use dynamic array (new/delete)
/*
Algorithm:
Step 1: Start
Step 2: ptr = new int[size]
Step 3: store and print
Step 4: delete[] ptr
Step 5: End

Program Name: Dynamic memory
Description: Runtime memory alloc
Concepts Used: new, delete, dynamic memory
*/
#include <iostream>
using namespace std;

int main() {
    int n, *arr;
    cout << "Enter size: "; cin >> n;
    arr = new int[n];
    for(int i=0; i<n; i++) arr[i] = i+1;
    for(int i=0; i<n; i++) cout << arr[i] << " ";
    delete[] arr;
    return 0;
}

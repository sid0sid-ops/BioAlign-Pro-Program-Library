// W.A.P. to take array input and output
/*
Algorithm:
Step 1: Start
Step 2: Loop 0 to 4, cin array[i]
Step 3: Loop 0 to 4, cout array[i]
Step 4: End

Program Name: Array I/O
Description: Store 5 values and print
Concepts Used: arrays, loops
*/
#include <iostream>
using namespace std;
int main() {
    int arr[5];
    cout << "Enter 5 scores: ";
    for(int i=0; i<5; i++) cin >> arr[i];
    cout << "Scores: ";
    for(int i=0; i<5; i++) cout << arr[i] << " ";
    return 0;
}

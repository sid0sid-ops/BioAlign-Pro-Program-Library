// W.A.P. to demo 1D Arrays
/*
Program Name: Array input/output
Description: Storing multiple contiguous values in memory and looping through them.
Concepts Used: 1D Arrays
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

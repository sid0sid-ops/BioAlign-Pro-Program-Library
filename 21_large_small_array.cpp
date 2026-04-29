// W.A.P. to demo Linear Search
/*
Program Name: Largest/smallest in array
Description: Scanning an array to track and update the maximum and minimum values seen.
Concepts Used: Linear Search
*/

#include <iostream>
using namespace std;
int main() {
    int arr[] = {3, 1, 9, 7, 5};
    int min = arr[0], max = arr[0];
    for(int i=1; i<5; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }
    cout << "Min: " << min << ", Max: " << max << endl;
    return 0;
}

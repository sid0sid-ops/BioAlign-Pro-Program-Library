// W.A.P. to find largest & smallest in array
/*
Algorithm:
Step 1: Start
Step 2: Assume max = min = arr[0]
Step 3: Iterate array, updating max/min
Step 4: End

Program Name: Array Min Max
Description: Finds extremes in array
Concepts Used: arrays, conditionals
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

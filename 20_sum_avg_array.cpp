// W.A.P. to find sum and average of array elements
/*
Algorithm:
Step 1: Start
Step 2: Read n elements
Step 3: Add to sum. Avg = sum / n.
Step 4: Print results
Step 5: End

Program Name: Array Sum Average
Description: Stats on arrays
Concepts Used: arrays, arithmetic loops
*/
#include <iostream>
using namespace std;
int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int sum = 0;
    for(int i=0; i<5; i++) sum += arr[i];
    cout << "Sum: " << sum << ", Avg: " << (float)sum/5 << endl;
    return 0;
}

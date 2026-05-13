// W.A.P. to demo Accumulators
/*
Program Name: Sum and average of array
Description: Iterating through an array to build a running total and calculating the mean.
Concepts Used: Accumulators
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

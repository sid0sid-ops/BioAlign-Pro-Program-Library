// W.A.P. to add two 2D matrices
/*
Algorithm:
Step 1: Start
Step 2: Create two 2x2 arrays
Step 3: Loop rows & cols: sum[i][j] = a[i][j] + b[i][j]
Step 4: End

Program Name: Matrix Addition
Description: Adds 2D arrays elementwise
Concepts Used: 2D arrays, nested loops
*/
#include <iostream>
using namespace std;
int main() {
    int a[2][2]={{1,2},{3,4}}, b[2][2]={{1,1},{1,1}}, res[2][2];
    for(int i=0; i<2; i++) {
        for(int j=0; j<2; j++) {
            res[i][j] = a[i][j] + b[i][j];
            cout << res[i][j] << " ";
        }
        cout << "\n";
    }
    return 0;
}

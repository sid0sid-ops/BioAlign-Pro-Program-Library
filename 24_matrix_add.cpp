// W.A.P. to demo 2D Arrays
/*
Program Name: Add two 2D matrices
Description: Using nested loops to iterate over rows and columns of 2D data structures.
Concepts Used: 2D Arrays
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

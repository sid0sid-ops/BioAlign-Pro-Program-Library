// W.A.P. to demo break and continue
/*
Algorithm:
Step 1: Start
Step 2: Loop 1..10. If 4, continue. If 8, break.
Step 3: End

Program Name: Break Continue Demo
Description: Demos loop control
Concepts Used: break, continue
*/
#include <iostream>
using namespace std;
int main() {
    for(int i=1; i<=10; i++) {
        if(i == 4) continue; // skip 4
        if(i == 8) break;    // stop at 8
        cout << i << " ";
    }
    return 0;
}

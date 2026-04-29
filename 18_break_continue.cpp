// W.A.P. to demo Loop Control
/*
Program Name: Break and continue
Description: Altering normal loop execution flow by skipping or breaking out.
Concepts Used: Loop Control
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

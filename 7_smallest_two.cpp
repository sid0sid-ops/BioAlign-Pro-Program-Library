/*
Algorithm to find the smallest of two numbers:
    Step1: Start
    Step2: Input two numbers, say A and B
    Step3: If A < B then small = A
    Step4: If B < A then Small = B
    Step5: Print Small
    Step 6: End
*/
#include <iostream>
using namespace std;

int main() {
    int A, B, small;
    cout << "Enter two numbers: ";
    cin >> A >> B;
    if (A < B) small = A;
    if (B < A) small = B;
    cout << "Small: " << small << endl;
    return 0;
}

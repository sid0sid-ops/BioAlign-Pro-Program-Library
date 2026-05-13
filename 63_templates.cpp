// W.A.P. to demo Generic Programming
/*
Program Name: C++ Templates (Generics)
Description: Creating generic `template <typename T>` signatures able to intuitively execute standard mathematical routines across varying data bounds (int, float, string) simultaneously.
Concepts Used: Generic Programming
*/

#include <iostream>
using namespace std;

// 1. We declare 'T' as a generalized template typename
template <typename T>
T calculateAggregation(T valA, T valB) {
    // 2. The compiler will automatically substitute 'T' for int, float, double at runtime!
    return valA + valB;
}

int main() {
    cout << "Executing Template with Integers: \n";
    int iResult = calculateAggregation<int>(15, 30);
    cout << "Result: " << iResult << "\n\n";
    
    cout << "Executing EXACT SAME Template with Floats (Decimals): \n";
    float fResult = calculateAggregation<float>(14.5f, 2.2f);
    cout << "Result: " << fResult << "\n\n";
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

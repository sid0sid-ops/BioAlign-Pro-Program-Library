// W.A.P. to demonstrate C++ Generics / Templates
/*
Algorithm:
Step 1: Start
Step 2: Define a generic `template <typename T>` function.
Step 3: Call the function natively passing integers.
Step 4: Call the exact same function natively passing floats without rewriting logic!
Step 5: End

Program Name: C++ Templates & Generics
Description: Re-using identical logic blocks effectively across drastically different data types algebraically.
Concepts Used: Compile-time polymorphism, template parameters
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

// W.A.P. for C-Style and C++ String Handling
/*
Algorithm:
Step 1: Start
Step 2: Input first and last name as C-style char arrays
Step 3: Demonstrate strlen, strcpy, strcat, strcmp
Step 4: Demonstrate C++ string objects, concatenation, length
Step 5: End

Program Name: String Handling (C-style + C++)
Description: Covers C-style char arrays and C++ string objects.
             Demonstrates strlen, strcpy, strcat, strcmp, and
             std::string operations.
Concepts Used: cstring, string class, concatenation
*/
#include <iostream>
#include <cstring>
#include <string>
using namespace std;

int main() {
    // --- C-Style Strings ---
    char F_name[20];
    char L_name[20];
    char Full_name[50];

    cout << "Enter your first name: ";
    cin >> F_name;
    cout << "Enter your last name: ";
    cin >> L_name;

    cout << "\nThe full name is: " << F_name << " " << L_name << endl;
    cout << "Length of first name : " << strlen(F_name) << endl;
    cout << "Length of last name  : " << strlen(L_name) << endl;

    // Copy and concatenate
    strcpy(Full_name, F_name);
    strcat(Full_name, " ");
    strcat(Full_name, L_name);
    cout << "After copy & concat  : " << Full_name << endl;

    // Compare
    if (strcmp(F_name, L_name) == 0)
        cout << "First and last names are identical." << endl;
    else
        cout << "First and last names are different." << endl;

    // --- C++ Strings ---
    cout << "\n--- C++ String Examples ---" << endl;
    string str1 = "hello";
    string str2("world");
    string str3;
    str3 = str1 + " " + str2;
    cout << "After concatenation  : " << str3 << endl;
    cout << "Length of result     : " << str3.length() << endl;

    return 0;
}

// W.A.P. to String Manipulation
/*
Program Name: String Operations
Description: Demonstrates various string operations including C-style strings (strcpy, strcat, strlen, strcmp) and C++ std::string.
Concepts Used: C-Style Strings, C++ Strings, Input/Output Streams
*/

#include <iostream>
#include <cstring> // Required for C-style string functions like strcpy, strcat, etc.
#include <string>  // Required for C++ std::string class

using namespace std;

int main() {
    // ==========================================
    // Part 1: C-Style String Manipulation
    // ==========================================
    cout << "--- C-Style String Manipulation ---" << endl;

    char F_name[20];
    char L_name[20];
    char Full_name[50];

    cout << "Enter the first name: ";
    cin.getline(F_name, 20);

    cout << "Enter the last name: ";
    cin.getline(L_name, 20);

    cout << "The Full name is-: " << F_name << " " << L_name << endl;

    // String length 
    cout << "The length of First name: " << strlen(F_name) << endl;
    cout << "The length of last name: " << strlen(L_name) << endl;

    // Copy string 
    strcpy(Full_name, F_name);
    cout << "After Copy we get: " << Full_name << endl;

    // Concatenate string 
    strcat(Full_name, " "); // Adding a space to separate the names cleanly
    strcat(Full_name, L_name);
    cout << "After concatenation we get: " << Full_name << endl;

    // String compare
    if (strcmp(F_name, L_name) == 0) {
        cout << "The strings are same" << endl;
    } else {
        cout << "The strings are different" << endl;
    }

    // ==========================================
    // Part 2: C++ String Class 
    // ==========================================
    cout << "\n--- C++ String Class ---" << endl;
    
    // C++ string declarations (showing different initialization styles)
    string str1 = "hello";
    string str2("hello");
    string str3{"World"};
    string str4;
    string str5;

    // Concatenation using C++ strings
    str4 = str2 + " " + str3;
    cout << "After concatenation length is: " << str4.length() << endl;
    cout << "Concatenated string is: " << str4 << endl;

    // Copying C++ strings
    str5 = str4; 
    cout << "After copying -: " << str5 << endl;

    return 0;
}
// W.A.P. to define Student class and object
/*
Algorithm:
Step 1: Start
Step 2: Class Student with name, roll
Step 3: Create obj, populate, print
Step 4: End

Program Name: Basic Class
Description: First OOP program
Concepts Used: OOP, Classes, Objects
*/
#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int roll;
};

int main() {
    Student s1;
    s1.name = "John";
    s1.roll = 101;
    cout << "Student: " << s1.name << ", Roll: " << s1.roll << endl;
    return 0;
}

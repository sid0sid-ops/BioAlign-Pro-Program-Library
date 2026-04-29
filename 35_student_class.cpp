// W.A.P. to demo Classes and Objects
/*
Program Name: Student class
Description: Defining a class blueprint with attributes and methods, instantiating objects.
Concepts Used: Classes and Objects
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

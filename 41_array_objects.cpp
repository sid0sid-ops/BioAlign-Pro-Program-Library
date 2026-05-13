// W.A.P. to demo Object Arrays
/*
Program Name: Array of objects
Description: Creating arrays where every element is an instance of a class, looping over them.
Concepts Used: Object Arrays
*/

#include <iostream>
using namespace std;

class Bioinformatics {
    int id;
    char name[20];
    float marks;
public:
    void getdata() {
        cout << "\nEnter student ID   : ";
        cin >> id;
        cout << "Enter student name : ";
        cin >> name;
        cout << "Enter student marks: ";
        cin >> marks;
    }
    void show() {
        cout << "\nID: " << id << "\tName: " << name << "\tMarks: " << marks << endl;
    }
};

int main() {
    int n;
    cout << "Enter the number of students: ";
    cin >> n;

    // Dynamic allocation for standard C++ compliance
    Bioinformatics *obj = new Bioinformatics[n];

    for (int i = 0; i < n; i++) {
        cout << "\n--- Enter details of student " << i + 1 << " ---";
        obj[i].getdata();
    }

    cout << "\n--- Student Details ---";
    for (int i = 0; i < n; i++) {
        obj[i].show();
    }

    delete[] obj; // Clean up memory
    return 0;
}

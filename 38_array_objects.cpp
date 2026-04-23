// W.A.P. to demonstrate an Array of Class Objects
/*
Algorithm:
Step 1: Start
Step 2: Get number of students n
Step 3: Dynamically allocate array of n objects
Step 4: Call getdata() for each object
Step 5: Call show() for each object to display details
Step 6: Free dynamic memory. End

Program Name: Array of Objects
Description: Creates n student objects dynamically, takes input,
             and displays all student details using class methods.
Concepts Used: class, array of objects, dynamic memory allocation
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

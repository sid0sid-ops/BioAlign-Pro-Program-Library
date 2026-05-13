// W.A.P. to demonstrate Constructors and its Types
/*
Program Name: Constructors
Description: Constructors are special member functions
that are automatically called when an object is created.

Types of Constructors Used:
1. Default Constructor
2. Parameterized Constructor
3. Copy Constructor

Concepts Used: Constructors
Bioinformatics Note: Properly initializes complex sequence buffers or deep-copies existing gene objects for variant comparison.
*/

#include <iostream>
using namespace std;

class Student
{
public:
    int marks;

    // 1. Default Constructor
    Student()
    {
        marks = 0;
        cout << "Default Constructor called." << endl;
    }

    // 2. Parameterized Constructor
    Student(int m)
    {
        marks = m;
        cout << "Parameterized Constructor called." << endl;
        cout << "Marks = " << marks << endl;
    }

    // 3. Copy Constructor
    Student(const Student &obj)
    {
        marks = obj.marks;
        cout << "Copy Constructor called." << endl;
        cout << "Copied Marks = " << marks << endl;
    }
};

int main()
{
    // Calling Default Constructor
    cout << "Creating student1..." << endl;
    Student student1;

    cout << endl;

    // Calling Parameterized Constructor
    cout << "Creating student2..." << endl;
    Student student2(95);

    cout << endl;

    // Calling Copy Constructor
    cout << "Creating student3 by copying student2..." << endl;
    Student student3 = student2;

    return 0;
}
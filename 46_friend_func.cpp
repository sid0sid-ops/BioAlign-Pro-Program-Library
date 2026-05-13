// W.A.P. to demo Friend Access
/*
Program Name: Friend function
Description: Granting non-member functions access to private class variables.
Concepts Used: Friend Access
*/

/*
Concepts Used: Friend Functions exist outside a class, they don't use '::', and take object instances safely as arguments!
Note: A friend method has privileges to reach straight inside the class boundary and retrieve private data members.
*/
#include <iostream>
using namespace std;

// Class A
class A{
private:
    int x;
public:
    // Constructor
    A(){
        x = 10;
    }
    friend class B;   // Friend class declaration
};
// Class B
class B{
public:
    void show(A obj)    {
        // Accessing private member of class A
        cout << "Value of x = " << obj.x << endl;
    }
};
int main(){
    A obj1;
    B obj2;
    obj2.show(obj1);
    return 0;
}
// W.A.P. to demo File Streams
/*
Program Name: File Handling (Read/Write)
Description: Demonstrates how to create a file, write a string to it, and read the content back into the program.
Concepts Used: File Streams
*/

#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    string fileName = "student_record.txt";
    string writeName = "Siddharth";
    int writeRoll = 42;
    float writeMarks = 95.5;
    
    // Writing details to file (ios::out is default for ofstream)
    ofstream outFile(fileName, ios::out);
    if (!outFile) {
        cerr << "Error establishing file for writing." << endl;
        return 1;
    }
    
    outFile << writeName << endl;
    outFile << writeRoll << endl;
    outFile << writeMarks << endl;
    outFile.close(); // Securing file
    
    cout << "Student details successfully written to " << fileName << endl;
    
    // Reading details back
    ifstream inFile(fileName, ios::in);
    if (!inFile) {
        cerr << "Error establishing file for reading." << endl;
        return 1;
    }
    
    string readName;
    int readRoll;
    float readMarks;
    
    inFile >> readName;
    inFile >> readRoll;
    inFile >> readMarks;
    inFile.close(); // Securing file
    
    cout << "\n--- Student Record Output ---" << endl;
    cout << "Name: " << readName << endl;
    cout << "Roll Number: " << readRoll << endl;
    cout << "Marks: " << readMarks << endl;

    return 0;
}

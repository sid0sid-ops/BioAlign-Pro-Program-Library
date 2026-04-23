// W.A.P. to handle exception (division by zero) and properly execute try/catch handling.
/*
Algorithm:
Set up a try block testing division. 
If the denominator is explicitly zero, safely throw an exception.
Catch this thrown exception and fail cleanly displaying an error.
*/

#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
    double numerator = 10.0;
    double denominator = 0.0;
    
    try {
        if (denominator == 0) {
            throw runtime_error("Error: Division by zero is undefined.");
        }
        
        // This will only run if denominator is not zero
        double result = numerator / denominator;
        cout << "Result of Division: " << result << endl;
        
    } catch (const exception& e) {
        // Gracefully catch and inform the user
        cout << "Exception Caught: " << e.what() << endl;
    }
    
    cout << "\n--- BioAlign-Pro ---" << endl;
    return 0;
}

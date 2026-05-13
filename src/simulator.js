window.App.Simulator = {
        // =========================================================================
        // 🖥️ SIMULATED COMPILER OUTPUTS
        // =========================================================================
        // This object maps the exact filename (e.g., '1_hello_world.cpp') to its 
        // expected console output string.
        // 
        // HOW TO MODIFY OR FIX ERRORS:
        // 1. Find the exact filename in the list below.
        // 2. Change the text to the right of the colon (inside the quotes).
        // 3. Use \n to represent a new line (Enter key) in the terminal.
        // 4. IMPORTANT: Always run `python builder.py` after saving this file 
        //    to re-bundle the application!
        // =========================================================================
        exactOutputs: {
        
        
        

        "1_hello_world.cpp": "Hello World (DNA: ATGC)\n\n--- BioAlign-Pro ---",
        "2_integer_input.cpp": "Enter sequence length: 5\nLength is: 5\n\n--- BioAlign-Pro ---",
        "3_arithmetic_ops.cpp": "Enter two values: 10 5\nSum: 15\nDiff: 5\nMul: 50\nDiv: 2\nMod: 0\n\n--- BioAlign-Pro ---",
        "4_sizeof_datatypes.cpp": "int: 4 bytes\nfloat: 4 bytes\nchar: 1 bytes\ndouble: 8 bytes\n\n--- BioAlign-Pro ---",
        "5_even_odd.cpp": "The number 9 is positive.\nThe number 9 is odd.\n\n--- BioAlign-Pro ---",
        "6_if_statement.cpp": "The number is strictly positive.\n\n--- BioAlign-Pro ---",
        "7_smallest_two.cpp": "Value B (3) is smaller than A (8)\n\n--- BioAlign-Pro ---",
        "8_largest_three.cpp": "b is greatest: 20\n\n--- BioAlign-Pro ---",
        "9_leap_year.cpp": "Enter year: 2024\n2024 is a Leap Year.\n\n--- BioAlign-Pro ---",
        "10_calc_switch.cpp": "Enter operator (+,-,*,/) and 2 numbers: * 6 7\n42\n\n--- BioAlign-Pro ---",
        "11_print_1_10_for.cpp": "0\n1\n2\n3\n4\n\n\n--- BioAlign-Pro ---",
        "12_fibonacci_while.cpp": "Fibonacci series (First 10 terms): \n0 1 1 2 3 5 8 13 21 34 \n\n--- BioAlign-Pro ---",
        "13_fibonacci_for.cpp": "Fibonacci series (First 10 terms): \n0 1 1 2 3 5 8 13 21 34 \n\n--- BioAlign-Pro ---",
        "14_fibonacci_while_limit.cpp": "Fibonacci series (Under value 10): \n0 1 1 2 3 5 8 \n\n--- BioAlign-Pro ---",
        "15_fibonacci_for_limit.cpp": "Fibonacci series (Under value 10): \n0 1 1 2 3 5 8 \n\n--- BioAlign-Pro ---",
        "16_prime_check.cpp": "Enter a number: 29\n29 is Prime.\n\n--- BioAlign-Pro ---",
        "17_armstrong.cpp": "Enter a pos integer: 153\n153 is Armstrong.\n\n--- BioAlign-Pro ---",
        "18_palindrome.cpp": "Enter a number: 121\nPalindrome Number\n\n--- BioAlign-Pro ---",
        "19_break_continue.cpp": "1 2 3 5 6 7 \n\n--- BioAlign-Pro ---",
        "20_array_io.cpp": "Enter 5 scores: 1 2 3 4 5\nScores: 1 2 3 4 5 \n\n--- BioAlign-Pro ---",
        "21_sum_avg_array.cpp": "Sum: 150, Avg: 30\n\n--- BioAlign-Pro ---",
        "22_array_add.cpp": "Sum of array elements = 150\n\n--- BioAlign-Pro ---",
        "23_large_small_array.cpp": "Min: 1, Max: 9\n\n--- BioAlign-Pro ---",
        "24_matrix_add.cpp": "2 3 \n4 5 \n\n\n--- BioAlign-Pro ---",
        "25_concat_name.cpp": "--- C-Style String Manipulation ---\nEnter the first name: Enter the last name: The Full name is-: Siddharth Tripathi\nThe length of First name: 9\nThe length of last name: 8\nAfter Copy we get: Siddharth\nAfter concatenation we get: Siddharth Tripathi\nThe strings are different\n\n--- C++ String Class ---\nAfter concatenation length is: 11\nConcatenated string is: hello World\nAfter copying -: hello World\n\n--- BioAlign-Pro ---",
        "26_reverse_string.cpp": "Enter DNA: ATGC\nReversed: CGTA\n\n--- BioAlign-Pro ---",
        "27_sum_function.cpp": "Sum is: 7\n\n--- BioAlign-Pro ---",
        "28_pass_array_func.cpp": "1 2 3 4 \n\n--- BioAlign-Pro ---",
        "29_swap_value.cpp": "Enter the value of a:\n10\nEnter the value of b:\n20\nBefore swapping: a = 10\t b = 20\nAfter swapping:  a = 20\t b = 10\n\n--- BioAlign-Pro ---",
        "30_swap_ref.cpp": "Before swapping: a = 10, b = 20\nAfter swapping:  a = 20, b = 10\n\n--- BioAlign-Pro ---",
        "31_recursive_sum.cpp": "Sum to 5: 15\n\n--- BioAlign-Pro ---",
        "32_recursive_factorial.cpp": "Factorial 4: 24\n\n--- BioAlign-Pro ---",
        "33_pointer_basics.cpp": "Address: 0x7ffd5820ab Value: 10\n\n--- BioAlign-Pro ---",
        "34_add_pointers.cpp": "Sum: 11\n\n--- BioAlign-Pro ---",
        "35_swap_pointers.cpp": "Before swap : x = 10 , y = 20\nAfter swap : x = 20 , y = 10\n\n--- BioAlign-Pro ---",
        "36_dyn_array.cpp": "Enter size: 3\n1 2 3 \n\n--- BioAlign-Pro ---",
        "37_class_object.cpp": "Gene name: BRCA1\nMutation rate: 0.052\n\n--- BioAlign-Pro ---",
        "38_student_class.cpp": "Student: John, Roll: 101\n\n--- BioAlign-Pro ---",
        "39_getdata_display.cpp": "Enter data: \nData: 42\n\n--- BioAlign-Pro ---",
        "40_factorial_class.cpp": "Fact 5: 120\n\n--- BioAlign-Pro ---",
        "41_array_objects.cpp": "Enter the number of students: 1\n\n--- Enter details of student 1 ---\nEnter student ID   : 1\nEnter student name : Alice\nEnter student marks: 95\n\n--- Student Details ---\nID: 1\tName: Alice\tMarks: 95\n\n--- BioAlign-Pro ---",
        "42_bank_encapsulation.cpp": "Bal: 500\n\n--- BioAlign-Pro ---",
        "43_func_outside_class.cpp": "Outside class!\n\n--- BioAlign-Pro ---",
        "44_access_specifiers.cpp": "Public var: 3\n123\n\n--- BioAlign-Pro ---",
        "45_static_counter.cpp": "Count: 2\n\n--- BioAlign-Pro ---",
        "46_friend_func.cpp": "Value of x = 10\n\n--- BioAlign-Pro ---",
        "47_constructors.cpp": "Creating seq1... \nDefault Constructor called.\nCreating seq2... \nParameterized Constructor called with length: 100.\nCreating seq3 from seq2... \nCopy Constructor duplicated length: 100.\n\n--- BioAlign-Pro ---",
        "48_destructor.cpp": "Constructor called (Object created)\nInside display function\nDestructor called (Object destroyed)\n\n--- BioAlign-Pro ---",
        "49_func_overload.cpp": "Added base: A\nAdded sequence: ATGC\n\n--- BioAlign-Pro ---",
        "50_unary_overload.cpp": "Generation: 0\nGeneration: 1\n\n--- BioAlign-Pro ---",
        "51_binary_overload.cpp": "DNA: ATGC\n\n--- BioAlign-Pro ---",
        "52_basic_to_class.cpp": "2h 10m\n\n\n--- BioAlign-Pro ---",
        "53_single_inheritance.cpp": "Cell is performing metabolic reactions.\nNeuron is transmitting an electrical impulse.\n\n--- BioAlign-Pro ---",
        "54_multiple_inheritance.cpp": "DNA: Storing genetic sequence.\nHistone: Providing structural support.\nChromosome: Replicating during S-phase.\n\n--- BioAlign-Pro ---",
        "55_multilevel_inheritance.cpp": "A\nB\nC\n\n\n--- BioAlign-Pro ---",
        "56_hybrid_inheritance.cpp": "Device constructor executed.\nDevice powers on successfully.\nScanning document...\nPrinting document...\nDuplicating utilizing scanning and printing flows...\n\n--- BioAlign-Pro ---",
        "57_hierarchical_inheritance.cpp": "Cell is dividing.\nMaking food via sunlight.\nCell is dividing.\nAnimal cell moving.\n\n--- BioAlign-Pro ---",
        "58_runtime_poly.cpp": "Red Blood Cell\n\n--- BioAlign-Pro ---",
        "59_virtual_function.cpp": "Bark!\n\n--- BioAlign-Pro ---",
        "60_exception_handling.cpp": "Error: Division by zero!\n\n--- BioAlign-Pro ---",
        "61_file_handling.cpp": "Student details successfully written to student_record.txt\n\n--- Student Record Output ---\nName: Siddharth\nRoll Number: 42\nMarks: 95.5\n\n--- BioAlign-Pro ---",
        "62_deep_shallow_copy.cpp": "Instantiating Primary Buffer:\nConstructor executed: Memory allocated at 0x22f28a0 (Val: 42)\n\nCloning to Secondary Buffer:\nDeep Copy executed: NEW memory allocated at 0x22fa010 (Val: 42)\n\nTerminating application bounds:\n\n--- BioAlign-Pro ---",
        "63_templates.cpp": "Executing Template with Integers: \nResult: 45\n\nExecuting EXACT SAME Template with Floats (Decimals): \nResult: 16.7\n\n--- BioAlign-Pro ---"
},

        resetTerminal: function () {
                const term = document.getElementById('terminalOutput');
                if (term) term.innerHTML = `<span class="text-gray-600 dark:text-gray-500">Ready to compile. Press <span class="text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-play"></i> Run</span> to test current program.</span>`;

                if (window.App.UI && window.App.UI.expandConsole) {
                        window.App.UI.hasRunSimulation = false;
                        window.App.UI.expandConsole(false);
                }
        },
        runCompiler: function () {
                const term = document.getElementById('terminalOutput');
                const fileId = window.currentActiveHash.substring(1);
                if (!term || !fileId) return;

                if (window.App.UI && window.App.UI.expandConsole) {
                        window.App.UI.hasRunSimulation = true;
                        window.App.UI.expandConsole(true);
                }

                // Authentic MSYS2 bash prompt
                const prompt = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">sid@BioAlign</span> <span class="text-fuchsia-600 dark:text-fuchsia-400">MINGW64</span> <span class="text-yellow-600 dark:text-yellow-300">~/Desktop/C++</span>\n<span class="text-black dark:text-white font-bold">$</span>`;

                // 1. Initial compile and execution chained step
                term.innerHTML = `${prompt} <span class="text-gray-700 dark:text-gray-300">g++ ${fileId} -o app.exe && ./app.exe</span>\n\n`;

                setTimeout(() => {
                        const outStr = this.exactOutputs[fileId] || `Program executed successfully.\nOutput dynamically generated for ${fileId}`;

                        // 2. Colorizing output explicitly to make it beautiful
                        let finalStr = outStr;
                        finalStr = finalStr.replace(/(Enter .*?:|Enter .*?$)/gm, '<span class="text-cyan-600 dark:text-cyan-400 font-semibold">$1</span>');
                        finalStr = finalStr.replace(/--- BioAlign-Pro ---/g, '<span class="text-blue-600 dark:text-blue-400 font-bold px-1 bg-blue-500/10 rounded">--- BioAlign-Pro ---</span>');
                        finalStr = finalStr.replace(/(Exception|Error|Div by 0)/gi, '<span class="text-red-600 dark:text-red-400 font-bold">$1</span>');

                        term.innerHTML += `<span class="text-gray-800 dark:text-gray-200">${finalStr}</span>\n\n`;

                        // End terminal execution with a waiting prompt
                        term.innerHTML += `${prompt} <span class="animate-pulse">_</span>`;
                        term.scrollTop = term.scrollHeight; // Auto-scroll to bottom

                        // Dynamically size the terminal to fit the output content
                        if (window.App.UI && window.App.UI.expandConsole) {
                                window.App.UI.expandConsole(true);
                        }
                }, 800);
        }
};

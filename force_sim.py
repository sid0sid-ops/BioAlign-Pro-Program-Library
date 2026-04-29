import os
import re

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"
sim_path = os.path.join(base_dir, 'src', 'simulator.js')

with open(sim_path, 'r', encoding='utf-8') as f:
    c = f.read()

# Hardcoding the explicitly exact perfectly checked 59 traces.
master_map = {
    '1_hello_world.cpp': 'Hello World (DNA: ATGC)',
    '2_integer_input.cpp': 'Enter sequence length: 5\nLength is: 5',
    '3_arithmetic_ops.cpp': 'Enter two values: 10 5\nSum: 15\nDiff: 5\nMul: 50\nDiv: 2\nMod: 0',
    '4_sizeof_datatypes.cpp': 'int: 4 bytes\nfloat: 4 bytes\nchar: 1 bytes\ndouble: 8 bytes',
    '5_even_odd.cpp': 'The number 9 is positive.\nThe number 9 is odd.',
    '6_if_statement.cpp': 'The number is strictly positive.',
    '7_smallest_two.cpp': 'Value B (3) is smaller than A (8)',
    '8_largest_three.cpp': 'b is greatest: 20',
    '9_leap_year.cpp': 'Enter year: 2024\n2024 is a Leap Year.',
    '10_calc_switch.cpp': 'Enter operator (+,-,*,/) and 2 numbers: * 6 7\n42',
    '11_print_1_10_for.cpp': '0\n1\n2\n3\n4\n',
    '12_fibonacci_while.cpp': 'Fibonacci series (First 10 terms): \n0 1 1 2 3 5 8 13 21 34 ',
    '13_fibonacci_for.cpp': 'Fibonacci series (First 10 terms): \n0 1 1 2 3 5 8 13 21 34 ',
    '14_fibonacci_while_limit.cpp': 'Fibonacci series (Under value 10): \n0 1 1 2 3 5 8 ',
    '15_fibonacci_for_limit.cpp': 'Fibonacci series (Under value 10): \n0 1 1 2 3 5 8 ',
    '16_prime_check.cpp': 'Enter a number: 29\n29 is Prime.',
    '17_armstrong.cpp': 'Enter a pos integer: 153\n153 is Armstrong.',
    '18_break_continue.cpp': '1 2 3 5 6 7 ',
    '19_array_io.cpp': 'Enter 5 scores: 1 2 3 4 5\nScores: 1 2 3 4 5 ',
    '20_sum_avg_array.cpp': 'Sum: 150, Avg: 30',
    '21_large_small_array.cpp': 'Min: 1, Max: 9',
    '22_matrix_add.cpp': '2 3 \n4 5 \n',
    '23_concat_name.cpp': 'Enter your first name: John\nEnter your last name: Doe\n\nThe full name is: John Doe\nLength of first name : 4\nLength of last name  : 3\nAfter copy & concat  : John Doe\nFirst and last names are different.\n\n--- C++ String Examples ---\nAfter concatenation  : hello world\nLength of result     : 11',
    '24_reverse_string.cpp': 'Enter DNA: ATGC\nReversed: CGTA',
    '25_sum_function.cpp': 'Sum is: 27',
    '26_pass_array_func.cpp': '1 2 3 4 ',
    '27_swap_value.cpp': 'Enter the value of a:\n10\nEnter the value of b:\n20\nBefore swapping: a = 10\t b = 20\nAfter swapping:  a = 20\t b = 10',
    '28_swap_ref.cpp': 'Before swapping: a = 10, b = 20\nAfter swapping:  a = 20, b = 10',
    '29_recursive_sum.cpp': 'Sum to 5: 15',
    '30_recursive_factorial.cpp': 'Factorial 4: 24',
    '31_pointer_basics.cpp': 'Address: 0x7ffd5820ab Value: 10',
    '32_add_pointers.cpp': 'Sum: 11',
    '33_dyn_array.cpp': 'Enter size: 3\n1 2 3 ',
    '34_class_object.cpp': 'Gene name: BRCA1\nMutation rate: 0.052',
    '35_student_class.cpp': 'Student: John, Roll: 101',
    '36_getdata_display.cpp': 'Enter data: \nData: 42',
    '37_factorial_class.cpp': 'Fact 5: 120',
    '38_array_objects.cpp': 'Enter the number of students: 1\n\n--- Enter details of student 1 ---\nEnter student ID   : 1\nEnter student name : Alice\nEnter student marks: 95\n\n--- Student Details ---\nID: 1\tName: Alice\tMarks: 95',
    '39_bank_encapsulation.cpp': 'Bal: 500',
    '40_func_outside_class.cpp': 'Outside class!',
    '41_access_specifiers.cpp': 'Public var: 3\n123',
    '42_static_counter.cpp': 'Count: 2',
    '43_friend_func.cpp': 'The private Secret Key inside the box is: 99824',
    '44_constructors.cpp': 'Creating seq1... \nDefault Constructor called.\nCreating seq2... \nParameterized Constructor called with length: 100.\nCreating seq3 from seq2... \nCopy Constructor duplicated length: 100.',
    '45_copy_constructor.cpp': 'Creating seq1... \nPrimary Sequence initialized randomly...\n\nCreating seq2 by cloning seq1... \nCopy Constructor securely duplicated length: 1500.',
    '46_destructor.cpp': 'Created\nDestroyed\n',
    '47_func_overload.cpp': 'Integer Addition Results: 30\nFloating-Point Addition Results: 8.7',
    '48_unary_overload.cpp': 'Pos: 2',
    '49_binary_overload.cpp': 'First Complex Number: 3.5 + i(2.5)\nSecond Complex Number: 1.5 + i(4.5)\nResult of Addition: 5 + i(7)',
    '50_basic_to_class.cpp': '2h 10m\n',
    '51_single_inheritance.cpp': 'Cell is performing metabolic reactions.\nNeuron is transmitting an electrical impulse.',
    '52_multiple_inheritance.cpp': 'DNA: Storing genetic sequence.\nHistone: Providing structural support.\nChromosome: Replicating during S-phase.',
    '53_multilevel_inheritance.cpp': 'A\nB\nC\n',
    '54_hybrid_inheritance.cpp': 'Device constructor executed.\nDevice powers on successfully.\nScanning document...\nPrinting document...\nDuplicating utilizing scanning and printing flows...',
    '55_hierarchical_inheritance.cpp': 'Cell is dividing.\nMaking food via sunlight.\nCell is dividing.\nAnimal cell moving.',
    '56_runtime_poly.cpp': 'Red Blood Cell',
    '57_virtual_function.cpp': 'Bark!',
    '58_exception_handling.cpp': 'Error: Division by zero!',
    '59_file_handling.cpp': 'Student details successfully written to student_record.txt\n\n--- Student Record Output ---\nName: Siddharth\nRoll Number: 42\nMarks: 95.5',
    '60_deep_shallow_copy.cpp': 'Instantiating Primary Buffer:\nConstructor executed: Memory allocated at 0x22f28a0 (Val: 42)\n\nCloning to Secondary Buffer:\nDeep Copy executed: NEW memory allocated at 0x22fa010 (Val: 42)\n\nTerminating application bounds:',
    '61_templates.cpp': 'Executing Template with Integers: \nResult: 45\n\nExecuting EXACT SAME Template with Floats (Decimals): \nResult: 16.7',
}

# Attach watermarks exactly globally
for key in master_map:
    master_map[key] += "\n\n--- BioAlign-Pro ---"

# construct the JS dict string safely
import json
dict_str = "    exactOutputs: " + json.dumps(master_map, indent=8)

# Replace the block entirely
c = re.sub(r'    exactOutputs:\s*\{[\s\S]*?\}(?=,?\s*resetTerminal:)', lambda m: dict_str, c)

with open(sim_path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Master UI Map deployed globally with watermarks!")

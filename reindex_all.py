import os
import shutil

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"
src_dir = os.path.join(base_dir, "src")

file_map = {
    '1_hello_world.cpp': '1_hello_world.cpp',
    '2_integer_input.cpp': '2_integer_input.cpp',
    '3_arithmetic_ops.cpp': '3_arithmetic_ops.cpp',
    '4_sizeof_datatypes.cpp': '4_sizeof_datatypes.cpp',
    '5_even_odd.cpp': '5_even_odd.cpp',
    '55_if_statement.cpp': '6_if_statement.cpp',
    '56_smallest_two.cpp': '7_smallest_two.cpp',
    '6_largest_three.cpp': '8_largest_three.cpp',
    '7_leap_year.cpp': '9_leap_year.cpp',
    '8_calc_switch.cpp': '10_calc_switch.cpp',
    '9_print_1_10_for.cpp': '11_print_1_10_for.cpp',
    '10_fibonacci_while.cpp': '12_fibonacci_while.cpp',
    '11_fibonacci_for.cpp': '13_fibonacci_for.cpp',
    '12_fibonacci_while_limit.cpp': '14_fibonacci_while_limit.cpp',
    '13_fibonacci_for_limit.cpp': '15_fibonacci_for_limit.cpp',
    '14_prime_check.cpp': '16_prime_check.cpp',
    '15_armstrong.cpp': '17_armstrong.cpp',
    '16_break_continue.cpp': '18_break_continue.cpp',
    '17_array_io.cpp': '19_array_io.cpp',
    '18_sum_avg_array.cpp': '20_sum_avg_array.cpp',
    '19_large_small_array.cpp': '21_large_small_array.cpp',
    '20_matrix_add.cpp': '22_matrix_add.cpp',
    '21_concat_name.cpp': '23_concat_name.cpp',
    '22_reverse_string.cpp': '24_reverse_string.cpp',
    '23_sum_function.cpp': '25_sum_function.cpp',
    '24_pass_array_func.cpp': '26_pass_array_func.cpp',
    '25_swap_value.cpp': '27_swap_value.cpp',
    '26_swap_ref.cpp': '28_swap_ref.cpp',
    '27_recursive_sum.cpp': '29_recursive_sum.cpp',
    '28_recursive_factorial.cpp': '30_recursive_factorial.cpp',
    '29_pointer_basics.cpp': '31_pointer_basics.cpp',
    '30_add_pointers.cpp': '32_add_pointers.cpp',
    '31_dyn_array.cpp': '33_dyn_array.cpp',
    '32_class_object.cpp': '34_class_object.cpp',
    '33_student_class.cpp': '35_student_class.cpp',
    '34_getdata_display.cpp': '36_getdata_display.cpp',
    '35_factorial_class.cpp': '37_factorial_class.cpp',
    '36_array_objects.cpp': '38_array_objects.cpp',
    '37_bank_encapsulation.cpp': '39_bank_encapsulation.cpp',
    '38_func_outside_class.cpp': '40_func_outside_class.cpp',
    '39_access_specifiers.cpp': '41_access_specifiers.cpp',
    '40_static_counter.cpp': '42_static_counter.cpp',
    '41_friend_func.cpp': '43_friend_func.cpp',
    '42_constructors.cpp': '44_constructors.cpp',
    'copy_constructor.cpp': '45_copy_constructor.cpp', 
    '43_destructor.cpp': '46_destructor.cpp',
    '44_func_overload.cpp': '47_func_overload.cpp',
    '45_unary_overload.cpp': '48_unary_overload.cpp',
    '46_binary_overload.cpp': '49_binary_overload.cpp',
    '47_basic_to_class.cpp': '50_basic_to_class.cpp',
    '48_single_inheritance.cpp': '51_single_inheritance.cpp',
    '49_multiple_inheritance.cpp': '52_multiple_inheritance.cpp',
    '50_multilevel_inheritance.cpp': '53_multilevel_inheritance.cpp',
    '51_hybrid_inheritance.cpp': '54_hybrid_inheritance.cpp',
    '52_runtime_poly.cpp': '55_runtime_poly.cpp',
    '53_exception_handling.cpp': '56_exception_handling.cpp',
    '54_file_handling.cpp': '57_file_handling.cpp',
    '57_deep_shallow_copy.cpp': '58_deep_shallow_copy.cpp',
    '58_templates.cpp': '59_templates.cpp'
}

tmp_dir = os.path.join(base_dir, 'tmp_build')
os.makedirs(tmp_dir, exist_ok=True)

for old, new in file_map.items():
    old_p = os.path.join(base_dir, old)
    if os.path.exists(old_p):
        os.rename(old_p, os.path.join(tmp_dir, new))

for f in os.listdir(tmp_dir):
    os.rename(os.path.join(tmp_dir, f), os.path.join(base_dir, f))
os.rmdir(tmp_dir)

print("Renaming finished!")

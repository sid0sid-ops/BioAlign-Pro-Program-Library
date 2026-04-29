// =========================================================================
// 🖨️ MANUAL DIAGRAM OVERRIDES
// =========================================================================
// Paste your exact Mermaid code here for any program you want to manually design!
// 
// Ensure the filename exactly matches the ones in `src/data.js`.
// You DO NOT need to write any `classDef` blocks! The engine automatically applies the theme natively.
//
// Example:
// "filename.cpp": \`flowchart TD ... \`,
// =========================================================================

window.__MANUAL_DIAGRAMS__ = {

    // ── UNIT I: BASICS & ARRAYS ──────────────────────────────────────────────

    "1_hello_world.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Include iostream"]:::process
    C["Print Hello World"]:::process
    D(["End"]):::startEnd

    A --> B --> C --> D`,

    "2_integer_input.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["Store n in memory"]:::process
    D[/"Print n"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "3_arithmetic_ops.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["sum = a + b"]:::process
    D["diff = a - b"]:::process
    E["prod = a * b"]:::process
    F["quot = a / b"]:::process
    G["mod = a % b"]:::process
    H[/"Print all results"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "4_sizeof_datatypes.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["List int, float, double, char, bool"]:::process
    C[/"Print sizeof each type"/]:::output
    D(["End"]):::startEnd

    A --> B --> C --> D`,

    "5_even_odd.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C{"n % 2 == 0"}:::decision
    D[/"Print Even"/]:::output
    E[/"Print Odd"/]:::output
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> F
    C -- No --> E --> F`,

    "6_if_statement.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C{"n > 0"}:::decision
    D[/"Print Positive"/]:::output
    E(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E
    C -- No --> E`,

    "7_smallest_two.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C{"a < b"}:::decision
    D[/"Print a is smallest"/]:::output
    E[/"Print b is smallest"/]:::output
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> F
    C -- No --> E --> F`,

    "8_largest_three.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize a=10, b=20, c=3"]:::process
    C{"a > b AND a > c"}:::decision
    D["Print a is greatest"]:::process
    E{"b > a AND b > c"}:::decision
    F["Print b is greatest"]:::process
    G["Print c is greatest"]:::process
    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> H
    C -- No --> E
    E -- Yes --> F --> H
    E -- No --> G --> H`,

    "9_leap_year.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input year"/]:::input
    C{"year % 400 == 0"}:::decision
    D{"year % 100 == 0"}:::decision
    E{"year % 4 == 0"}:::decision
    F[/"Print Leap Year"/]:::output
    G[/"Print Not Leap Year"/]:::output
    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> F --> H
    C -- No --> D
    D -- Yes --> G --> H
    D -- No --> E
    E -- Yes --> F
    E -- No --> G`,

    "10_calc_switch.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input op, a, b"/]:::input
    C{"Operator?"}:::decision

    D["Print a + b"]:::process
    E["Print a - b"]:::process
    F["Print a * b"]:::process

    G{"b != 0"}:::decision
    H["Print a / b"]:::process
    I["Print Div by 0"]:::process

    J["Print Invalid op"]:::process
    K(["End"]):::startEnd

    A --> B --> C

    C -- "+" --> D --> K
    C -- "-" --> E --> K
    C -- "*" --> F --> K

    C -- "/" --> G
    G -- Yes --> H --> K
    G -- No --> I --> K

    C -- "Other" --> J --> K`,

    "11_print_1_10_for.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["i = 1"]:::process
    C{"i <= 10"}:::decision
    D["Print i"]:::process
    E["i = i + 1"]:::process
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E --> C
    C -- No --> F`,

    "12_fibonacci_while.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize count=10, a=0, b=1"]:::process
    C["Display Fibonacci Series"]:::process
    D{"count > 0"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I["count = count - 1"]:::process
    J(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> I --> D
    D -- No --> J`,

    "13_fibonacci_for.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Init a=0, b=1, i=0"]:::process
    C{"i < 10"}:::decision
    D["Print a"]:::process
    E["next = a + b"]:::process
    F["a = b"]:::process
    G["b = next"]:::process
    H["i = i + 1"]:::process
    I(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E --> F --> G --> H --> C
    C -- No --> I`,

    "14_fibonacci_while_limit.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 0, b = 1"]:::process
    C["Print heading"]:::process
    D{"a < 10"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> D
    D -- No --> I`,

    "15_fibonacci_for_limit.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize a = 0, b = 1"]:::process
    C["Print heading"]:::process
    D{"a < 10"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> D
    D -- No --> I`,

    "16_prime_check.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["isPrime = true"]:::process
    D{"n <= 1"}:::decision
    E["isPrime = false"]:::process
    F["i = 2"]:::process
    G{"i * i <= n"}:::decision
    H{"n % i == 0"}:::decision
    I["isPrime = false"]:::process
    J["i = i + 1"]:::process
    K{"isPrime"}:::decision
    L["Print Prime"]:::process
    M["Print Not Prime"]:::process
    N(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> K
    D -- No --> F --> G
    G -- Yes --> H
    H -- Yes --> I --> K
    H -- No --> J --> G
    G -- No --> K
    K -- Yes --> L --> N
    K -- No --> M --> N`,

    "17_armstrong.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["num = n, sum = 0"]:::process
    D{"num != 0"}:::decision
    E["digit = num % 10"]:::process
    F["sum = sum + digit^3"]:::process
    G["num = num / 10"]:::process
    H{"sum == n"}:::decision
    I["Print Armstrong"]:::process
    J["Print Not Armstrong"]:::process
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> D
    D -- No --> H
    H -- Yes --> I --> K
    H -- No --> J --> K`,

    "18_break_continue.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["i = 1"]:::process
    C{"i <= 10"}:::decision
    D{"i == 4"}:::decision
    E["i = i + 1"]:::process
    F{"i == 8"}:::decision
    G["Print i"]:::process
    H["i = i + 1"]:::process
    I(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D
    D -- Yes --> E --> C
    D -- No --> F
    F -- Yes --> I
    F -- No --> G --> H --> C
    C -- No --> I`,

    "19_array_io.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare array arr size 5"]:::process
    C["i = 0"]:::process
    D{"i < 5"}:::decision
    E["Input arr[i]"]:::process
    F["i = i + 1"]:::process

    G["Display Scores"]:::process
    H["i = 0"]:::process
    I{"i < 5"}:::decision
    J["Print arr[i]"]:::process
    K["i = i + 1"]:::process

    L(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L`,

    "20_sum_avg_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {10,20,30,40,50}"]:::process
    C["sum = 0, i = 0"]:::process
    D{"i < 5"}:::decision
    E["sum = sum + arr[i]"]:::process
    F["i = i + 1"]:::process
    G["Compute avg = sum / 5"]:::process
    H["Print Sum and Avg"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G --> H --> I`,

    "21_large_small_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {3,1,9,7,5}"]:::process
    C["min = arr[0], max = arr[0], i = 1"]:::process
    D{"i < 5"}:::decision
    E{"arr[i] > max"}:::decision
    F["max = arr[i]"]:::process
    G{"arr[i] < min"}:::decision
    H["min = arr[i]"]:::process
    I["i = i + 1"]:::process
    J["Print Min and Max"]:::process
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E
    E -- Yes --> F --> G
    E -- No --> G
    G -- Yes --> H --> I
    G -- No --> I
    I --> D
    D -- No --> J --> K`,

    "22_matrix_add.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare A, B, C as 2x2 matrices"]:::process
    C["i = 0"]:::process
    D{"i < 2"}:::decision
    E["j = 0"]:::process
    F{"j < 2"}:::decision
    G["C[i][j] = A[i][j] + B[i][j]"]:::process
    H["j = j + 1"]:::process
    I["i = i + 1"]:::process
    J[/"Print matrix C"/]:::output
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F
    F -- Yes --> G --> H --> F
    F -- No --> I --> D
    D -- No --> J --> K`,

    "23_concat_name.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input firstName, lastName"/]:::input
    C["fullName = firstName + lastName"]:::process
    D[/"Print fullName"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "24_reverse_string.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input string s"/]:::input
    C["i = length(s) - 1"]:::process
    D{"i >= 0"}:::decision
    E["Print s[i]"]:::process
    F["i = i - 1"]:::process
    G(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G`,

    // ── UNIT II: FUNCTIONS & POINTERS ───────────────────────────────────────

    "25_sum_function.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["Call sum(a, b)"]:::process
    D["result = a + b"]:::process
    E["Return result"]:::process
    F[/"Print result"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "26_pass_array_func.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {10,20,30,40,50}"]:::process
    C["Call printArray(arr, 5)"]:::process
    D["i = 0"]:::process
    E{"i < 5"}:::decision
    F[/"Print arr[i]"/]:::output
    G["i = i + 1"]:::process
    H(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H`,

    "27_swap_value.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 5, b = 10"]:::process
    C["Call swap(a, b)"]:::process
    D["temp = x, x = y, y = temp"]:::process
    E[/"Print a, b (UNCHANGED)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "28_swap_ref.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 5, b = 10"]:::process
    C["Call swap(&a, &b)"]:::process
    D["temp = *x, *x = *y, *y = temp"]:::process
    E[/"Print a, b (SWAPPED)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "29_recursive_sum.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["Call sum(n)"]:::process
    D{"n == 0"}:::decision
    E["Return 0"]:::process
    F["Return n + sum(n-1)"]:::process
    G[/"Print result"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> G --> H
    D -- No --> F --> C`,

    "30_recursive_factorial.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Call fact(4)"]:::process

    C{"n <= 1?"}:::decision
    D["Return 1"]:::process

    E["Call fact(n-1)"]:::process
    F["Multiply n * result"]:::process
    G["Return result"]:::process

    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> H
    C -- No --> E --> F --> G --> C`,

    "31_pointer_basics.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["int x = 10"]:::process
    C["int *p = &x"]:::process
    D[/"Print x, &x, *p, p"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "32_add_pointers.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["int a = 5, b = 10"]:::process
    C["int *p = &a, *q = &b"]:::process
    D["sum = *p + *q"]:::process
    E[/"Print sum"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "33_dyn_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input size n"/]:::input
    C["Allocate array with new int[n]"]:::process
    D["i = 0"]:::process
    E{"i < n"}:::decision
    F[/"Input arr[i]"/]:::input
    G["i = i + 1"]:::process
    H["i = 0"]:::process
    I{"i < n"}:::decision
    J[/"Print arr[i]"/]:::output
    K["i = i + 1"]:::process
    L["delete[] array"]:::process
    M(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L --> M`,

    // ── UNIT III: OOP ────────────────────────────────────────────────────────

    "34_class_object.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class GfG"]:::process
    C["Create object obj"]:::process
    D["obj.printMsg()"]:::process
    E[/"Print message"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "35_student_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Student"]:::process
    C["Create object s1"]:::process
    D["s1.setData(name, marks)"]:::process
    E["s1.display()"]:::process
    F[/"Print name, marks"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "36_getdata_display.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with getData() and display()"]:::process
    C["Create object obj"]:::process
    D["obj.getData()"]:::process
    E[/"Input data"/]:::input
    F["obj.display()"]:::process
    G[/"Print data"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "37_factorial_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Factorial"]:::process
    C[/"Input n"/]:::input
    D["Create object f"]:::process
    E["f.compute(n)"]:::process
    F{"n <= 1"}:::decision
    G["Return 1"]:::process
    H["Return n * compute(n-1)"]:::process
    I[/"Print result"/]:::output
    J(["End"]):::startEnd

    A --> B --> C --> D --> E --> F
    F -- Yes --> G --> I --> J
    F -- No --> H --> E`,

    "38_array_objects.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Student"]:::process
    C["Create array of 3 Student objects"]:::process
    D["i = 0"]:::process
    E{"i < 3"}:::decision
    F["Input student[i] data"]:::process
    G["i = i + 1"]:::process
    H["i = 0"]:::process
    I{"i < 3"}:::decision
    J[/"Display student[i]"/]:::output
    K["i = i + 1"]:::process
    L(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L`,

    "39_bank_encapsulation.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class BankAccount (private balance)"]:::process
    C["Create object acct"]:::process
    D["acct.deposit(500)"]:::process
    E["acct.withdraw(200)"]:::process
    F[/"acct.getBalance()"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "40_func_outside_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare class with method inside"]:::process
    C["Define method outside using ::"]:::process
    D["Create object obj"]:::process
    E["obj.display()"]:::process
    F[/"Print output"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "41_access_specifiers.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with public, private, protected"]:::process
    C["Create object obj"]:::process
    D["Access public member directly"]:::process
    E["Access private via public method"]:::process
    F[/"Print values"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "42_static_counter.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with static int count = 0"]:::process
    C["Create obj1 → count = 1"]:::process
    D["Create obj2 → count = 2"]:::process
    E["Create obj3 → count = 3"]:::process
    F[/"Print count = 3"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "43_friend_func.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with private data"]:::process
    C["Declare friend function"]:::process
    D["Create object obj"]:::process
    E["Call friend function with obj"]:::process
    F["Access private members directly"]:::process
    G[/"Print result"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "44_constructors.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Default + Param constructors"]:::process
    C["Create obj1 (Default ctor fires)"]:::process
    D["Create obj2(10) (Param ctor fires)"]:::process
    E[/"Print obj1 and obj2 values"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "45_copy_constructor.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Copy Constructor"]:::process
    C["Create original obj1"]:::process
    D["Create obj2 = obj1 (Copy ctor fires)"]:::process
    E[/"Print obj1 and obj2 (same values)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "46_destructor.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Destructor"]:::process
    C["Create object obj"]:::process
    D[/"obj constructor fires"/]:::output
    E["obj goes out of scope"]:::process
    F[/"Destructor fires automatically"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "47_func_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define add(int, int)"]:::process
    C["Define add(float, float)"]:::process
    D["Define add(int, int, int)"]:::process
    E["Call add(2, 3)"]:::process
    F["Call add(2.5, 3.5)"]:::process
    G["Call add(1, 2, 3)"]:::process
    H[/"Print 5, 6.0, 6"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "48_unary_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Counter with val = 0"]:::process
    C["Overload ++ operator"]:::process
    D["Create object c"]:::process
    E["++c  (operator fires)"]:::process
    F["val = val + 1"]:::process
    G[/"Print val"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "49_binary_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Complex (real, imag)"]:::process
    C["Overload + operator"]:::process
    D["Create c1(3,4), c2(1,2)"]:::process
    E["c3 = c1 + c2"]:::process
    F["real = c1.real + c2.real"]:::process
    G["imag = c1.imag + c2.imag"]:::process
    H[/"Print c3: 4 + 6i"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "50_basic_to_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with converting constructor"]:::process
    C["int x = 42"]:::process
    D["MyClass obj = x (auto-converts)"]:::process
    E[/"Print obj value"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "51_single_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class Animal"]:::process
    C["Define Derived class Dog extends Animal"]:::process
    D["Create Dog object d"]:::process
    E["d.speak() (Base method)"]:::process
    F["d.bark() (Derived method)"]:::process
    G[/"Print output"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "52_multiple_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (featA)"]:::process
    C["Define class B (featB)"]:::process
    D["Define class C extends A and B"]:::process
    E["Create object c"]:::process
    F["c.featA(), c.featB()"]:::process
    G[/"Print both features"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "53_multilevel_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (Grandparent)"]:::process
    C["Define class B extends A (Parent)"]:::process
    D["Define class C extends B (Child)"]:::process
    E["Create object c"]:::process
    F["c.featureA(), c.featureB(), c.featureC()"]:::process
    G[/"Print all features"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "54_hybrid_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (Base)"]:::process
    C["Define class B extends A"]:::process
    D["Define class C extends A"]:::process
    E["Define class D extends B and C"]:::process
    F["Create object d"]:::process
    G[/"d.show() (hybrid features)"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "55_hierarchical_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class Organism"]:::process
    C["Define Bacteria extends Organism"]:::process
    D["Define Virus extends Organism"]:::process
    E["Create Bacteria b, Virus v"]:::process
    F["b.info(), v.info()"]:::process
    G[/"Print both outputs"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "56_runtime_poly.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class with virtual speak()"]:::process
    C["Define Derived Dog and Cat classes"]:::process
    D["Base *ptr = new Dog()"]:::process
    E["ptr->speak() → Dog sound"]:::process
    F["ptr = new Cat()"]:::process
    G["ptr->speak() → Cat sound"]:::process
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "57_virtual_function.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base with virtual display()"]:::process
    C["Define Derived overrides display()"]:::process
    D["Base *ptr = new Derived()"]:::process
    E["ptr->display()"]:::process
    F{"Late binding resolves at runtime"}:::decision
    G[/"Calls Derived::display()"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "58_exception_handling.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["try block"]:::process
    D{"b == 0"}:::decision
    E["throw exception"]:::process
    F["result = a / b"]:::process
    G[/"Print result"/]:::output
    H["catch block"]:::process
    I[/"Print Div by 0 error"/]:::output
    J(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> H --> I --> J
    D -- No --> F --> G --> J`,

    "59_file_handling.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Open file for writing (ofstream)"]:::process
    C["Write sequence data to file"]:::process
    D["Close file"]:::process
    E["Open file for reading (ifstream)"]:::process
    F{"EOF?"}:::decision
    G[/"Read and print line"/]:::output
    H["Close file"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F
    F -- No --> G --> F
    F -- Yes --> H --> I`,

    "60_deep_shallow_copy.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Create obj1 with heap data"]:::process
    C["Shallow copy: obj2 = obj1 (same pointer)"]:::process
    D["Modify obj1 data"]:::process
    E[/"obj2 also changes (DANGER)"/]:::output
    F["Deep copy: obj3 with new memory"]:::process
    G["Modify obj1 data"]:::process
    H[/"obj3 unchanged (SAFE)"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "61_templates.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define template function add(T a, T b)"]:::process
    C["add(3, 4) → int version"]:::process
    D["add(2.5, 1.5) → float version"]:::process
    E[/"Print 7, 4.0"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`

};

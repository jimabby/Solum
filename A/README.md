The program solves the Mystic Waves problem. 
In the land of Elaria, a young mage named Nia experiments with a magical energy value x.
She casts a spell that produces a sequence of n waves of energy — alternating between x
and −x, starting with x.
For example, if n = 5, the sequence of energies will be: x, −x, x, −x, x
Nia wants to know the total magical energy after all n waves.
Input
The first line contains an integer t (1 ≤ t ≤ 100) — the number of test cases.
Each of the following t lines contains two integers x and n (1 ≤ x, n ≤ 10).
Output
For each test case, output a single integer — the total energy after all n waves.

How to Run:
1. Compile:
javac MysticWves.java
2. Run:
java MysticWaves

How the program works:
1. The user is asked to input the number of test cases (t).
2. For each test case, the user enters:
    x → the energy value
    n → number of waves
3. The program calculates the alternating sum. The result is printed immediately for each test case.
4. The program automatically ends after processing all t test cases.
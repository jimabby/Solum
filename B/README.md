The program solves the CargoCraft Fleet problem. 
In the futuristic world of Aerion, the CargoCraft company operates a fleet of transport
vehicles designed to carry supplies between colonies.
There are two types of crafts in the fleet:
• Type A crafts have 4 propulsion units,
• Type B crafts have 6 propulsion units.
You receive a report that the fleet’s crafts together have n propulsion units in total.
However, the report doesn’t specify how many crafts of each type there are.
Your task is to determine how many crafts the fleet could possibly have — that is, the
minimum and maximum number of crafts that can make up a total of n propulsion units.
If the total n cannot be made using only crafts of Type A and Type B, report that it’s
impossible.

How to Run:
1. Compile:
javac CargoCraft.java
2. Run:
java CargoCraft

How the program works:
1. The user is asked to input the number of test cases (t).
2. For each test case, the user enters:
    n → total number of propulsion units
3. The program calculates the minimum and maximum possible number of crafts that can be formed using:
      Type A crafts (4 units each)
      Type B crafts (6 units each)
    The result is printed immediately for each test case.
4. The program automatically ends after processing all t test cases.
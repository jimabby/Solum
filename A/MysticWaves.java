import java.util.*;

public class MysticWaves {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // Let the user enter the number of test cases
    System.out.print("Please enter the number of test cases: ");
    int t = sc.nextInt();

    //Loop through each test cases
    for (int i = 0; i < t; i ++) {
      //Let user enter x and n
      System.out.print("Enter x and n: ");
      int x = sc.nextInt();
      int n = sc.nextInt();
      int sum = 0;

      //Build the sequence
      for (int j = 1; j <=n; j++){
        if (j % 2 == 0){
          sum -= x;
        } else {
          sum += x;
        }
      }

      //print the total energy
      System.out.print("Total energy: " + sum + "\n");
    }

    sc.close();
  }
}
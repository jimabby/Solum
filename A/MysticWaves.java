import java.util.*;

public class MysticWaves {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Please enter the number of test cases: ");
    int t = sc.nextInt();

    for (int i = 0; i < t; i ++) {
      System.out.print("Enter x and n: ");
      int x = sc.nextInt();
      int n = sc.nextInt();
      int sum = 0;

      for (int j = 1; j <=n; j++){
        if (j % 2 == 0){
          sum -= x;
        } else {
          sum += x;
        }
      }

      System.out.print("Total energy: " + sum + "\n");
    }

    sc.close();
  }
}
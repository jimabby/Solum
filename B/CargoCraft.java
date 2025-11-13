import java.util.*;

public class CargoCraft {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // Let the user enter the number of test cases
    System.out.print("Please enter the number of test cases: ");
    int t = sc.nextInt();

    //Loop through each test cases
    for (int test = 0; test < t; test ++) {
      //Let user enter n
      System.out.print("Enter n (the total number of propulsion units): ");
      long n = sc.nextLong();
      long min = Long.MAX_VALUE;
      long max = -1;

      //Build the sequence
      if (n < 4 || n % 2 == 1){
        System.out.println(-1);
        continue;
      }

      //find the maximum number of crafts
      for (int i = 0; i <= 1; i ++){
        long remaining = n - 6L * i;

        if (remaining % 4 != 0){
          continue;
        }
        if (remaining < 0){
          continue;
        }

        long a = remaining / 4;
        long b = i + a;

        if (b > max) {
          max = b;
        }
      }

      //find the minimum number of crafts 
      for (int j = 0; j <= 2; j ++){
        long remaining = n - 4L * j;

        if (remaining % 6 != 0){
          continue;
        }
        if (remaining < 0){
          continue;
        }

        long a = remaining / 6;
        long b = j + a;

        if (b < min) {
          min = b;
        }
      }
      
      if (max == -1){
        System.out.println(-1);
      }else {
        //print min and max
        System.out.print(min + " " + max + "\n");
      }
    }

    sc.close();
  }
}

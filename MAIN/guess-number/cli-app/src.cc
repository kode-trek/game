/*
 The MIT License (MIT)
 Copyright (c) 2023 Emeer Adhamian (github.com/kode-trek)
 https://raw.githubusercontent.com/kode-trek/game/main/LICENSE
*/

int main() {
 /* variable(s)
  [v1] generated random number (1~100)
  [v2] player's guess
  [c] player's move(s)
 */
 seedr();
 int v1 = rand() % 101 + 1;
 string v2 = "";
 int c = 0;
 // message(s)
 string title = mark("Guess My Number", "blue") +
 "\n" + mark("===============", "blue") + "\n"
 "I have a number between 1 and 100.""\n"
 "Can you guess my number?""\n";
 string done = mark("EXCELLENT!", "red") + " That was my number";
 string close = "That's " + mark("CLOSE!", "red") + "\n";
 string low = "Too " + mark("LOW!", "red") + "\n";
 string high = "Too " + mark("HIGH!", "red") + "\n";
 // op(s)
 cout << title << endl;
 while (true) {
  c++;
  note("num: ");
  cin >> v2;
  if (str2num(v2) == v1) {
   cout << done + " after " + mark(str(c), "yellow") + " move(s)." << endl;
   exit(0);
  }
  else if (abs(v1 - str2num(v2)) <= 10) cout << close << endl;
  else if (str2num(v2) < v1) cout << low << endl;
  else if (str2num(v2) > v1) cout << high << endl;
 }
}

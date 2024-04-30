#include "proc_f1.hh" //tot
#include "proc_f4.hh" //split beans
#include "proc_f5.hh" //card-display
#include "proc_fn.hh" //result

int main() {
 /* variable(s)
 [v1] action
 [v2] split
 [v3] play-permission
 [v5] dealer's 1st card
 [v6] dealer's next card
 [v7] player's 1st card
 [v8] player's next card
 [v9] dealer's all cards
 [v10] player's all cards
 */
 string v1 = "";
 bool v3 = true;
 seedr();
 wait(0.1);
 int v5 = abs(rand() % 10 + 1);
 wait(0.1);
 int v6 = abs(rand() % 10 + 1);
 wait(0.1);
 int v7 = abs(rand() % 10 + 1);
 wait(0.1);
 int v8 = abs(rand() % 10 + 1);
 vector<int> v9 = {};
 vector<int> v10 = {};
 vector<int> v13 = {};
 // op(s)
 v9 = f4(v9, v10, v5, v6, v7, v8)[0];
 v10 = f4(v9, v10, v5, v6, v7, v8)[1];
 f5(v9, v10, false);
 // player-turn
 while (v3) {
  note("\n""CMD> ");
  cin >> v1;
  if (str2num(v1) == 1) {
   wait(0.1);
   v8 = abs(rand() % 10 + 1);
   v10.push_back(v8);
   f5(v9, v10, false);
   if (f1(v10) >= 21) break;
  }
  if (str2num(v1) == 2) v3 = false;
 }
 // dealer-turn
 while (f1(v9) <= 21) {
  wait(0.1);
  v6 = abs(rand() % 10 + 1);
  v9.push_back(v6);
  f5(v9, v10, true);
  if (f1(v9) > 16) break;
 }
 fn(f1(v9), f1(v10));
}

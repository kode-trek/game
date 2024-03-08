bool fn(int arg1, int arg2) {
 /* variable(s)
 [v1] dealer's score
 [v2] player's score
 */
 int v1 = arg1;
 int v2 = arg2;
 // message(s)
 string msg1 = mark("Black Jack!", "yellow");
 string msg2 = mark("Player wins!", "yellow");
 string msg3 = mark("Dealer wins!", "yellow");
 string msg4 = mark("Bust!", "yellow");
 string msg5 = mark("Push!", "yellow");
 // op(s)
 if ((v1 != v2) and (v2 == 21)) {
  cout << msg1 << endl;
  return true;
 }
 if ((v1 > 21) and (v2 <= 21)) cout << msg2 << endl;
 if ((v1 <= 21) and (v2 > 21)) cout << msg4 << endl; 
 //
 if ((v1 > 21) and (v2 > 21) and (v1 < v2)) cout << msg2 << endl;
 if ((v1 <= 21) and (v2 < 21) and (v1 < v2)) cout << msg2 << endl;
 if ((v1 > 21) and (v2 > 21) and (v1 > v2)) cout << msg3 << endl;
 if ((v1 <= 21) and (v2 < 21) and (v1 > v2)) cout << msg3 << endl;
 //
 if (v1 == v2) cout << msg5 << endl;
 return true;
}

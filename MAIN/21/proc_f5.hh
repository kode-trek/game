void f5(vector<int> arg1, vector<int> arg2, bool arg3) {
 /* variable(s)
 [v1] dealer's all cards
 [v2] player's all cards
 [v3] reveal dealer's 1st card
 */
 vector<int> v1 = arg1;
 vector<int> v2 = arg2;
 bool v3 = arg3;
 // op(s)
 sys("clear");
 if (not v3) {
  cout << mark("[]""\t", "blue") + "[DEALER] ""? " + str(v1[1]) << endl;
  cout << mark("[" + str(f1(v2)) + "]""\t", "blue") + "[PLAYER] ";
  for (int i = 0; i < v2.size(); i++) cout << v2[i] << " ";
  cout <<
  "\n""==============================""\n"
  "1. hit""\n"
  "2. stand"
  << endl;
 }
 if (v3) {
  cout << mark("[" + str(f1(v1)) + "]""\t", "blue") + "[DEALER] ";
  for (int i = 0; i < v1.size(); i++) cout << v1[i] << " ";
  cout << endl;
  cout << mark("[" + str(f1(v2)) + "]""\t", "blue") + "[PLAYER] ";
  for (int i = 0; i < v2.size(); i++) cout << v2[i] << " ";
  cout <<
  "\n""==============================""\n"
  "1. hit""\n"
  "2. stand"
  << endl;
 }
}

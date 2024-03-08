int f1(vector<int> arg1) {
 /* variable(s)
 [v1] all cards
 [v2] total score
 */
 vector<int> v1 = arg1;
 int v2 = 0;
 // op(s)
 for (int i = 0; i < v1.size(); i++) v2 += v1[i];
 return v2;
}

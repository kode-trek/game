vector<vector<int>> f4(
vector<int> arg1,
vector<int> arg2,
int arg3,
int arg4,
int arg5,
int arg6
) {
 /* variable(s)
 [v1] dealer's all cards
 [v2] player's all cards
 [v3] dealer's 1st card
 [v4] dealer's next card
 [v5] player's 1st card
 [v6] player's next card
 */
 vector<int> v1 = arg1;
 vector<int> v2 = arg2;
 int v3 = arg3;
 int v4 = arg4;
 int v5 = arg5;
 int v6 = arg6;
 // op(s)
 v1.push_back(v3);
 v1.push_back(v4);
 v2.push_back(v5);
 v2.push_back(v6);
 return {v1, v2};
}

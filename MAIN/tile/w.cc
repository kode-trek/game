const int SIZE = 3; // Size of the grid

void printGrid(int grid[][3]) {
 for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) cout << grid[i][j] << " ";
  cout << endl;
 }
}

bool checkGrid(int grid[][3], int pattern[][3]) {
 for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++)
   if (grid[i][j] != pattern[i][j])
    return false;
 }
 return true;
}

vector<int> mkInitGrid() {
 string hist = "";
 vector<int> IG = {};
 int tmp = rand() % 9;
 while (IG.size() != 9) {
  while (has(hist, str(tmp))) tmp = rand() % 9;
  IG.push_back(tmp);
  hist += str(tmp);
  tmp = rand() % 9;
 }
 return IG;
}

int main() {
 srand(time(0));
 int pattern[SIZE][SIZE] = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 0}
 };

 int grid[3][3];
 int c = 0;
 vector<int> v = mkInitGrid();
 for (int i = 0; i < 3; i++)
  for (int j = 0; j < 3; j++) {
   grid[i][j] = v[c];
   c++;
  }

 cout << "pattern:" << endl;
 printGrid(pattern);
 cout << "initial grid:" << endl;
 printGrid(grid);

 int moves = 0;
 while (!checkGrid(grid, pattern)) {
  int row, col;
  cout << "row and col: ";
  cin >> row >> col;

  if (row < 0 || row >= 3 || col < 0 || col >= 3) {
   cout << "invalid position." << endl;
   continue;
  }
  if (grid[row][col] == 0) {
   cout << "there is no number to swap." << endl;
   continue;
  }
  for (int i = 0; i < 3; i++) {
   for (int j = 0; j < 3; j++) {
    if (grid[i][j] == 0) {
     grid[i][j] = grid[row][col];
     grid[row][col] = 0;
     moves++;
     break;
    }
   }
  }
  cout << "updated grid:" << endl;
  printGrid(grid);
 }
 cout << "Congrats! You solved the puzzle in " << moves << " moves." << endl;
}

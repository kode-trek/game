#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

const int SIZE = 3; // Size of the grid

void printGrid(int grid[][SIZE])
{
    // Print the grid
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            cout << grid[i][j] << " ";
        }
        cout << endl;
    }
}

bool checkGrid(int grid[][SIZE], int pattern[][SIZE])
{
    // Check if the grid matches the pattern
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            if (grid[i][j] != pattern[i][j])
            {
                return false;
            }
        }
    }
    return true;
}

int main()
{
    // Set random seed based on current time
    srand(time(0));

    // Define the pattern
    int pattern[SIZE][SIZE] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 0}
    };

    // Initialize the grid with random numbers
    int grid[SIZE][SIZE];
    for (int i = 0; i < SIZE; i++)
    {
        for (int j = 0; j < SIZE; j++)
        {
            grid[i][j] = rand() % 9 + 1;
        }
    }

    // Print the initial grid
    cout << "Swap the numbers in the grid to form the following pattern:" << endl;
    printGrid(pattern);
    cout << "Initial grid:" << endl;
    printGrid(grid);

    // Play the game
    int moves = 0;
    while (!checkGrid(grid, pattern))
    {
        // Ask the user for the position of the number to swap
        int row, col;
        cout << "Enter the row and column of the number to swap: ";
        cin >> row >> col;

        // Check if the position is valid
        if (row < 0 || row >= SIZE || col < 0 || col >= SIZE)
        {
            cout << "Invalid position. Try again." << endl;
            continue;
        }

        // Swap the number with the empty space (0)
        if (grid[row][col] == 0)
        {
            cout << "There is no number to swap. Try again." << endl;
            continue;
        }
        for (int i = 0; i < SIZE; i++)
        {
            for (int j = 0; j < SIZE; j++)
            {
                if (grid[i][j] == 0)
                {
                    grid[i][j] = grid[row][col];
                    grid[row][col] = 0;
                    moves++;
                    break;
                }
            }
        }

        // Print the updated grid
        cout << "Updated grid:" << endl;
        printGrid(grid);
    }

    // Game over
    cout << "Congratulations! You solved the puzzle in " << moves << " moves." << endl;

    return 0;
}


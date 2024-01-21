---
Title: 'Minimax algorithm'
Description: 'Minimax algortihm is a recursive algorithm used in decision making and game theory.'
Subjects:
  - 'AI'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Algorithms'
  - 'Graphs'
  - 'Graph Search'
CatalogContent:
  - 'paths/data-science'
---

The **minimax algorithm** is a fundamental concept in artificial intelligence used for decision making in games and other scenarios.
It is widely used in two-player games where players alternate turns, such as tic-tac-toe, chess, backgammon, etc. 
In these games, each player wants to make the best or most optimal move to maximize their chances of winning, while also trying to minimize their opponent's chances. Therefore, the algorithm's name is a combination of two words: minimize and maximize. The minimax algorithm helps the computer or AI decide its next move by considering all possible moves it can make and all possible responses from the opponent. It does this by simulating the game's future moves and outcomes.

## Implementation 

The minimax algorithm utilizes a depth-first search approach to thoroughly explore the entire game tree. The minimax algorithm proceeds down to the terminal node of the tree and then backtracks the tree as the [recursion] (https://www.codecademy.com/resources/docs/python/recursion). [`Depth-First Search`](https://www.codecademy.com/resources/docs/ai/search-algorithms/depth-first-search)

![Depth-First Search example](https://raw.githubusercontent.com/Codecademy/docs/main/media/Depth-First-Search-Example.png)

In the minimax algorithm, there are two players involved: the one who wants to score as high as possible the maximizer and the one who wants to score as low as possible the minimizer. Both players try to outsmart each other, with the minimizer aiming to make the maximizer's score as low as they can while trying to improve their own score. It's like a game of strategy where one player tries to win big, and the other tries to keep the losses small.

Here's how it works when AI plays with a human, as in tic-tac-toe game:

1. For the current player's turn, AI generates a tree of possible moves. Each node in the tree represents a move that the player can make.
2. The AI then evaluates each node or move based on how favorable it is for itself. It assigns a score to each node, with higher scores indicating better moves.
3. Simultaneously, it assumes the opponent will make the best possible move to minimize the AI's chances of winning. So, for each of the AI's moves, it looks at the opponent's best responses and assigns scores accordingly.
4. The AI then selects its move based on these scores. If it's the AI's turn, it chooses the move with the highest score (maximizing its chances). If it's the opponent's turn, it selects the move with the lowest score (minimizing the AI's chances).

In summary, the minimax algorithm helps the AI make optimal decisions by considering the best and worst possible outcomes for each move, assuming both players play perfectly. Additionally, the main issue with the minimax algorithm is that it can take a long time to make decisions in complex games like chess or Go. These games have many possible moves, which creates a lot of branches in the decision tree. To address this problem, alpha-beta pruning can be used to speed up the algorithm.

## Example

Below is a simple Python example of the minimax algorithm applied to a basic tic-tac-toe game. This code demonstrates how the AI can make optimal moves. It prints the current board, asks for your move, and then makes the AI's move until the game is over.

```python
# Tic-Tac-Toe board representation
board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

# Print the board
def print_board():
    for i in range(0, 9, 3):
        print(board[i] + '|' + board[i + 1] + '|' + board[i + 2])

# Check if the game is over
def game_over():
    # Check for a win
    for i in range(0, 9, 3):
        if board[i] == board[i + 1] == board[i + 2] != ' ':
            return True
    for i in range(3):
        if board[i] == board[i + 3] == board[i + 6] != ' ':
            return True
    if board[0] == board[4] == board[8] != ' ':
        return True
    if board[2] == board[4] == board[6] != ' ':
        return True

    # Check for a tie
    if ' ' not in board:
        return True

    return False

# Minimax algorithm
def minimax(board, depth, is_maximizing):
    if game_over():
        if 'X' in board:
            return -1  # Player X wins
        elif 'O' in board:
            return 1   # Player O wins
        else:
            return 0   # It's a tie

    if is_maximizing:
        best_score = -float('inf')
        for i in range(9):
            if board[i] == ' ':
                board[i] = 'O'
                score = minimax(board, depth + 1, False)
                board[i] = ' '
                best_score = max(score, best_score)
        return best_score
    else:
        best_score = float('inf')
        for i in range(9):
            if board[i] == ' ':
                board[i] = 'X'
                score = minimax(board, depth + 1, True)
                board[i] = ' '
                best_score = min(score, best_score)
        return best_score

# Find the best move for the AI
def find_best_move():
    best_move = -1
    best_score = -float('inf')
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'O'
            score = minimax(board, 0, False)
            board[i] = ' '
            if score > best_score:
                best_score = score
                best_move = i
    return best_move

# Main game loop
while not game_over():
    print_board()
    player_move = int(input("Enter your move (0-8): "))
    if board[player_move] == ' ':
        board[player_move] = 'X'
    else:
        print("Invalid move. Try again.")
        continue

    if game_over():
        break

    ai_move = find_best_move()
    board[ai_move] = 'O'

print_board()
if 'X' in board:
    print("Player X wins!")
elif 'O' in board:
    print("Player O wins!")
else:
    print("It's a tie!")

```
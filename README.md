<h1>Tic Tac Toe</h1>

<h4>Introduction</h4>

Tic Tac Toe is a simple web-based game built using Laravel for the backend and vanilla JavaScript for the frontend. It allows two players to play the classic game of Tic Tac Toe on a 3x3 grid, with a leaderboard to keep track of the game results. The game features SweetAlert2 for notifications and a clean, interactive interface.

<h4>Features:</h4>

    Real-time Gameplay: Players take turns marking spaces on a 3x3 grid.
    Winner Detection: The game automatically detects the winner or a draw.
    Leaderboard: View the results of previous games, including the date of play and the result.
    Responsive Design: Optimized for both desktop and mobile views.

<h4>Installation</h4>

To get started with the Tic Tac Toe project, follow these steps:
1. Clone the repository:

git clone https://github.com/HabibAroua/Tic-Tac-Toe

2. Install dependencies:

Navigate to the project directory and install the necessary PHP and JavaScript dependencies.
For Laravel (Backend):

cd tic-tac-toe
composer install

For JavaScript (Frontend):

3. Set up the environment:

Copy the .env.example file to .env and configure your database connection.

cp .env.example .env

Then, generate the application key:

php artisan key:generate

4. Run migrations:

If your application uses a database (for saving scores or leaderboard data), run the migrations:

php artisan migrate

5. Start the application:

You can start the development server with the following command:

php artisan serve

The application should now be running at http://localhost:8000.
Technical Choices
1. Laravel (Backend):

    Framework: Laravel is used for the backend to handle routing, database operations, and RESTful API.
    Database: Uses a MySQL or SQLite database to store the game results and leaderboard data.
    Authentication: Laravel’s built-in authentication system can be used if needed for user-specific game records.

2. SweetAlert2 (Frontend Alerts):

    SweetAlert2 is used to show visually appealing popups for announcing game results (win, draw) and showing the leaderboard.

3. JavaScript (Game Logic):

    Vanilla JavaScript is used to handle the gameplay logic, such as tracking turns, detecting wins, and handling button interactions.
    Event Listeners are added to handle player moves and update the UI accordingly.

4. Blade Templating (Frontend):

    The front-end uses Blade templating engine, which integrates seamlessly with Laravel. The layout is designed for both desktop and mobile screens, using simple HTML and CSS.

5. CSS:

    Basic styling is provided in the assets/styles/style.css file. It ensures the game layout is responsive and visually appealing across devices.

<h4>How to Play:</h4>

    Open the game in your browser.
    Click on any empty spot on the 3x3 grid to place your mark ("X" or "O").
    The game will automatically check if there is a winner or a draw after each move.
    After the game ends, you can view the leaderboard by clicking the Consult Leaderboard button.

<h4>Contributions</h4>

If you want to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
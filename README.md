# Dice Roller Game
This is a simple dice-rolling web application where users can register, log in, roll dice, and see their score history. It is built with a Node.js backend using Express, Prisma as the ORM for database management, and a React.js frontend.

## Table of Contents
- Features 
- Technologies
- Setup and Installation
- API Endpoints
- Frontend Usage
- Contributing
- License
  
## Features
* User Registration and Login
* Roll Dice with Random Values
* Track High Scores and Score History
* Logout Functionality
* Fetch and display all users' high scores
* Session-based authentication
* Responsive Frontend with a clean UI

##  Technologies
* Backend: Node.js, Express.js, Prisma (ORM), SQLite (or other databases supported by Prisma)
* Frontend: React.js (Vite for fast builds)
* Database: SQLite (or PostgreSQL/MySQL based on configuration)
* Session Management: express-session
* Styling: CSS (Basic styles, easily customizable)

# Setup and Installation
## Prerequisites
Before you begin, make sure you have:

*  Node.js (version >= 14.x)
* npm or yarn
* SQLite (or any database supported by Prisma, like PostgreSQL or MySQL)
* Backend Installation
* Clone the repository:


# Frontend Installation

* Score Routes
* GET /roll-dice
* Rolls a dice (between 1 and 6) and updates the user's high score if the rolled value is greater.

* GET /user/history
Fetches the current user's score history.

## Frontend Usage
Once the backend and frontend servers are running, you can:

*  Register a user: Open the app in your browser at http://localhost:5173 and register a new username.
*  Login: Enter your username to log in.
*  Roll Dice: Click the Roll Dice button to roll a random dice. Your high score will be updated accordingly.
*  View High Scores: Your high scores and all users' high scores are displayed on the frontend.
*  Logout: Click the Logout button to log out.

## Link
https://github.com/akonde/frontend-dice-roller-game

## Screenshot
<img width="945" alt="Screenshot 2024-10-16 at 21 34 41" src="https://github.com/user-attachments/assets/1cdb9314-c65e-44d5-b3ff-ca72605ba70e">
<img width="917" alt="Screenshot 2024-10-16 at 21 35 01" src="https://github.com/user-attachments/assets/523935c8-ce4a-4de2-8aa3-20024ad4c40e">



## Contributing
- Fork the repository
- Create your feature branch (git checkout -b feature/some-feature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/some-feature)
- Open a pull request

## License
This project is licensed under the MIT License.Dice Roller Game



## Credits
Thanks to the Boolean Developer boot camp for this privilege. I appreciate TUTOR (Ezekiel), Carlos, and my cohort they are all amazing, google searching and other developers' communities for resources. 


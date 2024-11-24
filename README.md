# PayPal System Project

This project simulates a simple PayPal-like system where users can send, receive, and withdraw funds. It includes features for transaction history, user authentication, and withdrawal management with various methods (bank transfer, mobile wallet, PayPal transfer, etc.).

## Features
- User authentication (Login, register).
- Wallet system with balance management.
- Send money to other users via email.
- View transaction history (Sent and Received transactions).
- Request withdrawals via different methods.
- Track withdrawal status (Pending, Completed, Failed).

## Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** and **npm** installed on your machine.
- **MongoDB** running locally or a remote MongoDB instance.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/PaypalSysProject.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd PaypalSysProject
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Update MONGODB_URI variable go to config/mongoose.js file**:
    ```bash
        'mongodb+srv://username:password@paypalsysproject.whpgh.mongodb.net/?retryWrites=true&w=majority&appName=PaypalSysProject'
    ```

5. **Start the development server**:
    ```bash
    npm start or npm run dev
    ```

6. Open the application in your browser at `http://localhost:3000`.

## Directory Structure

```
paypal-system/
├── config/
│   └── passport.js               # Passport authentication strategy
├── models/
│   ├── Transaction.js            # Transaction model
│   ├── Withdrawal.js             # Withdrawal model
│   └── User.js                   # User model
├── public/
│   ├── styles/
│   │   └── main.css              # Custom styles
├── routes/
│   └── index.js                  # Routes for handling user actions (sending money, withdrawals, etc.)
├── views/
│   ├── index.pug                 # Main page (wallet, transactions)
│   └── transactions.pug          # Transaction history page
├── app.js                        # Main app configuration and server setup
└── .env                          # Environment variables
```

## Models

### User Model
Contains information about each user (username, email, password, wallet balance).

### Transaction Model
Tracks sent and received transactions, including sender and recipient details, transaction amount, and status (Completed, Failed).

### Withdrawal Model
Records withdrawal requests by users, including withdrawal amount, withdrawal method, status (Pending, Completed, Failed), and the date of the transaction.

## Routes

### `users/register` and `/users/login`
- **POST** request to authenticate or register users.

### `/send-money`
- **POST** request to send money to another user.
- Requires the recipient's email and the amount to send.

### `/withdraw-money`
- **POST** request to request a withdrawal from the wallet.
- Withdrawal methods: bank transfer, mobile wallet, PayPal transfer, crypto wallet, cash pickup.

### `/transactions`
- **GET** request to view sent and received transactions, along with withdrawal history.

### `/add-money`
- **POST** request to add funds to the wallet.

## Example Usage

1. **Register a User**:
   - Navigate to `users/register` and create a new user account with an email and password.

2. **Login**:
   - Navigate to `users/login` and log in with the email and password you just registered.

3. **Add Funds**:
   - After logging in, you can add funds to your wallet from the homepage.

4. **Send Money**:
   - To send money, enter the recipient's email and the amount, then submit the form.

5. **Request Withdrawal**:
   - To withdraw funds, click the "Withdraw Funds" button, select the method, and specify the withdrawal amount.

6. **View Transaction History**:
   - Go to `/transactions` to see a history of all sent and received transactions, as well as your withdrawal history.

## Error Handling
- If a user attempts to withdraw more money than they have in their wallet, they will see an error message: "Insufficient balance."
- Withdrawals can have the following statuses:
  - **Pending**: Withdrawal has been successfully processed.
  - **Completed**: Withdrawal has been successfully processed.
  - **Failed**: Withdrawal could not be processed.

## Customization

- **Themes**: You can change the look and feel by modifying `public/styles/main.css`.
- **Authentication**: The authentication strategy can be modified in `config/passport.js`.

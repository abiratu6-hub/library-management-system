```javascript
// Library Management System
// Basic frontend interaction

// Sample dashboard data
let books = 0;
let users = 0;
let borrowed = 0;

// Calculate available books
let available = books - borrowed;

// Display dashboard information
document.getElementById("bookCount").textContent = books;
document.getElementById("userCount").textContent = users;
document.getElementById("borrowedCount").textContent = borrowed;
document.getElementById("availableCount").textContent = available;
``````javascript
// User Registration

const userForm = document.getElementById("userForm");

if (userForm) {

    userForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let userId = document.getElementById("userId").value;
        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let userType = document.getElementById("userType").value;

        let tableBody = document.getElementById("userTableBody");

        let row = tableBody.insertRow();

        row.insertCell(0).textContent = userId;
        row.insertCell(1).textContent = fullName;
        row.insertCell(2).textContent = email;
        row.insertCell(3).textContent = phone;
        row.insertCell(4).textContent = userType;

        document.getElementById("userMessage").textContent =
            "User registered successfully.";

        userForm.reset();
    });
}
```

```javascript
// ==========================================
// LIBRARY MANAGEMENT SYSTEM
// ==========================================


// ==========================================
// 1. DASHBOARD
// ==========================================

let books = 0;
let users = 0;
let borrowed = 0;
let available = books - borrowed;

if (document.getElementById("bookCount")) {
    document.getElementById("bookCount").textContent = books;
}

if (document.getElementById("userCount")) {
    document.getElementById("userCount").textContent = users;
}

if (document.getElementById("borrowedCount")) {
    document.getElementById("borrowedCount").textContent = borrowed;
}

if (document.getElementById("availableCount")) {
    document.getElementById("availableCount").textContent = available;
}


// ==========================================
// 2. USER REGISTRATION
// ==========================================

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


// ==========================================
// 3. BOOK REGISTRATION AND UPDATE
// ==========================================

const bookForm = document.getElementById("bookForm");

if (bookForm) {

    bookForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let bookId = document.getElementById("bookId").value;
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let category = document.getElementById("category").value;
        let quantity = document.getElementById("quantity").value;

        let tableBody = document.getElementById("bookTableBody");

        let row = tableBody.insertRow();

        row.insertCell(0).textContent = bookId;
        row.insertCell(1).textContent = title;
        row.insertCell(2).textContent = author;
        row.insertCell(3).textContent = category;
        row.insertCell(4).textContent = quantity;
        row.insertCell(5).textContent = quantity;

        // Update button
        let actionCell = row.insertCell(6);

        let updateButton = document.createElement("button");

        updateButton.textContent = "Update";
        updateButton.className = "update-btn";

        updateButton.onclick = function() {

            let newTitle = prompt(
                "Enter new book title:",
                row.cells[1].textContent
            );

            if (newTitle !== null && newTitle !== "") {
                row.cells[1].textContent = newTitle;
            }

            let newQuantity = prompt(
                "Enter new quantity:",
                row.cells[4].textContent
            );

            if (newQuantity !== null && newQuantity !== "") {

                row.cells[4].textContent = newQuantity;

                row.cells[5].textContent = newQuantity;
            }
        };

        actionCell.appendChild(updateButton);

        document.getElementById("bookMessage").textContent =
            "Book registered successfully.";

        bookForm.reset();
    });
}
```
```javascript
// ==========================================
// 4. BORROWING AND RETURNING
// ==========================================

const borrowForm = document.getElementById("borrowForm");

if (borrowForm) {

    borrowForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let userId =
            document.getElementById("borrowUserId").value;

        let bookId =
            document.getElementById("borrowBookId").value;

        let borrowDate =
            document.getElementById("borrowDate").value;

        let tableBody =
            document.getElementById("borrowTableBody");

        // Create new borrowing record
        let row = tableBody.insertRow();

        row.insertCell(0).textContent = userId;
        row.insertCell(1).textContent = bookId;
        row.insertCell(2).textContent = borrowDate;

        // Status
        row.insertCell(3).textContent = "Borrowed";

        // Return button
        let actionCell = row.insertCell(4);

        let returnButton =
            document.createElement("button");

        returnButton.textContent = "Return";
        returnButton.className = "return-btn";

        returnButton.onclick = function() {

            row.cells[3].textContent = "Returned";

            returnButton.disabled = true;

            returnButton.textContent = "Returned";

            document.getElementById("borrowMessage").textContent =
                "Book returned successfully.";
        };

        actionCell.appendChild(returnButton);

        document.getElementById("borrowMessage").textContent =
            "Book borrowed successfully.";

        borrowForm.reset();
    });
}
```

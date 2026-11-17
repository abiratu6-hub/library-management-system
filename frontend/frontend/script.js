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
        let quantity = parseInt(
            document.getElementById("quantity").value
        );

        let tableBody = document.getElementById("bookTableBody");

        let row = tableBody.insertRow();

        row.insertCell(0).textContent = bookId;
        row.insertCell(1).textContent = title;
        row.insertCell(2).textContent = author;
        row.insertCell(3).textContent = category;
        row.insertCell(4).textContent = quantity;
        row.insertCell(5).textContent = quantity;

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

                let quantityNumber = parseInt(newQuantity);

                row.cells[4].textContent = quantityNumber;
                row.cells[5].textContent = quantityNumber;
            }
        };

        actionCell.appendChild(updateButton);

        document.getElementById("bookMessage").textContent =
            "Book registered successfully.";

        bookForm.reset();
    });
}


// ==========================================
// 4. SAMPLE LIBRARY BOOKS
// ==========================================

let libraryBooks = [

    {
        id: "B001",
        title: "Database Systems",
        author: "Thomas Connolly",
        category: "Computer Science",
        quantity: 3,
        available: 3
    },

    {
        id: "B002",
        title: "Computer Networks",
        author: "Andrew Tanenbaum",
        category: "Computer Science",
        quantity: 2,
        available: 1
    },

    {
        id: "B003",
        title: "Engineering Mathematics",
        author: "John Bird",
        category: "Mathematics",
        quantity: 4,
        available: 4
    }
];


// ==========================================
// 5. BORROWING AND RETURNING
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

        let book = libraryBooks.find(function(book) {

            return book.id.toLowerCase() ===
                bookId.toLowerCase();

        });

        if (!book) {

            document.getElementById("borrowMessage").textContent =
                "Book not found.";

            return;
        }

        if (book.available <= 0) {

            document.getElementById("borrowMessage").textContent =
                "Book is not available.";

            return;
        }

        let tableBody =
            document.getElementById("borrowTableBody");

        let row = tableBody.insertRow();

        row.insertCell(0).textContent = userId;
        row.insertCell(1).textContent = bookId;
        row.insertCell(2).textContent = borrowDate;
        row.insertCell(3).textContent = "Borrowed";

        let actionCell = row.insertCell(4);

        let returnButton =
            document.createElement("button");

        returnButton.textContent = "Return";
        returnButton.className = "return-btn";

        returnButton.onclick = function() {

            book.available++;

            row.cells[3].textContent =
                "Returned";

            returnButton.disabled = true;

            returnButton.textContent =
                "Returned";

            document.getElementById("borrowMessage").textContent =
                "Book returned successfully.";

            updateAvailabilityTable();
        };

        actionCell.appendChild(returnButton);

        book.available--;

        document.getElementById("borrowMessage").textContent =
            "Book borrowed successfully.";

        updateAvailabilityTable();

        borrowForm.reset();
    });
}


// ==========================================
// 6. BOOK AVAILABILITY
// ==========================================

function updateAvailabilityTable() {

    let tableBody =
        document.getElementById("availabilityTableBody");

    if (!tableBody) {
        return;
    }

    tableBody.innerHTML = "";

    libraryBooks.forEach(function(book) {

        let row =
            tableBody.insertRow();

        row.insertCell(0).textContent =
            book.id;

        row.insertCell(1).textContent =
            book.title;

        row.insertCell(2).textContent =
            book.quantity;

        row.insertCell(3).textContent =
            book.available;

        let statusCell =
            row.insertCell(4);

        if (book.available > 0) {

            statusCell.textContent =
                "Available";

        } else {

            statusCell.textContent =
                "Not Available";
        }

    });
}


// ==========================================
// 7. BOOK SEARCH
// ==========================================

function searchBooks() {

    let searchType =
        document.getElementById("searchType").value;

    let searchValue =
        document.getElementById("searchInput").value
        .toLowerCase();

    let tableBody =
        document.getElementById("searchTableBody");

    let message =
        document.getElementById("searchMessage");

    tableBody.innerHTML = "";

    if (searchValue === "") {

        message.textContent =
            "Please enter a search value.";

        return;
    }

    let results =
        libraryBooks.filter(function(book) {

            return book[searchType]
                .toString()
                .toLowerCase()
                .includes(searchValue);

        });

    if (results.length === 0) {

        message.textContent =
            "No book found.";

        return;
    }

    results.forEach(function(book) {

        let row =
            tableBody.insertRow();

        row.insertCell(0).textContent =
            book.id;

        row.insertCell(1).textContent =
            book.title;

        row.insertCell(2).textContent =
            book.author;

        row.insertCell(3).textContent =
            book.category;

        row.insertCell(4).textContent =
            book.quantity;

        if (book.available > 0) {

            row.insertCell(5).textContent =
                "Available (" +
                book.available +
                ")";

        } else {

            row.insertCell(5).textContent =
                "Not Available";
        }

    });

    message.textContent =
        results.length +
        " book(s) found.";
    }

// ==========================================
// 8. INITIALIZE AVAILABILITY TABLE
// ==========================================

updateAvailabilityTable();

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main');
    const headerToggle = document.querySelector('.header .toggle-btn');

    sidebar.classList.toggle('closed');
    main.classList.toggle('shifted');

    if (sidebar.classList.contains('closed')) {
        headerToggle.style.display = 'block';
    } else {
        headerToggle.style.display = 'none';
    }
}

window.onload = () => {
    const sidebar = document.querySelector('.sidebar');
    const headerToggle = document.querySelector('.header .toggle-btn');

    if (sidebar.classList.contains('closed')) {
        headerToggle.style.display = 'block';
    } else {
        headerToggle.style.display = 'none';
    }
};

function showDashboard() {
    document.getElementById('userList').style.display = 'none';
    document.getElementById('bookList').style.display = 'none';
    document.getElementById('dashboard').style.display = 'grid';
    document.getElementById('dashboardLink').classList.add('active');
    document.getElementById('usersLink').classList.remove('active');
    document.getElementById('booksLink').classList.remove('active');
}

function showUsers() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('bookList').style.display = 'none';
    document.getElementById('userList').style.display = 'block';
    document.getElementById('usersLink').classList.add('active');
    document.getElementById('dashboardLink').classList.remove('active');
    document.getElementById('booksLink').classList.remove('active');
    loadUserTable();
}

function showBooks() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('userList').style.display = 'none';
    document.getElementById('bookList').style.display = 'block';
    document.getElementById('booksLink').classList.add('active');
    document.getElementById('dashboardLink').classList.remove('active');
    document.getElementById('usersLink').classList.remove('active');
    loadBooksTable();
}

let users = [
    { id: 1, name: 'Yateesh', email: 'yateesh@example.com', status: 'Active' },
    { id: 2, name: 'Shankar', email: 'shankar@example.com', status: 'Inactive' },
    { id: 3, name: 'Abhiram', email: 'abhi@example.com', status: 'Active' },
    { id: 4, name: 'Manoj', email: 'manoj@example.com', status: 'Active' },
];

let books = [
    { id: 1, title: 'Java', author: 'James Gosling', genre: 'Education', status: 'Available' },
    { id: 2, title: 'Python', author: 'Guido van Rossum', genre: 'Education', status: 'Unavailable' },
    { id: 3, title: 'C++', author: 'Bjarne Stroustrup', genre: 'Education', status: 'Available' },
];

function loadUserTable() {
    const tableBody = document.querySelector('#userList tbody');
    tableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
            <td><span class="delete-btn" onclick="deleteUser(${user.id})"><i class="fa-solid fa-trash"></i></span></td>
        `;
        tableBody.appendChild(row);
    });
}

function loadBooksTable() {
    const tableBody = document.querySelector('#bookList tbody');
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.status}</td>
            <td><span class="delete-btn" onclick="deleteBook(${book.id})"><i class="fa-solid fa-trash"></i></span></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    loadUserTable();
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    loadBooksTable();
}

function openModal() {
    const modal = document.getElementById('userModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('userModal');
    modal.style.display = 'none';
}

function addUser() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const status = document.getElementById('userStatus').value;

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        status: status
    };

    users.push(newUser);
    loadUserTable();
    closeModal();
}

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const genre = document.getElementById('bookGenre').value;
    const status = document.getElementById('bookStatus').value;

    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        genre: genre,
        status: status
    };

    books.push(newBook);
    loadBooksTable();
    closeBookModal();
}

function openBookModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'flex';
}

function closeBookModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
}

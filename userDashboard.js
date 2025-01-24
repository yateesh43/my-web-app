let openBookDropdown = null;

        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const main = document.querySelector('.main');
            const header = document.querySelector('.header');

            sidebar.classList.toggle('closed');
            main.classList.toggle('shifted');
            header.classList.toggle('shifted');
        }

        function loadDashboard() {
            // Reset active class
            document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
            document.getElementById('dashboardLink').classList.add('active');

            // Load dashboard content
            document.getElementById('content').innerHTML = `
                <div class="grid" id="dashboardContent">
                    <div class="card">
                        <h2>Card 1</h2>
                        <p>Details of card 1.</p>
                    </div>
                    <div class="card">
                        <h2>Card 2</h2>
                        <p>Details of card 2.</p>
                    </div>
                    <div class="card">
                        <h2>Card 3</h2>
                        <p>Details of card 3.</p>
                    </div>
                </div>
            `;
        }

        function loadGenres() {
            // Reset active class
            document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
            document.getElementById('genresLink').classList.add('active');

            // Load genres table with expanding books list
            document.getElementById('content').innerHTML = `
                <h2 style="color:#fff;">Genres Available</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Genre Name</th>
                            <th>Description</th>
                            <th>Books</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Action</td>
                            <td>Exciting and full of energy.</td>
                            <td>
                                <button class="book-button" onclick="toggleBooks('actionBooks')">Show Books</button>
                                <div id="actionBooks" class="books-list">
                                    <div>Action Book 1 - Description</div>
                                    <div>Action Book 2 - Description</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Drama</td>
                            <td>Focused on emotional narratives.</td>
                            <td>
                                <button class="book-button" onclick="toggleBooks('dramaBooks')">Show Books</button>
                                <div id="dramaBooks" class="books-list">
                                    <div>Drama Book 1 - Description</div>
                                    <div>Drama Book 2 - Description</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Comedy</td>
                            <td>Humorous and entertaining.</td>
                            <td>
                                <button class="book-button" onclick="toggleBooks('comedyBooks')">Show Books</button>
                                <div id="comedyBooks" class="books-list">
                                    <div>Comedy Book 1 - Description</div>
                                    <div>Comedy Book 2 - Description</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Horror</td>
                            <td>Scary and intense.</td>
                            <td>
                                <button class="book-button" onclick="toggleBooks('horrorBooks')">Show Books</button>
                                <div id="horrorBooks" class="books-list">
                                    <div>Horror Book 1 - Description</div>
                                    <div>Horror Book 2 - Description</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Romance</td>
                            <td>Love and relationships.</td>
                            <td>
                                <button class="book-button" onclick="toggleBooks('romanceBooks')">Show Books</button>
                                <div id="romanceBooks" class="books-list">
                                    <div>Romance Book 1 - Description</div>
                                    <div>Romance Book 2 - Description</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
        function loadBooks() {
    document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
    document.getElementById('booksLink').classList.add('active');

    document.getElementById('content').innerHTML = `
        <h2 style="color:#fff;">Books Available</h2>
        <div class="grid" id="booksContent">
            <div class="card">
                <img src="https://rukminim2.flixcart.com/image/850/1000/ki96c280-0/book/h/w/3/coyote-peterson-s-brave-adventures-original-imafy2r7hqyhhej4.jpeg?q=90&crop=false" alt="Adventures of the Brave Book Image" class="book-image">
                <h2>Adventures of the Brave</h2>
                <div class="book-genre"><span style="color:#FF9800">Genre</span>: Action & Adventure</div>
                <p>Follow the daring journey of a hero on a quest filled with challenges and triumphs.</p>
                <button class="book-button" onclick="buyBook('Adventures of the Brave')">Buy Book</button>
                <button class="book-button" onclick="rentBook('Adventures of the Brave')">Rent Book</button>
            </div>
            <div class="card">
                <img src="https://cdn.kobo.com/book-images/fb23416d-fa4b-429f-9b6c-d8bc6b41623c/1200/1200/False/thirteen-heartfelt-stories.jpg" alt="Heartfelt Tales Book Image" class="book-image">
                <h2>Heartfelt Tales</h2>
                <div class="book-genre"><span style="color:#FF9800">Genre</span>: Drama</div>
                <p>A touching narrative exploring life, love, and the bonds that shape us.</p>
                <button class="book-button" onclick="buyBook('Heartfelt Tales')">Buy Book</button>  
                <button class="book-button" onclick="rentBook('Heartfelt Tales')">Rent Book</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/81NBJdUGRNL._AC_UF1000,1000_QL80_.jpg" alt="Laugh Out Loud Book Image" class="book-image">
                <h2>Laugh Out Loud</h2>
                <div class="book-genre"><span style="color:#FF9800">Genre</span>: Comedy</div>
                <p>A collection of hilarious anecdotes guaranteed to bring joy and laughter.</p>
                <button class="book-button" onclick="buyBook('Laugh Out Loud')">Buy Book</button>
                <button class="book-button" onclick="rentBook('Laugh Out Loud')">Rent Book</button>
            </div>
            <div class="card">
                <img src="https://rukminim2.flixcart.com/image/850/1000/ki96c280-0/book/h/w/3/coyote-peterson-s-brave-adventures-original-imafy2r7hqyhhej4.jpeg?q=90&crop=false" alt="Adventures of the Brave Book Image" class="book-image">
                <h2>Adventures of the Brave</h2>
                <div class="book-genre"><span style="color:#FF9800">Genre</span>: Action & Adventure</div>
                <p>Follow the daring journey of a hero on a quest filled with challenges and triumphs.</p>
                <button class="book-button" onclick="buyBook('Adventures of the Brave')">Buy Book</button>
                <button class="book-button" onclick="rentBook('Adventures of the Brave')">Rent Book</button>
            </div>
            <div class="card">
                <img src="https://cdn.kobo.com/book-images/fb23416d-fa4b-429f-9b6c-d8bc6b41623c/1200/1200/False/thirteen-heartfelt-stories.jpg" alt="Heartfelt Tales Book Image" class="book-image">
                <h2>Heartfelt Tales</h2>
                <div class="book-genre"><span style="color:#FF9800">Genre</span>: Drama</div>
                <p>A touching narrative exploring life, love, and the bonds that shape us.</p>
                <button class="book-button" onclick="buyBook('Heartfelt Tales')">Buy Book</button>
                <button class="book-button" onclick="rentBook('Heartfelt Tales')">Rent Book</button>
            </div>
            <div class="card">
                <img src="https://m.media-amazon.com/images/I/81NBJdUGRNL._AC_UF1000,1000_QL80_.jpg" alt="Laugh Out Loud Book Image" class="book-image">
                <h2>Laugh Out Loud</h2>
                <div class="book-genre"><span style="color:#FF9800">Genre</span>: Comedy</div>
                <p>A collection of hilarious anecdotes guaranteed to bring joy and laughter.</p>
                <button class="book-button" onclick="buyBook('Laugh Out Loud')">Buy Book</button>
                <button class="book-button" onclick="rentBook('Laugh Out Loud')">Rent Book</button>
            </div>
        </div>
    `;
}




        let cart = [];
        function loadCart() {
             // Reset active class
    document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
    document.getElementById('cartLink').classList.add('active');

    // Generate cart items HTML in a table format
    const cartItemsHtml = cart.length > 0
        ? `
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map((item, index) => `
                        <tr>
                            <td>${item.title}</td>
                            <td>
                                <div class="count-container">
                                    <button class="count-button" onclick="decreaseCount(${index})">-</button>
                                    <span class="count">${item.count}</span>
                                    <button class="count-button" onclick="increaseCount(${index})">+</button>
                                </div>
                            </td>
                            <td>
                                <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `
        : '<p>Your cart is empty.</p>';

    // Add the Checkout button if cart has items
    const checkoutButtonHtml = cart.length > 0
        ? `<button class="checkout-button" onclick="checkoutCart()">Proceed to Checkout</button>`
        : '';

    // Display cart content
    document.getElementById('content').innerHTML = `
        <h2 style="color:#fff;">Your Cart</h2>
        <div class="cart-items">${cartItemsHtml}</div>
        ${checkoutButtonHtml}
    `;
        }

        function loadNotifications() {
        // Reset active class
        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
        document.getElementById('notificationsLink').classList.add('active');

        // Load notifications content
        document.getElementById('content').innerHTML = `
            <h2 style="color:#fff;">Notifications</h2>
            <div class="notification-card">
                <p><strong>New Book Added:</strong> "Adventures of the Brave" in the Action & Adventure genre.</p>
                <i class="fa-solid fa-xmark" onclick="deleteNotification(this)"></i>
            </div>
            <div class="notification-card">
                <p><strong>Book Availability:</strong> "Heartfelt Tales" is now available for rent!</p>
                <i class="fa-solid fa-xmark" onclick="deleteNotification(this)"></i>
            </div>
            <div class="notification-card">
                <p><strong>Upcoming Event:</strong> Join us for the Book Launch on January 15th!</p>
                <i class="fa-solid fa-xmark" onclick="deleteNotification(this)"></i>
            </div>
        `;

        // Update notification count
        updateNotificationCount();
    }

    // Function to delete notification
    function deleteNotification(iconElement) {
        const notificationCard = iconElement.parentElement;
        notificationCard.remove();

        // Update notification count after deleting
        updateNotificationCount();
    }

    // Function to update notification count in sidebar
    function updateNotificationCount() {
        const notificationCards = document.querySelectorAll('.notification-card');
        const notificationCount = notificationCards.length;
        document.getElementById('notificationsLink').innerHTML = `
            <i class="fa-solid fa-bell"></i><span>Notifications</span>${notificationCount > 0 ? notificationCount : ''}
        `;
    }

    // Buy Book function
    function buyBook(bookTitle) {
        const bookCard = event.target.closest('.card').cloneNode(true); // Clone the card to modify it for the cart
    const existingBookIndex = cart.findIndex(item => item.title === bookTitle);

    if (existingBookIndex !== -1) {
        // Increment the count if the book already exists
        cart[existingBookIndex].count += 1;
    } else {
        // Add the new book to the cart with an initial count of 1
        const modifiedCardHTML = bookCard.outerHTML.replace(
            /<button.*?<\/button>/g, // Remove Buy and Rent buttons
            ''
        );
        cart.push({ title: bookTitle, count: 1, cardHTML: modifiedCardHTML });
    }

    // Update cart count in the sidebar and reload cart
    updateCartCount();
    alert(`"${bookTitle}" was added to your cart.`);
}

    // Rent Book function
    function rentBook(bookTitle) {
        alert(`You have selected to rent "${bookTitle}". Find it in your cart.`);
    }

    // Function to update cart count in the sidebar
    function updateCartCount() {
        const cartCount = cart.reduce((accum, item) => accum + item.count, 0); // Sum up all the counts of books
    document.getElementById('cartLink').innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i><span>Cart</span>${cartCount > 0 ? cartCount : ''}
    `;
    }

    // Function to remove a book from the cart
    function removeFromCart(index) {
        if (cart[index].count > 1) {
        // Decrease the count if there are multiple copies
        cart[index].count -= 1;
    } else {
        // Remove the book if only one copy remains
        cart.splice(index, 1);
    }

    updateCartCount();
    loadCart();
    }

    // Function to increase the count of the book
function increaseCount(index) {
    cart[index].count += 1;
    updateCartCount();
    loadCart();
}

// Function to decrease the count of the book
function decreaseCount(index) {
    if (cart[index].count > 1) {
        cart[index].count -= 1;
    }
    updateCartCount();
    loadCart();
}

// Checkout handler function
function checkoutCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    // Clear the cart
    cart = [];
    updateCartCount();
    loadCart(); // Refresh cart UI

    // Show the popup
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <h3>Thank You for Purchasing!</h3>
            <p>Your order has been successfully placed.</p>
            <button class="close-popup" onclick="closePopup()">×</button>
        </div>
    `;
    document.body.appendChild(popup);
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}



        function toggleBooks(bookId) {
            const booksContainer = document.getElementById(bookId);
            
            // Close the previously opened dropdown
            if (openBookDropdown && openBookDropdown !== bookId) {
                document.getElementById(openBookDropdown).classList.remove('open');
            }

            // Toggle the current dropdown
            booksContainer.classList.toggle('open');
            
            // Update the current open dropdown
            openBookDropdown = booksContainer.classList.contains('open') ? bookId : null;
        }
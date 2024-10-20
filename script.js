// Dark Mode Toggle
// const darkModeToggle = document.getElementById('dark-mode-toggle');
// const body = document.body;

// darkModeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
// });
// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;
  
  // Change the icon based on the current mode
  toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
});


// Search Bar Functionality
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const books = document.querySelectorAll('.book');
  
  books.forEach(book => {
    const title = book.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

// Filter by Category
const categoryButtons = document.querySelectorAll('.category-list button');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    const books = document.querySelectorAll('.book');
    
    books.forEach(book => {
      if (book.getAttribute('data-category') === category || category === 'all') {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });
});

// Pagination Functionality
let currentPage = 1;
const booksPerPage = 4;
const books = document.querySelectorAll('.book');
const totalPages = Math.ceil(books.length / booksPerPage);

function showPage(page) {
  books.forEach((book, index) => {
    if (index >= (page - 1) * booksPerPage && index < page * booksPerPage) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}

document.getElementById('next-page').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    document.getElementById('page-number').textContent = currentPage;
    showPage(currentPage);
  }
});

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById('page-number').textContent = currentPage;
    showPage(currentPage);
  }
});


// Contact Form Submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can send this data to a server using an AJAX request or store it locally
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  alert('Thank you for reaching out! We will get back to you soon.');

  form.reset(); // Reset form after submission
});


// Initialize the first page
showPage(1);

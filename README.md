# 🎓 Onlearn – Website for Online Courses

This project is a multi-page website for online courses with various interactive elements. It includes adaptive layout, forms with validation, server interaction, modals and other modern web development features.

## 🌐 Website
You can watch the website online [here](https://onlearn.vercel.app/).

## ✔️ Project Features
- **Multi-page website**: The website features one fully developed main page with three additional pages designed as placeholders for future content.
- **Responsive design**: The website is optimized for different devices (desktop, tablet, mobile).
- **SCSS**: Structured and modular styles using the SCSS preprocessor.
- **Gulp**: Automated project build using Gulp.

## 📌 Main Functionality
### 🔐 Registration and Login Forms
- Forms are opened in modal windows.
- Client-side validation ensures requests are not sent with invalid data.
- Users are notified of success or errors.

### ▶ Video in a Modal Window
- A modal window with a YouTube video opens when a button is clicked.

### 📥 GET Requests for Cards
- Several sections feature cards with information loaded from the server via GET requests.

### ✨ Tabs, Expandable Section, and Animated Lists
 - **Tabs**: The website features tabs that allow users to switch between different content.
 - **Expandable card section**: A section with a set of cards that can be expanded by clicking the "View all" button.
 - **Animated lists**: Some sections contain lists that appear with simple animations when user clicks a button to expand the list.

### ← → Slider
- Main page features a swiper slider implemented using an external plugin.

### 🔔 Subscription Form
- A simple subscription form with data submission to the server.

### ☰ Burger Menu 
- A burger menu is implemented for navigation in the mobile version.

## ⚙️ Technologies
 - **HTML5, JavaScript** for the main structure and functionality of the website.
 - **SCSS** for styling, providing a structured and modular approach to writing CSS better styling organization.
 - **Webpack**:
   - **JavaScript Bundling**: Bundles and processes JavaScript files.
   - **CSS Handling**: Integrates CSS into the JavaScript bundle.
 - **Gulp**:
   - **SASS to CSS Compilation**: Compiles SCSS to CSS, with autoprefixing, minification, and source maps.
   - **Image Optimization**: Optimizes images, converts to WebP and handles file extensions.
   - **JavaScript Transpiling**: Transpiles JavaScript using Babel and bundles with Webpack.
  
## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Afkeomre/onlearn.git
   
2. Install dependencies:
   ```bash
   npm install
   
3. Run the project to start a development build:
   ```bash
   gulp

3. Run the project to create a production-ready build:
   ```bash
   gulp docs

## 📧 Contact
If you have any questions or suggestions, feel free to reach out:
- E-mail: ivoronkova538@yandex.ru.
- GitHub: [Irina Voronkova](https://github.com/Afkeomre).

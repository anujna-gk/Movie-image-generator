
// Navbar.js
function Navbar() {
    return (
        `<nav class="navbar">
            <div class="container">
                <a href="index.html" id ="home" className="index" style="padding: 30px">Home</a>
                <a href="login.html" className="login" style="padding: 30px">Login</a>
                <a href="signup.html" className="signup" style="padding: 30px">Signup</a>
            </div>
        </nav>`
    );
}
document.getElementById("navbar").innerHTML = Navbar()


const a = document.getElementById('signupForm')
if (a) {
    a.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var contact = document.getElementById('contact').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (name && contact && email && password) {
            var userData = {
                name: name,
                contact: contact,
                email: email,
                password: password
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            alert('Signup successful!');
            window.location.href = 'login.html';
        } else {
            alert('Please fill in all fields');
        }
    })
};



const b = document.getElementById('loginForm')
if (b) {
    b.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = document.getElementById('emaill').value;
        var password = document.getElementById('passwordl').value;

        var userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData);
        if (userData && userData.email === email && userData.password === password) {
            alert('Login successful!');
            window.location.href = 'index.html';
            // console.log("hey");
        } else {
            alert('Invalid credentials ❌');
        }
    })
};

var images = ["https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00NGFiLWE2NWUtMGU1ZDA1NTQ3ZjQwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNDQ1YmNmNDctMTZiZS00OGU3LWIyN2YtMWIwMmVhNDQ0MjY5XkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg", "https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"];
var d = 0;

function changeImage() {
    const slideshow = document.getElementById("slideshow");
    if (slideshow && d < images.length) {
        slideshow.innerHTML = `<img src="${images[d]}" id="ss">`;
        d = (d + 1)
        console.log(d);

        // if (c) {
        //     images.map(ima => `<img src="${ima}">`)
        //     d = d + 1
        //     console.log(d);
        if (d === 5) {
            slideshow.addEventListener('click', function (event) {
                event.preventDefault();
                slideshow.innerHTML = `<h1>Signup and Login to see the movie list! </h1>`
            })
        }
    }
}

changeImage()
setInterval(changeImage, 2000);
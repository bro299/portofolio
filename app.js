const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Portofolio Saya',
        name: 'Nama Anda',
        description: 'Deskripsi singkat tentang diri Anda',
        profileImage: '/images/profile.jpg'
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

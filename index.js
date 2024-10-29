const express = require('express');
const app = express();
const PORT = 8000;

// Sample songs array
const songs = [
    { artist: "The Beatles", title: "Hey Jude", album: "Single", year: 1968 },
    { artist: "Queen", title: "Bohemian Rhapsody", album: "A Night at the Opera", year: 1975 },
    { artist: "Michael Jackson", title: "Billie Jean", album: "Thriller", year: 1982 },
    { artist: "Adele", title: "Rolling in the Deep", album: "21", year: 2011 }
];

// Helper function to get a random song
function getRandomSong() {
    return songs[Math.floor(Math.random() * songs.length)];
}

// Route for /dailysong to return an HTML table with song details
app.get('/dailysong', (req, res) => {
    const song = getRandomSong();
    res.status(200).send(`
        <html>
            <head><title>Daily Song</title></head>
            <body>
                <h1>Daily Song</h1>
                <table border="1">
                    <tr><th>Artist</th><th>Title</th><th>Album</th><th>Year</th></tr>
                    <tr>
                        <td>${song.artist}</td>
                        <td>${song.title}</td>
                        <td>${song.album}</td>
                        <td>${song.year}</td>
                    </tr>
                </table>
            </body>
        </html>
    `);
});

// Route for /dailysongdata to return the song in JSON format
app.get('/dailysongdata', (req, res) => {
    const song = getRandomSong();
    res.status(200).json(song);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

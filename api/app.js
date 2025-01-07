const express = require('express');
const cors = require('cors');

const app = express();
const port = 6077;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
      res.send('Hallo dunia coding coders!');
});

app.get('/api', (req, res) => {
      res.json({ message: 'Welcome to the API' });
});

app.get('/book', (req, res) => {
      res.json({ 'id': 1, 'title': 'The Great Gatsby' });
});

app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
});
app.get('/books', (req, res) => {
      res.json([
            { 'id': 1, 'title': 'The Great AJ' },
            { 'id': 2, 'title': 'To Kill a Mockingbird' },
            { 'id': 3, 'title': '1984' },
            { 'id': 4, 'title': 'Pride and Prejudice' },
            { 'id': 5, 'title': 'The Catcher in the Rye' },
            { 'id': 6, 'title': 'The Great Gatsby' },
      ]);
});
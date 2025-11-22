import express from "express"
import axios from "axios";
import patb from "path";
import { fileURLToPath } from "url"

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = patb.dirname(__filename);

// using files in /public folder
app.use(express.static(patb.join(__dirname, 'public')));

// route: / (serve index.html)
app.get("/",  (req, res) => {
    res.sendFile(patb.join(__dirname, 'public', 'index.html'));
});

// route: /dictionary
app.get("/dictionary/:word", async (req, res) => {
    const { word } = req.params;

    try {
        const apiRes = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        res.json(apiRes.data); // return raw JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching word definition' });
    }
});

// route: /quotes
app.get("/quotes", async (req, res) => {
    try {
        const apiRes = await axios.get(
            `https://bible-api.com/data/web/random`
        ); 
        res.json(apiRes.data); // return raw JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching random quote' });
    }
});

// route: /books
app.get("/books/:query", async (req, res) => {
    const { query } = req.params;

    try {
        const apiRes = await axios.get(
            `https://gutendex.com/books/?search=${encodeURIComponent(query)}`
        );
        res.json(apiRes.data); // return raw JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching books' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




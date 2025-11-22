export class BooksAPI {
    static async fetchBooks(word, searchToken, currentSearchToken, resultDiv) {
        // creating books section
        const booksSection = document.createElement('div');
        booksSection.style.marginTop = '32px';
        
        const booksTitle = document.createElement('div');
        booksTitle.className = 'word-title';
        booksTitle.style.fontSize = '1.3rem';
        booksTitle.textContent = `Books containing "${word}"`;
        booksSection.appendChild(booksTitle);

        const list = document.createElement('ul');
        list.style.marginLeft = '18px';

        try {
            const res = await fetch(`/books/${encodeURIComponent(word)}`);
            const data = await res.json();

            if (data.results && data.results.length > 0) {
                // limit to 5 books
                data.results.slice(0, 10).forEach(book => {
                    const li = document.createElement('li');
                    li.textContent = book.title;
                    list.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No books found';
                list.appendChild(li);
            }
        } catch {
            const li = document.createElement('li');
            li.textContent = 'Error fetching books';
            list.appendChild(li);
        }

        // check if this is the latest search
        if (currentSearchToken !== searchToken) return;
        booksSection.appendChild(list);
        resultDiv.appendChild(booksSection);
    }
}
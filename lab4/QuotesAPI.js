export class QuotesAPI {
    static async fetchQuotes(searchToken, currentSearchToken, resultDiv) {
        console.log('Fetching random quotes');
        // creating quotes section 
        const quotesSection = document.createElement('div');
        quotesSection.style.marginTop = '24px';
        const quotesTitle = document.createElement('div');
        quotesTitle.className = 'word-title';
        quotesTitle.style.fontSize = '1.3rem';
        quotesTitle.textContent = `Random verses`;
        quotesSection.appendChild(quotesTitle);

        const list = document.createElement('ul');
        list.style.marginLeft = '18px';

        // fetch 5 random verses
        for (let i = 0; i < 5; i++) {
            try {
                const res = await fetch(`https://bible-api.com/data/web/random`);
                const data = await res.json();
                console.log(data);

                if (data) {
                    const li = document.createElement('li');
                    li.textContent = `"${data.random_verse.text}" — ${data.random_verse.book} ${data.random_verse.chapter}:${data.random_verse.verse}`;
                    list.appendChild(li);
                } else {
                    const li = document.createElement('li');
                    li.textContent = 'No verse found';
                    list.appendChild(li);
                }
            } catch {
                const li = document.createElement('li');
                li.textContent = 'Error fetching verse';
                list.appendChild(li);
            }
        }

        // check if this is the latest search
        if (currentSearchToken !== searchToken) return;
        quotesSection.appendChild(list);
        resultDiv.appendChild(quotesSection);
    }
}
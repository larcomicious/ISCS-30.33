export class QuotesAPI {
    static async fetchQuotes(searchToken, currentSearchToken, resultDiv) {
        const quotesSection = document.createElement('div');
        quotesSection.style.marginTop = '24px';

        const quotesTitle = document.createElement('div');
        quotesTitle.className = 'word-title';
        quotesTitle.style.fontSize = '1.3rem';
        quotesTitle.textContent = `Random verses`;
        quotesSection.appendChild(quotesTitle);

        const list = document.createElement('ul');
        list.style.marginLeft = '18px';

        for (let i = 0; i < 5; i++) {
            try {
                const res = await fetch(`/quotes`);
                const data = await res.json();

                const verse = data.random_verse;

                const li = document.createElement('li');
                li.textContent = `"${verse.text}" — ${verse.book} ${verse.chapter}:${verse.verse}`;
                list.appendChild(li);
            } catch {
                const li = document.createElement('li');
                li.textContent = 'Error fetching verse';
                list.appendChild(li);
            }
        }

        if (currentSearchToken !== searchToken) return;
        quotesSection.appendChild(list);
        resultDiv.appendChild(quotesSection);
    }
}

export class DictionaryAPI {
    static async fetchWord(word) {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Word not found');
        return await res.json();
    }
}
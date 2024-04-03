
async function submit() {
    let inputBox = document.getElementById("input-box").value;
    let text = document.querySelector(".text");
    try {
        const jsonData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`)
        const data = await jsonData.json();
        console.log(data);
        let meanings = data[0].meanings;
        let firstThreeSynonyms = meanings[0].synonyms.slice(0, 3).join(', ');

        text.innerHTML = `
            <h2>Word: <span>${data[0].word}</span></h2>
            <p>Meaning: <span>${meanings[0].definitions[0].definition}</span></p>
            <p>PartsOfSpeech: <span>${meanings[0].partOfSpeech}</span></p>
            <p>Synonyms: <span>${firstThreeSynonyms}</span></p>
        `;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

















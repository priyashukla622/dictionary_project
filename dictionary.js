
let inputBox = document.getElementById("input-box");
let button = document.getElementById("button");
const getData = async (searchValue) => {
    try {
        let apiUrl = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
        let jsonData = await apiUrl.json();

        document.querySelector(".text").innerHTML = '';
        let div = document.createElement("div");
        div.classList.add("detail");
        let synonyms = jsonData[0].meanings[0].synonyms.join(", "); 
        div.innerHTML = `<h2>Word: <span>${jsonData[0].word}</span></h2>
            <p>Part of Speech: ${jsonData[0].meanings[0].partOfSpeech}</p>
            <p>Meaning: <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example: <span>${jsonData[0].meanings[0].definitions[0].example || "Not Found"}</span></p>
            <p>Synonyms: <span>${synonyms || "Not Found"}</span></p>`; 
        document.querySelector(".text").appendChild(div);

        console.log(jsonData);
        console.log(jsonData[0].word);
        console.log(jsonData[0].meanings[0].definitions[0].definition);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

button.addEventListener("click", function() {
        let searchValue = inputBox.value;
        if (searchValue == "") {
                alert('Please enter a value');
        } else {
            getData(searchValue);
        }
});
    






















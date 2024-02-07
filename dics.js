const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/close';
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].meanings[1]);
        

    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// data fecht krna

// let inputBox = document.getElementById("input-box");
// let butt = document.getElementById("button")
// const getData=async()=>{
//     const apiUrl =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/close`);
//     const jsonData=await apiUrl.json();
//     console.log(jsonData)

// }
// getData();
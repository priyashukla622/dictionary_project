// const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/close';
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data[0].meanings[1]);
//         console.log(data);



        

//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });



// const apiUrl = 'http://www.omdbapi.com/?t=&apikey=c37526bb';
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data[0].meanings[1]);
//         console.log(data);
//     });
        

//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });


// const apiUrl = 'https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?projection=lite&key';
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data[0].meanings[1]);
//         console.log(data);
//     });



// const movieTitle = 'Interstellar'; // Replace with the title of the movie you want to search for
// const apiUrl = `http://www.omdbapi.com/?t=${movieTitle}&apikey=c37526bb`;

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });


// data fecht krna

// let inputBox = document.getElementById("input-box");
// let butt = document.getElementById("button")
// const getData=async()=>{
//     const apiUrl =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/close`);
//     const jsonData=await apiUrl.json();
//     console.log(jsonData)

// }
// getData();



// const apiUrl = `http://www.omdbapi.com/?t=ABCD&apikey=c37526bb`;

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
//         const info=data
//         // console.log(info)
//         const Title=info.Title
//         console.log(Title)
//         const Year=info.Year
//         console.log(Year)

//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });


// const api=`http://www.omdbapi.com/?t=ABCD&apikey=c37526bb`
// fetch(api)
//      .then(response=>response.json())
//      .then(data=>{
//         console.log(data);
//      })
//      .catch(error =>{
//         console.log("error")
//      })


    //  fetch(`http://www.omdbapi.com/?t=ABCD&apikey=c37526bb`)
    //       .then(response=>response.json())
    //       .then(data=>{
    //          console.log(data);
    //       })
    //       .catch(error =>{
    //          console.log("error")
    //       })

// fetch(`http://www.omdbapi.com/?t=ABCD&apikey=c37526bb`)
//      .then(res=>res.json())
//      .then(data=>{
//      console.log(data);
//     })
//     .catch(error =>{
//        console.log("error")
//     })

// async function data(){
//   try{
//     let api=await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb')
//     let jsonData=await api.json();
//     console.log(jsonData)

//   }catch(err){
//     console.log(err)
//   }
// }


// async function create(){
//   try{
//     let a=await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb')
//     let b=await a.json();
//     console.log(b)

//   }
//   catch(err){
//       console.log(err)

//   }
// }
// create();







// data ko fetch krna
// async function getData() {
//    try {
//        let apiUrl = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/happy`);
//        let jsonData = await apiUrl.json();
//        console.log(jsonData); 
//    } catch (error) {
//        console.error('Error fetching data:', error);
//    }
// }

// getData();




// async function getData(){
//  try{
//    let data= await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/happy');
//    let jsonData= await data.json();
//    console.log(jsonData)
//  }
//  catch(error){
//    console.log("error feching", error)
//  }
// }
// getData()





// let apiUrl=('')
// fetch(apiUrl)
//     .then(response=>response.json())
//     .then(data=>{
//       console.log(data)

//    })
//    .catch(error=>{
//       console.log("error", error)
//    })
    




// async function create(){
//     try{
//       let a=await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb')
//       let b=await a.json();
//       console.log(b)
//     //   const data=document.createElement('div');
//     //   data.innerHTML=`<h2>Title:<span>${b[0].Title}</span></h2>`
    
//       console.log(b.Title)
//     }
//     catch(err){
//         console.log(err)
  
//     }
//   }
//   create();



// async function create() {
//     try {
//         const data = document.createElement('div');
//         let a = await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb');
//         let b = await a.json();
//         // data.textContent = b // Assuming you want to display the title
//         data.textContent = JSON.stringify(b)
//         document.body.appendChild(data); 
//     } catch (err) {
//         console.log(err);
//     }
// }



// show data on browser @@@@@@@@@@@@@@@@@@@@@@@@@@@@
// async function create(){
//     try{
//         const data=document.createElement('div');
//         let a=await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb')
//         let b=await a.json();
//         data.textContent=JSON.stringify(b);
//         document.body.appendChild(data);
//     }catch(e){
//         console.log(e)
//     }
// }







// function create() {
//     const data = document.createElement("div");
//     fetch("http://www.omdbapi.com/?t=ABCD&apikey=c37526bb")
//         .then(response => response.json())
//         .then(jsonData => {
//             console.log(jsonData);
//             data.textContent = JSON.stringify(jsonData); // Changed Newdata to data
//             document.body.appendChild(data); // Appended data
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }



// async function create() {
//     try{
//         const data = document.createElement("div");
//         let a=await fetch("http://www.omdbapi.com/?t=ABCD&apikey=c37526bb")
//         let b=await a.json();
//         data.textContent = JSON.stringify(b); 
//         document.body.appendChild(data);
//     }       
//     catch(err) {
//         console.log(err);
//     };
// }


// @@@@@@@@@@@@@@@@@@@@@@@@ input box pr click krne click krne pr data aeiga@@@@@@@@@@@@@@@@@@@@

        // async function create() {
        //     try {
        //         const data = document.createElement("div");
        //         const inputBoxValue = document.getElementById("input-box").value;
        //         let response = await fetch(`http://www.omdbapi.com/?t=${inputBoxValue}&apikey=c37526bb`);
        //         let jsonData = await response.json();
        //         data.textContent = JSON.stringify(jsonData); 
        //         document.body.appendChild(data);
        //     } catch(err) {
        //         console.error(err);
        //     }
        // }

        // document.getElementById("input-box").addEventListener("input", create);


       



        



let apiUrl=('http://localhost:5000/users/readPost')
fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
      console.log(data)

   })
   .catch(error=>{
      console.log("error", error)
   })













    
//  show data on braower@@@@@@@@@@
        // async function create() {
        //     let a = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/happy`);
        //     let b = await a.json();
        //     console.log(b);
        // }
        
        // create();
        
        





















// function submit() {
//     let inputBox = document.getElementById("input-box").value;
//     let text = document.querySelector(".text");

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`)
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);

//         let meanings = data[0].meanings;
//         let firstThreeSynonyms = meanings[0].synonyms.slice(0, 3).join(', ');

//         text.innerHTML = `
//             <h2>Word: <span>${data[0].word}</span></h2>
//             <p>Meaning: <span>${meanings[0].definitions[0].definition}</span></p>
//             <p>PartsOfSpeech: <span>${meanings[0].partOfSpeech}</span></p>
//             <p>Synonyms: <span>${firstThreeSynonyms}</span></p>
//         `;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }







// async function create(){
//     try{
//       let a=await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb')
//       let b=await a.json();
//     //   console.log(b)
//     //   const data=document.createElement('div');
//     //   data.innerHTML=`<h2>Title:<span>${b[0].Title}</span></h2>`
    
//       console.log(b.Title)
//     }
//     catch(err){
//         console.log(err)
  
//     }
//   }
//   create();






// function submit() {
//     let inputBox = document.getElementById("input-box").value;
//     let text = document.querySelector(".text");

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`)
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);

//         let meanings = data[0].meanings;
//         let firstThreeSynonyms = meanings[0].synonyms.slice(0, 3).join(', ');

//         text.innerHTML = `
//             <h2>Word: <span>${data[0].word}</span></h2>
//             <p>Meaning: <span>${meanings[0].definitions[0].definition}</span></p>
//             <p>PartsOfSpeech: <span>${meanings[0].partOfSpeech}</span></p>
//             <p>Synonyms: <span>${firstThreeSynonyms}</span></p>
//         `;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }














// function submit() {
//     let inputBox = document.getElementById("input-box").value;
//     let text = document.querySelector(".text");

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`)
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);

//         let meanings = data[0].meanings;
//         let firstThreeSynonyms = meanings[0].synonyms.slice(0, 3).join(', ');

//         text.innerHTML = `
//             <h2>Word: <span>${data[0].word}</span></h2>
//             <p>Meaning: <span>${meanings[0].definitions[0].definition}</span></p>
//             <p>PartsOfSpeech: <span>${meanings[0].partOfSpeech}</span></p>
//             <p>Synonyms: <span>${firstThreeSynonyms}</span></p>
//         `;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }



// async function submit() {
//     let inputBox = document.getElementById("input-box").value;
//     let text = document.querySelector(".text");
//     try{
//         const jsonData= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`)
//         const data=await jsonData.json();
//         console.log(data)
//             let meanings = data[0].meanings;
//             let firstThreeSynonyms = meanings[0].synonyms.slice(0, 3).join(', ');
    
//             text.innerHTML = `
//                 <h2>Word: <span>${data[0].word}</span></h2>
//                 <p>Meaning: <span>${meanings[0].definitions[0].definition}</span></p>
//                 <p>PartsOfSpeech: <span>${meanings[0].partOfSpeech}</span></p>
//                 <p>Synonyms: <span>${firstThreeSynonyms}</span></p>
//             `;
//     }catch(err){
//         console.error('Error fetching data:', err);
//     }   
// }
// submit()



// async function create(){
//     try{
//       let a=await fetch('http://www.omdbapi.com/?t=ABCD&apikey=c37526bb')
//       let b=await a.json();
//     //   console.log(b)
//     //   const data=document.createElement('div');
//     //   data.innerHTML=`<h2>Title:<span>${b[0].Title}</span></h2>`
    
//       console.log(b.Title)
//     }
//     catch(err){
//         console.log(err)
  
//     }
//   }
//   create();



// Example of a Promise
let myPromise = new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data)
        setTimeout(() => {
            // Resolve the Promise with a value
            resolve("Data fetched successfully");
            
            // Reject the Promise with an error
            reject("Error fetching data");
        }, 2000);
    });
    
    // Handling the Promise
    myPromise
        .then((result) => {
            console.log(result); // Output: Data fetched successfully
        })
        .catch((error) => {
            console.error(error); // Output: Error fetching data
        });
    










let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let API_KEY = "hf7akHlua36mdEMjdyZYt4oQZPwZTV0zhyrTdDfZ";//save our api key
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);//making a api request 
  console.log(response)//checking wether everything is fine
  let data = await response.json() //going to get the data out
  console.log(data) 
  useApiData(data);
  
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML += `<font face = "Lucida Calligraphy"><h1>${data.title}</h1></font>`
  document.querySelector("#content").innerHTML += data.explanation
  document.querySelector("#content").innerHTML += `<img src = "${data.url}">`
}


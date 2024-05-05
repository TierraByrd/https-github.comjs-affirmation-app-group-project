function makeFire(){
  let fireDiv = document.getElementById("fireDiv")
  fireDiv.innerHTML += `
    <span onClick="deleteFire(event)">
    🔥
    </span>
  `
}

function MakeSnowflake(){
  let fireDiv = document.getElementById("snowDiv")
  //grabbing the div we created in html
  fireDiv.innerHTML += 
  //adding it in this span
  `
    <span onClick="deleteSnowflake(event)">
    ❄️
    </span>
  `

}


function handleSubmit(event) {
  console.log("handleSubmit works...")
  // ! preventDefault() is needed when you have a button/handler inside a <form>
  event.preventDefault()

  let affirmation = document.getElementById("affirmationInput").value
  let author = document.getElementById("authorInput").value
      console.log(`Author is: ${author}, Affirmation is: ${affirmation}`)

      

let affirmationList = document.getElementById("affirmationList")
console.log("Current list",affirmationList)


affirmationList.innerHTML += `
  
  <tr>
  <td> ${affirmation} </td>
  <td> ${author} </td>
  <td> <button onClick =" deleteThis(event) "> ❌ </button></td>
  </tr>`

      
    
}


function deleteThis(event) {
  let task = event.target.parentElement.parentElement;
  task.remove();
}


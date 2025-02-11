let login = JSON.parse(localStorage.getItem("objlog"))

getmarks(login)

function getmarks(ele){

    let card = document.getElementById("card")
    card.innerHTML = `

     <div class="card-body ">
              <h5 class="card-title">Score board</h5>
              <p class="card-text"><h5>Name : </h5>${ele.firstname}</p>
              <p class="card-text"><h5>Email : </h5>${ele.email}</p>
              <p class="card-text"><h5>Subject : </h5>${ele.Subject}</p>
              <p class="card-text"><h5>Marks : </h5>${ele.Marks}</p>
              
              
    </div>
    `

}
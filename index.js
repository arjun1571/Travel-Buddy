// this is object section

var carObject = {
  vehicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  farePerKilo: 3,
  capacity: 2,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

var busObject = {
  vehicle: "bus",
  imageUrl:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  farePerKilo: 4,
  capacity: 4,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var bikeObject = {
  vehicle: "Bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

  farePerKilo: 2,

  capacity: 2,

  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var bootObject = {
  vehicle: "Boot",
  imageUrl:
    "https://images.unsplash.com/photo-1613690399151-65ea69478674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFpbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  farePerKilo: 5,

  capacity: 10,

  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};


const servicesArr = [bikeObject,carObject,busObject,bootObject];

function displayServices(services) {
  const mainSection = document.getElementById("main-content");
  const stu = JSON.stringify(services);
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card  mb-3 mx-auto " >
          <div class="mt-10 row g-0">
            <div class="col-md-4">
              <img
                src=${services.imageUrl}
                class="img-fluid rounded-start h-100"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Transport Mood:${services.vehicle}</h5>
                <p class="card-text">
                  ${services.description}
                </p>
                <p class="card-text">
                    <small class="text-muted">Fare per kilo : ${services.farePerKilo}</small> <small class="text-muted">Capacity:${services.capacity}</small>
                </p>
                <!-- Button trigger modal -->
                <button type="button" onclick='handleBook(${stu})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button>

              </div>
            </div>
          </div>
        </div>
`;
  mainSection.appendChild(div);

}
// displayServices(carObject);
// displayServices(bikeObject);
// displayServices(busObject);

function displayServicesArr(arr){
  for(let i=0; i<arr.length; i++){
    const element = arr[i];
    displayServices(element)
  }
}
displayServicesArr(servicesArr);

// handle booking info 
function handleBook(stu){
  const modalBody = document.getElementById("modal-body");
  const obj = JSON.stringify(stu);
  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 28rem;">
  <img src="${stu.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mod : ${stu.vehicle}</h5>
    <p class="card-text">${stu.description}</p>
    <p class="card-text">
      <small class="text-muted">Fare per kilo : ${stu.farePerKilo}</small> <small class="text-muted">Capacity: ${stu.capacity}</small>
    </p>
    <p class="card-text">
      <small  class="text-muted">Fare : <span id="fare-div"></span> </small></small>
    </p>
    <p class="card-text">
      <small class="text-muted">Tax (20%) : <span id="tax"></span> </small></small>
    </p>
    <p class="card-text">
      <small class="text-muted">Total Cost : <span id="totalAmount"></span> </small></small>
    </p>
    <div class="d-flex flex-column">
      <input class="form-control m-2" id="distance-input" type="number" placeholder="koto kilo jaba" aria-label="Search" />
      <input class="form-control m-2" id="quantity-input" type="number" placeholder="koita gari lagbe" aria-label="Search" />
      <button onclick='calculateCost(${obj})' class="btn btn-outline-success m-2" type="submit">
       Submit
      </button>
    </div>
  </div>
</div>
  `

// const div = document.createElement("div");
// div.innerHTML=`
//   <div class="card mx-auto" style="width: 28rem;">
//   <img src="${stu.imageUrl}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Vehicle Mod : ${stu.vehicle}</h5>
//     <p class="card-text">${stu.description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// `
// modalBody.appendChild(div);


}

function calculateCost(obj){
  const distanceInput = document.getElementById("distance-input").value;
  const quantityInput = document.getElementById("quantity-input").value;
  const taxAmount = document.getElementById("tax");
  const totalAmount = document.getElementById("totalAmount");

  const fare = document.getElementById("fare-div");
  const calculation = distanceInput * quantityInput * obj.farePerKilo;
  fare.innerHTML=calculation;
  
  const taxTk= taxAmount.innerText = calculation * 20 / 100;

  totalAmount.innerText = calculation + taxTk;
  

}

var productList = [];
var currentId;
fetchData();

function showData(){
  var cartona='';
  for(let i=0;i<productList.length;i++){
    cartona += `
    <tr>
      <td>${productList[i].name}</td>
      <td>${productList[i].price}</td>
      <td>${productList[i].description}</td>
      <td>${productList[i].userId}</td>
      <td>
        <button class="btn btn-danger" onclick="deleteProduct(${productList[i].id})"> Delete </button>
        <button class="btn btn-warning" onclick="updateProduct(${productList[i].id})"> Update </button>
      </td>
    </tr>
    `
  }
  document.getElementById("tbody").innerHTML=cartona;
}

function fetchAPI (method,endpoint,data){
  fetch(`http://localhost:3000/${endpoint}`,{
    method,
    headers:{
      "content-Type":"application/json"
    },
    body:JSON.stringify(data)
  }).then(res=>{console.log(res);
                  if(res.message == "Done!"){
                    fetchData();
                  }
    });
}
//GETALLDATA
function fetchData(){
  fetch('http://localhost:3000/getAllProducts')
      .then(response=>response.json())
      .then(res=>{
        if(res.message == "Done!"){
          productList=res.data;
          showData();
        }
      })
}

//ADD PRODUCT
function addProduct(){
  let productName=document.getElementById("productName").value;
  let productPrice=document.getElementById("productPrice").value;
  let productDesc=document.getElementById("productDesc").value;
  let userId=document.getElementById("userId").value;
  let productObj={
    name:productName,
    price:productPrice,
    description:productDesc,
    userId:userId
  }
  fetchAPI('POST','addProduct',productObj);
  console.log(productName,productPrice,productDesc,userId)
}
//DELETE PRODUCT
function deleteProduct (id){
  console.log(id)
  fetchAPI('DELETE','deleteProduct',{id})
}
//UPDATE PRODUCT
function updateProduct(id){
  currentId=id;
  let currentItem=productList.filter(ele => ele.id==id);
  console.log(currentItem);
  document.getElementById("productName").value=currentItem.name;
  document.getElementById("productPrice").value=currentItem.price;
  document.getElementById("productDesc").value=currentItem.description;
  document.getElementById("userId").value=currentItem.userId;
  document.getElementById("add").classList.add("d-none");
  document.getElementById("update").classList.add("d-block");
}
//CALLUPDATE
function callUPDATE(){
  let productName=document.getElementById("productName").value;
  let productPrice=document.getElementById("productPrice").value;
  let productDesc=document.getElementById("productDesc").value;
  let userId=document.getElementById("userId").value;
  let productObj={
    name:productName,
    price:productPrice,
    description:productDesc,
    userId:userId,
    id:currentId
  }
  fetchAPI('PUT','updateProduct',productObj)
  document.getElementById("add").classList.remove("d-none");
  document.getElementById("update").classList.remove("d-block");
}

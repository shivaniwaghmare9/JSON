

let fetchData= async ()=>{
    let url="http://localhost:3000/carrental"
    let res= await fetch(url,{method:"GET"})
    // let data=await res.json()
   // console.log(res);                  //response
    let data=await res.json()
    console.log(data);                     //show data



let show1=document.querySelector("#show")
data.map((e)=>{
   show1.innerHTML+=
   `
   <tr id="element">
   
   <td id="name">${e.name}</td>
   <td id="age">${e.age}</td>
   <td id="city">${e.aadhhar}</td>
   <td id="crs">${e.mobile}</td>
   <td id="uni">${e.date}</td>
   <td id="sno">${e.destination}</td>
   <td id="name">${e.person}</td>
   <td id="age">${e.price}</td>
   <td id="city">${e.price*e.person}</td>
   <td onclick="del('${e.id}')">Cancel</td>
    <td onclick="formfill('${e.id}')">Update</td>
   </tr>

   `
})
}
let del=(id)=>{
    let url=`http://localhost:3000/carrental/${id}`;
    fetch(url,{method:"DELETE"});

}
   
let ins=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value
    let inpmobile=document.querySelector("#mobile").value
    let inpaadhar=document.querySelector("#aadhhar").value
    let inpdate=document.querySelector("#date").value
    let inpdesti=document.querySelector("#destination").value
    let inpperson=document.querySelector("#person").value

    let url='http://localhost:3000/carrental'

    fetch(url,{

        method:"POST" ,

        headers:{
            "Content-type":"application/json"
        },

        body:JSON.stringify(
            {
                "name":inpname,
                "age":inpage,
                "aadhhar":inpaadhar,
                "mobile":inpmobile,
                "date":inpdate,
                "destination":inpdesti,
                "person":inpperson,
                "price":500
            }
        )
    })

    location.href="crud.html"
    return false
    
}

let formfill= async(id)=>{
    let url=`http://localhost:3000/carrental/${id}`
    let res= await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data);                     //show data

    let formdata=`

        Enter name: <input type="text" id="upname" value="${data.name}">
        

        
    `
    document.querySelector("#formdata").innerHTML=formdata


}
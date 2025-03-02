

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
   <td onclick="confirmdeletee('${e.id}')">Cancel</td>
    <td onclick="formfill('${e.id}')">Update</td>
   </tr>
`
})
}
let confirmdeletee=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
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

        Enter name: <input type="text" id="upname" value="${data.name}"><br><br>
         Enter age: <input type="number" id="upage" value="${data.age}"><br><br>
        Enter number: <input type="number" id="upmobile" value="${data.mobile}"><br><br>
        Enter aadhar: <input type="aadhar" id="upaadhhar" value="${data.aadhhar}"><br><br>
        Enter date: <input type="date" id="update" value="${data.date}"><br><br>
        Enter destination: <select  id="updestination">
            <option value="bhopal">Bhopal</option>
            <option value="indore">Indore</option>
            <option value="pune">Pune</option>
            <option value="delhi">Delhi</option>
            <option value="betul">Betul</option>
        </select><br><br>
        Enter person: <input type="number" id="upperson" value="${data.person}"><br><br>

       <input type="submit" value="Update" onclick="return finalupdate('${data.id}')" id="ret">
    `
    document.querySelector("#formdata").innerHTML=formdata
}

let finalupdate=(id)=>{
    let inpname=document.querySelector("#upname").value
    let inpage=document.querySelector("#upage").value
    let inpmobile=document.querySelector("#upmobile").value
    let inpaadhar=document.querySelector("#upaadhhar").value
    let inpdate=document.querySelector("#update").value
    let inpdesti=document.querySelector("#updestination").value
    let inpperson=document.querySelector("#upperson").value

    let url=`http://localhost:3000/carrental/${id}`

    fetch(url,{

        method:"PUT" ,

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
    
       
        return false
        
    }

let displaydata=async()=>{
    let url="http://localhost:3000/carental"
    let replay= await fetch(url,{method:"GET"})
    let store= await replay.json()
    console.log(store);

    let see=document.querySelector("#display")
    store.map((e)=>{
        see.innerHTML+=
        `
       <tr>
         <td>${e.name}</td>
         <td>${e.age}</td>
         <td>${e.mobile}</td>
         <td>${e.aadhhar}</td>
         <td>${e.licence}</td>
         <td>${e.date}</td>
         <td>${e.desti}</td>
         <td>${e.location}</td>
         <td>${e.car}</td>
         <td>${e.price}</td>
         <td onclick="sure('${e.id}')">Cancel</td>
         <td onclick="edit('${e.id}')">Upadate</td>

      </tr>
        `

    })
}

//===============================================delete(sure) funtion====================================================================

let sure=(id)=>{
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
            remove(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
 }
//=================================================(REMOVE) function================================================================

let remove=()=>{
    let url=`http://localhost:3000/carental/${id}`
    fetch(url,{method:"DELETE"})

}

//================================================(FULLFILL{FORM}) FUNCTION=============================================================================================


let fill=()=>{

    let fillname=document.querySelector("#name").value
    let fillage=document.querySelector("#age").value
   // let fillnumber=document.querySelector("#mobile").value
     let fillaadhhar=document.querySelector("#aadhhar").value
     let filllicence=document.querySelector("#licence").value
     let filldate=document.querySelector("#date").value
     let filldesti=document.querySelector("#desti")
     let filllocation=document.querySelector("#location")
     let fillcar=document.querySelector("#car")



    let errname=document.querySelector("#name")
    let errage=document.querySelector("#age")
   // let errnumber=document.querySelector("#mobile")
     let erraadhhar=document.querySelector("#aadhhar")
     let errlicence=document.querySelector("#licence")
     let errdate=document.querySelector("#date")


     let errdesti=document.querySelector("#errordesti")
     let errlocation=document.querySelector("#errorlocation")
     let errcar=document.querySelector("#errorcar")


    if(fillname==""){
  
        errname.style.border="3px solid red"
        errname.placeholder=" Enter The Name"
        errname.style.color="red"
        return false;
        }

    if(fillage==""){
  
            errage.style.border="3px solid red"
            errage.placeholder=" Enter The Age"
            errage.style.color="red"
            return false;
    }
    
    //  if(fillnumber==""){
    //      errnumber.style.border="3px solid red" 
    //      errnumber.placeholder=" Enter The Age" 
    //      errnumber.style.color="red" 
    //       return false;
    // }

    if(fillaadhhar==""){
  
          erraadhhar.style.border="3px solid red"
          erraadhhar.placeholder=" Enter The Aadhhar"
           erraadhhar.style.color="red"
          return false;
   }
   
    if(filllicence==""){
  
        errlicence.style.border="3px solid red"
         errlicence.placeholder=" Enter The Licence-Number"
         errlicence.style.color="red"
         return false;
    }
     if(filldate==""){
  
         errdate.style.border="3px solid red"
         errdate.placeholder=" Enter The Destination"
         errdate.style.color="red"
         return false;
    }
    if(filldesti==""){
  
        errdesti.style.border="3px solid red"
        errdesti.innerHTML=" Enter The Destination"
        errdesti.style.color="red"
        return false;
   }

    if(filllocation==""){
  
        errlocation.style.border="3px solid red"
        errlocation.innerHTML=" Enter The Location"
        errlocation.style.color="red"
        return false;
   }

   if(fillcar==""){
  
    errcar.style.border="3px solid red"
    errcar.innerHTML=" Choose Car type"
    errcar.style.color="red"
    return false;
  }
//   else if(fillnumber.length!==10){
//     errnumber.innerHTML="Enter 10 digit"
//     errnumber.style.color="red"
//     return false;
//  }
else if(fillaadhhar.length!==12){
    erraadhhar.placeholder="Enter 12 digit"
    erraadhhar.style.color="red"
    return false;
 }
 else if(filllicence.length!==16){
    errlicence.placeholder="Enter valid digit Number"
    errlicence.style.color="red"
    return false;
 }
 else if(fillage.length!==2){
    errage.placeholder="Enter valid Age"
    errage.style.color="red"
    return false;
 }



}

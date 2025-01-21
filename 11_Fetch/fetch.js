// fetch API
//IN Node js browser is node available
//the first fetch API comes in the marked by XMLHttp Request
//->library Fetch API
// Fetch API included in Node Js
//


//Example

fetch("http:example.com/api/endpoint")
.then((response)=>{
    //Do something with response
})
.catch(function(err){
    console.log("Unable to fetch -",err);
    
})

// benefits of fetch in java script

/* the global fetch() method starts the process of fetching a resource from the network
returning  promise which is fulfilled once the response is available*/

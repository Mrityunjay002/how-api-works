var url="https://apis.scrimba.com/jsonplaceholder/posts";

function add(event){
  event.preventDefault();
  const title=document.getElementById("title").value;
  const body=document.getElementById("body").value;
   const db={
    
    title:title,
    body:body
  }
 
  const options={
    method:"POST",
    body: JSON.stringify(db),
    headers: {
      "Content-Type": "application/json"
  }

  }
  fetch(url,options).then(res=>res.json()).then(post=>{
    var div=document.createElement('div')
    var html=`
    
    <h3>${db.title}</h3>
    <p>${db.body}</p>
  
  `
  div.innerHTML=html
  div.classList.add("fun")
  document.getElementById("blog-posts").appendChild(div)
  })
}


fetch(url,{method:"GET"})
.then(request=>request.json())
.then(data=>{
  
    const postArr=data.slice(0,5);
   
    console.log(postArr);
   for(let item of postArr){
    var html=`
    
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    
    `
    var div=document.createElement("div");
    div.classList.add("fun")
    div.innerHTML=html;
    document.getElementById("blog-posts").appendChild(div);
    console.log("done");
   }

})
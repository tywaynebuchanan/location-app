

document.getElementById("root").innerHTML = `

<div class = "container">
        <div class = "formData">
            <label for = "search">Search</label>
            <input type="text" id = "search" name = "search">
            <input type = "button" id = "searchBtn" name = "searchBtn" value = "Search">
            <p id = "results"></p>
        </div>
    </div> 
`
let searchBox = document.getElementById('search')

searchBox.addEventListener("keyup",(e)=>{
    let searchquery = e.target.value;
    document.getElementById("results").innerText = searchquery;
    let data = {Addresses: [searchquery]}
    fetch('https://devapi.alvys.io/api/carriers/QueryCarriersByAddress', {
	"method": "POST",
    body: JSON.stringify(data),
    	"headers": {
		'Authorization':'Basic amRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks=',
        'Content-type': 'application/json'
	},
   
})
.then(response => response.json()).then(json => {
    json.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = element.Name;
        results.appendChild(div)
        
    });
}).catch(error => {console.error(error)})
})









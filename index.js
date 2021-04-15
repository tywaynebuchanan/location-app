

document.getElementById("root").innerHTML = `

<div class = "container">
        <div class = "formData">
            <label for = "search">Search</label>
            <input type="text" id = "search" name = "search">
            <input type = "button" id = "searchBtn" name = "searchBtn" value = "Search">
        </div>
    </div> 
`

const data = {Addresses: "Miami FL"}
fetch('https://devapi.alvys.io/api/carriers/QueryCarriersByAddress', {
	"method": "POST",
    body: JSON.stringify(data),
    	"headers": {
		'Authorization':'Basic amRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks=',
        'Content-type': 'application/json'
	},
   
})
.then(response => response.json()).then(json => console.log(json)).catch(error => {console.error(error)})





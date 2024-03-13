const endpoint = "https://www.scorebat.com/video-api/v3/feed/?token=MTQ2MTExXzE3MTAyOTY2MjBfNTQzOWU5YjdiYzMzNjdhMmQyZWZhMGUwMTQwYzA1ZDI4YjE2Y2Y0Nw=="

let cargardatos = (endpoint) => {
    fetch(endpoint)
        .then(response => response.json())
        .then(result => {
            let tarjeta = document.getElementById("datos")
            tarjeta.innerHTML=""
            let respuesta= result.response
            
            respuesta.forEach(element => {
                
                let {title,competition,matchviewUrl,competitionUrl,thumbnail,date,}=element
                
                let template=`
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row d-flex position-relative">
                            <div class="col-6">
                                <img src="${thumbnail}" class="img-fluid" alt="">
                            </div>
                            <div class="col-6">
                                <h5 class="mt-0">Match: ${title}</h5>
                                <p>${competition}</p>
                                <p>Date: ${date}</p>
                                <a href="${matchviewUrl}" class="stretched-link">Game Details</a>
                                <a href="${competitionUrl}" class="stretched-link">Competition Details</a>
                            </div>
                        </div>
                    </div>
                </div>                
                `
                tarjeta.innerHTML+= template;                                
            });
        })
        .catch(error => {
            console.error("Error fetching or parsing JSON:", error);
        });
}

document.addEventListener("DOMContentLoaded",(event)=>{
    let boton = document.getElementById("cargarDatos")
    boton.addEventListener("click",()=>{
        cargardatos(endpoint)
    })
})

//cargardatos(endpoint)
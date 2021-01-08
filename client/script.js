var baseurl = 'http://localhost:3000'
$(document).ready( () => {
    auth()
    getCovid()
} )

function auth() {
    if (localStorage.access_token) {
        $(".login").hide()
        $(".register").hide()
        $("#user").show()
        $(".main-content").show()
        $(".create").hide()
        $(".edit").hide()
        getData()
    } else {
        $(".login").show()
        $(".register").hide()
        $("#user").hide()
        $(".main-content").hide()
    }
}

$("#toRegister").on( "click", (even) => {
    even.preventDefault()
    $(".register").fadeIn()
    $(".login").hide()
} )
$("#login").on( "click", (even) => {
    even.preventDefault()
    var email = $('#email').val()
    var password = $('#password').val()
    $.ajax({
        method: "POST",
        url: `${baseurl}/login`,
        data: {
            email,
            password
        }
    })
    .done( data => {
        localStorage.setItem('access_token', data.access_token)
        $('#userName').text(email)
        $("#user").show()
        $('.login').hide()
        $('.main-content').fadeIn()
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
} )
$("#register").on( "click", (even) => {
    even.preventDefault()
    var email = $('#emailreg').val()
    var password = $('#passwordreg').val()
    $.ajax({
        method: "POST",
        url: `${baseurl}/register`,
        data: {
            email,
            password
        }
    })
    .done( data => {
        $(".login").fadeIn()
        $(".register").hide()
    } )
    .fail( err => {
        console.log(err, email);
    } )
    .always( () => {

    } )
} )
$("#toCreate").on("click", (even) => {
    even.preventDefault()
    $(".create").fadeIn()
    $(".edit").hide()
} )
$('#logout').on( "click", (even) => {
    even.preventDefault()
    localStorage.clear()
    $('#email').val('')
    $('#password').val('')
    auth()
} )

$('#buat').on( 'click', (even) => {
    create()
} )

$('#save').on( 'click', (even) => {
    even.preventDefault()
    var judul = $('#juduledit').val()
    var deskripsi = $('#deskripsiedit').val()
    var alokasiWaktu = $('#alokasiWaktuedit').val()
    var id = $('#UserId').val()
    console.log(judul, deskripsi, alokasiWaktu, id);
    $.ajax({
        method: 'PUT',
        url: `${baseurl}/activities/${id}`,
        headers: {
            access_token: localStorage.access_token
        },
        data: {
            judul,
            deskripsi,
            alokasiWaktu
        }
    })
    .done( data => {
        $(".edit").hide()
        $(".home").fadeIn()
        getData()
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
} )

function create() {
    var judul = $('#judul').val()
    var deskripsi = $('#deskripsi').val()
    var alokasiWaktu = $('#alokasiWaktu').val()
    $.ajax({
        method: 'POST',
        url: `${baseurl}/activities`,
        headers: {
            access_token: localStorage.access_token
        },
        data: {
            judul,
            deskripsi,
            alokasiWaktu
        }
    })
    .done( data => {
        $(".create").hide()
        $(".home").fadeIn()
        getData()
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function getData() {
    $('.allActivities').empty()
    $.ajax({
        method: 'GET',
        url: `${baseurl}/activities`,//with id
        headers: {
            access_token: localStorage.access_token
        },

    })
    .done( data => {
        let dataActivities 
        data.forEach( el => {
            dataActivities += `<tr><td>${el.judul}</td><td>${el.deskripsi}</td><td>${el.alokasiWaktu}</td> <td> <button class="btn btn-primary" onclick="getEdit(${el.id})"> Edit </button>  <button class="btn btn-primary" onclick="deleteData(${el.id})"> Delete </button> </td></tr>`
        } )
        $('.allActivities').append( dataActivities)
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function getEdit(id) {
    $(".create").hide()
    $(".home").hide()
    $('.edit').fadeIn()
    $.ajax({
        method: 'GET',
        url: `${baseurl}/activities/${id}`,
        headers: {
            access_token: localStorage.access_token
        }
    })
    .done( data => {
        $('#juduledit').val(`${data.judul}`)
        $('#deskripsiedit').val(`${data.deskripsi}`)
        $('#alokasiWaktuedit').val(`${data.alokasiWaktu}`)
        $('#UserId').val(`${id}`)
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function deleteData(id) {
    $.ajax({
        method: 'DELETE',
        url: `${baseurl}/activities/${id}`,//with id
        headers: {
            access_token: localStorage.access_token
        },

    })
    .done( data => {
        getData()
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function getNews() {
    let list
    $.ajax({
        method: 'GET',
        url: `${baseurl}/activities/news`,
    })
    .done( data => {
        data.forEach(el => {
            let title = `${el.title}`
            let desc = `${el.desc}`
            let duration = `${el.duration}`
            list += `
            <li class="list-group-item news-list">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div><br>
            </li>`
        })
        $('.news-list').append(list)
    })
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function addCreate(title, desc, duration){
    even.preventDefault()
    $('#juduledit').text(title)
    $('#deskripsiedit').text(desc)
    $('#alokasiWaktuedit').text(duration)
    create()
}

let okee = ``
for (let i = 0; i < 10; i++) {
    okee += `
    <li class="list-group-item">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div><br>
    </li>`
}
$('.news-list').append(okee)



function getCovid() {
    let covid = ``
    $.ajax({
        method: 'GET',
        url: `${baseurl}/activities/covid`,
    })
    .done( data => {
        covid += `
            <li class="list-group-item">
                <h3>${data.dataCovid.total_spesimen}</h3>
                <p>Terkonfirmasi</p>
            </li>
            <li class="list-group-item">
                <h3></h3>
                <p>Dalam Perawatan</p>
            </li>
            <li class="list-group-item">
                <h3></h3>
                <p>Sembuh</p>
            </li>
            <li class="list-group-item">
                <h3></h3>
                <p>Meninggal</p>
            </li>
        `
        $('.covid-stats').append(covid)
    })
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}
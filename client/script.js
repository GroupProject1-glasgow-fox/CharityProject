var baseurl = 'http://localhost:3000'
$(document).ready( () => {
    auth()
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
        console.log(data)
        // $(".create").hide()
        // $(".home").fadeIn()
        // getData()
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function getData() {
    $.ajax({
        method: 'GET',
        url: `${baseurl}/activities`,//with id
        headers: {
            access_token: localStorage.access_token
        },

    })
    .done( data => {
        console.log(data)
        let dataActivities //= '<tbody>'
        data.forEach( el => {
            dataActivities += `<tr><td>${el.judul}</td><td>${el.deskripsi}</td><td>${el.alokasiWaktu}</td> <td> <button class="btn btn-primary"> Edit </button>  <button class="btn btn-primary"> Delete </button> </td></tr>`
        } )
        $('.allActivities').append( dataActivities)
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function edit(id) {
    var judul = $('#judul').val()
    var deskripsi = $('#deskripsi').val()
    var alokasiWaktu = $('#alokasiWaktu').val()
    $.ajax({
        method: 'PUT',
        url: `${baseurl}/activities/${id}`,//with id
        headers: {
            access_token: localStorage.access_token
        },
        data: {
            judul,
            deskripsi,
            alokasiWaktu,
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
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

$('#logout').on( 'click', (even) => {
    even.preventDefault()
    localStorage.clear()
    $('#email').val('')
    $('#password').val('')
    auth()
} )

function create(params) {
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
            alokasiWaktu,
            //id
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
    $.ajax({
        method: 'GET',
        url: `${baseurl}/activities`,//with id
        headers: {
            access_token: localStorage.access_token
        },

    })
    .done( data => {
        let dataActivities = '<tbody>'
        data.forEach( el => {
            dataActivities += `<tr><td>${el.judul}</td><td>${el.deskripsi}</td><td>${el.alokasiWaktu}</td></tr>`
        } )
        dataActivities += '<td>Edit</td></tbody>'
        $('.allActivities').html(dataActivities)
    } )
    .fail( err => {
        console.log(err);
    } )
    .always( () => {
    } )
}

function edit() {
    var judul = $('#judul').val()
    var deskripsi = $('#deskripsi').val()
    var alokasiWaktu = $('#alokasiWaktu').val()
    $.ajax({
        method: 'PUT',
        url: `${baseurl}/activities`,//with id
        headers: {
            access_token: localStorage.access_token
        },
        data: {
            judul,
            deskripsi,
            alokasiWaktu,
            //id
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

function deleteData() {
    $.ajax({
        method: 'DELETE',
        url: `${baseurl}/activities`,//with id
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
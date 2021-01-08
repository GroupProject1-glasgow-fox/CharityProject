var baseurl = 'http://localhost:3000'

$(document).ready( () => {
    if(localStorage.access_token) {
        showWIdget()
    }
})

function showWidget() {

}

function widgetNews() {
    $('//namaid untuk widget').empty()
    $.ajax({
        method : 'GET',
        url : `${baseUrl}/news`,
        headers : {
            access_token : localStorage.getItem('access_token')
        }

    })
    .done(data => {
        console.log(data)
    })
    .fail(err => {
        console.log(err)
    })
    .always(() => {

    })
}


function widgetMovie() {
    $('//namaid untuk widget').empty()
    $.ajax({
        method : 'GET',
        url : `${baseUrl}/movie`,
        headers : {
            access_token : localStorage.getItem('access_token')
        }

    })
    .done(data => {
        console.log(data)
    })
    .fail(err => {
        console.log(err)
    })
    .always(() => {
        
    })
}


function widgetCovidUpdate() {
    $('//namaid untuk widget').empty()
    $.ajax({
        method : 'GET',
        url : `${baseUrl}/covid`,
        headers : {
            access_token : localStorage.getItem('access_token')
        }

    })
    .done(data => {
        console.log(data)
    })
    .fail(err => {
        console.log(err)
    })
    .always(() => {
        
    })
}

function widgetMusic() {
    $('//namaid untuk widget').empty()
    $.ajax({
        method : 'GET',
        url : `${baseUrl}/music`,
        headers : {
            access_token : localStorage.getItem('access_token')
        }

    })
    .done(data => {
        console.log(data)
    })
    .fail(err => {
        console.log(err)
    })
    .always(() => {
        
    })
}
class Renderer {

    renderData(movieData) {
        $('#list').empty()
        const source = $(`#first-template`).html();
        const template = Handlebars.compile(source);
        let newHTML = template({ movieData });
        console.log(newHTML);
        $('#list').append(newHTML);

    }

    renderDataRatings(moviedataById, ratingsDiv) {
        $(ratingsDiv).empty()
        const source = $(`#second-template`).html();
        const template = Handlebars.compile(source);
        let newHTML = template({ moviedataById });
        $(ratingsDiv).append(newHTML);

    }
}
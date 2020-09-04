const rend = new Renderer()


$(`#btn`).on("click", async function () {
    const $input = $(`#input`).val()
    const data = await $.get(`/movie/${$input}`)
    const resultP = JSON.parse(data).Search
    rend.renderData(resultP)

})

$(`#list`).on("click", ".poster", async function () {
    const $movieId = $(this).closest(`div`).data().id
    const $ratingsDiv = $(this).closest(`div`).find(`.ratings`)
    $($ratingsDiv).toggle()
    const clickPic = await $.get(`/moviePic/${$movieId}`)
    const resultP = JSON.parse(clickPic).Ratings
    rend.renderDataRatings(resultP, $ratingsDiv)
})

$(`#list`).on("click", ".ratings", async function () {
    const $movieId1 = $(this).closest(`.ratings`)
    $($movieId1).toggle()
})










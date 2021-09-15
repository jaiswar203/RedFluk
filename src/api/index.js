import axios from 'axios'

const API=axios.create({baseURL:'https://redfluk.herokuapp.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Adminprofile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('Adminprofile')).token}`;
    }
    return req;
})

export const createAdmin=(admindata)=> API.post(`/admin/signup`,admindata)
export const verifyAdmin=(admindata)=> API.post(`/admin/signin`,admindata)

// create trailer

export const createtrailer=(trailerData)=> API.post(`/movies/trailer`,trailerData)
export const createSlider=(trailerData)=> API.post(`movies/slider`,trailerData)

// get trailers

export const fetchTrailer=()=> API.get('/movies/trailer')
export const fetchLastTrailer=()=> API.get('/movies/trailerlast')

export const fetchSlider=()=> API.get('/movies/slider')
export const fetchLastSlider=()=> API.get('/movies/sliderlast')

// update
export const updateTrailer=(id,update)=>API.patch(`/movies/trailer/${id}`,update)
export const updateSlider=(id,update)=>API.patch(`/movies/slider/${id}`,update)

// delete

export const deleteTrailer=(id)=>API.delete(`/movies/trailer/${id}`)
export const deleteSlider=(id)=>API.delete(`/movies/slider/${id}`)


// Trending

export const createMovies=(newMovie)=>API.post(`/trendCard`,newMovie)
export const getMovies=()=>API.get(`/trendCard`)
export const getMoviesById=(id)=>API.get(`/trendCard/${id}`)
export const updateMovies=(id,newData)=>API.patch(`/trendCard/${id}`,newData)
export const deleteMovies=(id)=>API.delete(`/trendCard/${id}`)

// Movie

export const createMov=(data)=>API.post(`/movieCard`,data)
export const updateMov=(id,data)=>API.patch(`/movieCard/${id}`,data)
export const deleteMov=(id)=>API.delete(`/movieCard/${id}`)
export const getMov=()=>API.get(`/movieCard`)
export const getAllMov=(page)=>API.get(`/movieCard/all?page=${page}`)
export const getMovById=(id)=>API.get(`/movieCard/${id}`)

// animated Movie

export const createAnimeMovie=(data)=>API.post(`/animatedmovie`,data)
export const updateAnimeMovie=(id,data)=>API.patch(`/animatedmovie/${id}`,data)
export const deleteAnimeMovie=(id)=>API.delete(`/animatedmovie/${id}`)
export const getAnimeMovie=()=>API.get(`/animatedmovie`)
export const getAllAnimeMovie=(page)=>API.get(`/animatedmovie/all?page=${page}`)
export const getAnimeMovieById=(id)=>API.get(`/animatedmovie/${id}`)


// animated WebSeries
export const createAnimeSeries=(data)=>API.post(`/animatedseries`,data)
export const updateAnimeSeries=(id,data)=>API.patch(`/animatedseries/${id}`,data)
export const deleteAnimeSeries=(id)=>API.delete(`/animatedseries/${id}`)
export const getAnimeSeries=()=>API.get(`/animatedseries`)
export const getAllAnimeSeries=(page)=>API.get(`/animatedseries/all?page=${page}`)
export const getAnimeSeriesById=(id)=>API.get(`/animatedseries/${id}`)

// webSeries

export const createWebShow=(data)=>API.post(`/webshowCard`,data)
export const updateWebShow=(id,data)=>API.patch(`/webshowCard/${id}`,data)
export const deleteWebShow=(id)=>API.delete(`/webshowCard/${id}`)
export const getWebShow=()=>API.get(`/webshowCard`)
export const getAllWebShow=(page)=>API.get(`/webshowCard/all?page=${page}`)
export const getWebShowById=(id)=>API.get(`/webshowCard/${id}`)



// TvShow

export const createTvShow=(data)=>API.post(`/tvshowCard`,data)
export const updateTvShow=(id,data)=>API.patch(`/tvshowCard/${id}`,data)
export const deleteTvShow=(id)=>API.delete(`/tvshowCard/${id}`)
export const getTvShow=()=>API.get(`/tvshowCard`)
export const getAllTvShow=(page)=>API.get(`/tvshowCard/all?page=${page}`)
export const getTvShowById=(id)=>API.get(`/tvshowCard/${id}`)



// search

export const searchData=(searchQuery)=>API.get(`/searchCard/search?searchQuery=${searchQuery}`)

// **** filter ****//
// movies
const filter='/filter'

export const filterAction=(page)=>API.get(`${filter}/action?page=${page}`)
export const filterAdven=(page)=>API.get(`${filter}/adventure?page=${page}`)
export const filterRomance=(page)=>API.get(`${filter}/romance?page=${page}`)
export const filterCrime=(page)=>API.get(`${filter}/crime?page=${page}`)
export const filterThriller=(page)=>API.get(`${filter}/thriller?page=${page}`)
export const filterScifi=(page)=>API.get(`${filter}/scifi?page=${page}`)

// webSeries
const webfilter='/webshowfilter'

export const filterWebAction=(page)=>API.get(`${webfilter}/action?page=${page}`)
export const filterWebAdven=(page)=>API.get(`${webfilter}/adventure?page=${page}`)
export const filterWebRomance=(page)=>API.get(`${webfilter}/romance?page=${page}`)
export const filterWebCrime=(page)=>API.get(`${webfilter}/crime?page=${page}`)
export const filterWebThriller=(page)=>API.get(`${webfilter}/thriller?page=${page}`)
export const filterWebScifi=(page)=>API.get(`${webfilter}/scifi?page=${page}`)



// tvShows

const tvfilter='/tvshowfilter'

export const filterTvAction=(page)=>API.get(`${tvfilter}/action?page=${page}`)
export const filterTvAdven=(page)=>API.get(`${tvfilter}/adventure?page=${page}`)
export const filterTvRomance=(page)=>API.get(`${tvfilter}/romance?page=${page}`)
export const filterTvCrime=(page)=>API.get(`${tvfilter}/crime?page=${page}`)
export const filterTvThriller=(page)=>API.get(`${tvfilter}/thriller?page=${page}`)
export const filterTvScifi=(page)=>API.get(`${tvfilter}/scifi?page=${page}`)

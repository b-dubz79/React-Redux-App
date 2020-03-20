import axios from 'axios'

export const GET_PHOTOS = "GET_PHOTOS"

export const fetchPhotos = () => dispatch => {
    //dispacth START_FETCHING
    axios.get().then(res => {
        //slice the array so I get first 10
        //dispatch fetch success.  fetch success is the type, payload is the sliced array
        //const sliced = res.data.slice(0, 9)
    }).catch()
}
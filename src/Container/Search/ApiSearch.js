import axios from "axios";

const ApiSearch = {

    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTRhOTMyYzk4YjQxY2RhOTljYzViNjdkMzgwY2M3YSIsInN1YiI6IjY0YWNjNzIxOGEwZTliMDEzYWZkNDAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QxDwkeOMYOBBcALj1zGSLslyzHO71GDCL7ls5qdGUCc'
      }
}
export const fecthChannel = async ( searchName) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchName}`, ApiSearch)
    return data
}


export default ApiSearch;
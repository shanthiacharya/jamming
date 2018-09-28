


const apiKey = 'c5da5457f62c4a16898e38549fcdef2a';

const url = 'https://api.spotify.com/v1/search?q=';
const type = '&type=album,track,artist'


const Spotify = {
    search  (term) {
      const searchQuery = `${url}${term}${type}`
      return fetch (searchQuery, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'

          }
      }).then (response => {
            return response.json()
      }).then (jsonResponse => {
        console.log(jsonResponse);
            if (jsonResponse.artists) {
              console.log(jsonResponse.artists)
              return ('')
            }
      })

    }
}

export default Spotify
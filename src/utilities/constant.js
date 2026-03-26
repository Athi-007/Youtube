const YOUTUBE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&&key=${process.env.REACT_APP_APIKEY}`

export default YOUTUBE_URL
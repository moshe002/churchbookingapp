import React, { useEffect, useState } from 'react'

//<p>{video.snippet.title}</p>

function LiveMassPage () {
    const [video, setVideo] = useState([])

    useEffect(() => {
        getVideos()
    }, [])
    
    const getVideos = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKUsvn9QGIwiX8fjCNmetWA&maxResults=3&q=live%20mass&key=AIzaSyDWV26jvrvKzoLMky6RLHJS8xELSvONIj8`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.items)
            setVideo(data.items)
        })
        
    }

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <h2 className="text-2xl sm:text-5xl font-semibold">Live Mass Recordings</h2>
            <div className='flex p-10'>
                <ul>
                    {
                        video.map((item) => {
                            //console.log('item', item)
                            const { id = {}, snippet = {} } = item
                            const { title, thumbnails = {} } = snippet
                            const { medium = {} } = thumbnails
                            const { videoId } = id
                            return(
                                <li key={Math.random()}>
                                    <a href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel="noreferrer">
                                        <p>
                                            <img width={medium.width} height={medium.height} src={medium.url} alt="pic" />
                                        </p>
                                        <h3>{ title }</h3>
                                    </a>
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default LiveMassPage

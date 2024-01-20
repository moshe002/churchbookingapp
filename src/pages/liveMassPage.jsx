import React, { useEffect, useState } from 'react'

//<p>{video.snippet.title}</p>

function LiveMassPage () {
    const [video, setVideo] = useState([])

    useEffect(() => {
        getVideos()
    }, [])
    
    const getVideos = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKUsvn9QGIwiX8fjCNmetWA&maxResults=2&q=live%20mass&key=AIzaSyDWV26jvrvKzoLMky6RLHJS8xELSvONIj8`)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.items)
            setVideo(data.items)
        })
        
    }

    return (
        <div id='livemass' className="flex flex-col justify-center items-center p-10 border-b-4 border-t-4">
            <h2 className="text-center ml-12 sm:ml-0 text-2xl sm:text-5xl font-semibold">Live Mass Recordings</h2>
            <div className='flex flex-col p-10 mt-10 ml-10 sm:ml-0'>
                <ul>
                    {
                        video.map((item) => {
                            //console.log('item', item)
                            const { id = {}, snippet = {} } = item
                            const { title, thumbnails = {} } = snippet
                            const { medium = {} } = thumbnails
                            const { videoId } = id
                            return(
                                <li key={Math.random()} className='mb-14' >
                                    <a href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel="noreferrer">                         
                                        <img className='block m-auto rounded-lg border-4 hover:border-blue-500 duration-150' width={medium.width} height={medium.height} src={medium.url} alt="pic" />
                                        <h3 className='mt-5 text-center text-lg font-semibold underline'>{ title }</h3>
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

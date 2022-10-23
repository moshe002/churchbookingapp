import React, {  } from 'react'

const GetData = () => {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKUsvn9QGIwiX8fjCNmetWA&maxResults=3&order=date&key=AIzaSyDWV26jvrvKzoLMky6RLHJS8xELSvONIj8")
    .then((result) => {
        return result.json()
    }).then((data) => {
        console.log(data)
        let videos = data.items
        for(let video of videos){
            console.log(video.snippet.title)
        }
    })
}


function liveMassPage () {
    return (
        <div className="flex justify-center items-center p-10">
            <h2 className="text-5xl font-semibold">Live Mass Recordings</h2>
            <div>
                {
                    GetData()
                }
            </div>
        </div>
    )
}

export default liveMassPage

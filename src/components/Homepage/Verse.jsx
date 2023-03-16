import React, { useState, useEffect } from 'react'

// API_KEY: 6ae69516c3551c357945884250c1173e

function Verse() {

  const [verse, setVerse] = useState([]);

  const API_KEY = "6ae69516c3551c357945884250c1173e";

  const BIBLE_ID = `06125adad2d5898a-01`;

  const VERSES = [
    `JER.29.11`,
    `PSA.23`,
    `1COR.4.4-8`,
    `PHP.4.13`,
    `JHN.3.16`,
    `ROM.8.28`,
    `ISA.41.10`,
    `PSA.46.1`,
    `GAL.5.22-23`,
    `HEB.11.1`,
    `2TI.1.7`,
    `1COR.10.13`,
    `PRO.22.6`,
    `ISA.40.31`,
    `JOS.1.9`,
    `HEB.12.2`,
    `MAT.11.28`,
    `ROM.10.9-10`,
    `PHP.2.3-4`,
    `MAT.5.43-44`,
  ];

  const verseIndex = Math.floor(Math.random() * VERSES.length);
  const verseID = VERSES[verseIndex];

  const options = {
    method: 'GET',
    headers: {
      'api-key': API_KEY,
    }
  };

  useEffect(() => {
    fetch(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`, options)
    .then(response => response.json())
    .then(res => {
      console.log(res)
      setVerse(res.data.passages)
    })
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='mt-10'>
      <h1 className='text-center text-3xl font-bold'>Verse of the Day</h1>
      {
        verse.map((v, i) => {
          const verseOfTheDay = v.content;
          return(
            <div key={i}>
              <h2 className='text-lg font-semibold mt-5 text-center'>{v.reference}</h2>
              <div
                className='text-center px-52 italic mt-5' 
                dangerouslySetInnerHTML={{__html: verseOfTheDay}}></div>
            </div>
          )
        })
      }
    </div>
  )
};

export default Verse;
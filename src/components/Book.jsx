import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";

function Book() {

  const pokemonData = [
      // {
      //   id: "0001.jpg",
      //   description: "Pagkikita natin to before pa mag covid, thank you at meron pang pa cake!"
      // },
    {
      id: "0002.jpg",
      description: "Unang balik mo after ng covid, nagkita ulit <3."
    },
    {
      id: "sameshoes.jpg",
      description: "Parehas pa tayo ng shoes!."
    },
    {
      id: "0003.jpg",
      description: "Cloud 9, unang gala natin, walking lang kahit matarik daanan."
    },
    {
      id: "0004.jpg",
      description: "Sa gabi naman viewing ng city lights."
    },
    {
      id: "0005.jpg",
      description: "Namiss mo mag dagat nung time na to."
    },
    {
      id: "0006.jpg",
      description: "Haha memories padin, kahit medyo nahirapan tayo dahil maputik daanan."
    },
    {
      id: "0007.jpg",
      description: "Dinner date natin sa the block. Laging napaparami order natin, kaya sobrang busog"
    },
    {
      id: "0008.jpg",
      description: "Namiss mo bigla ilaoilao nung nakita mo, kaya bumili agat tayo :)"
    },
    {
      id: "0009.jpg",
      description: "Gala natin sa BGC, dinner date. Sakto lang order natin para di masyadong busog haha!"
    },
    {
      id: "00010.jpg",
      description: "Pauwi na from dinner, nakasingit pa talaga tayo ng gala a day before ng flight mo ehehe."
    },
    {
      id: "00011.jpg",
      description: "First time natin mag museum"
    },
    {
      id: "00012.jpg",
      description: "Alam kong hilig mo pumunta sa musem,kaya next time museum hopping tayo!"
    },
    {
      id: "00013.jpg",
      description: "Naisiping mag Mt. Pinatubo bigla"
    },
    {
      id: "00014.jpg",
      description: "Nakarating naman sa taas kahit sobrang hingal ko hahaha!"
    },
    {
      id: "sp3.jpg",
      description: "Photobooth :) Nag roller skates tayo nito."
    },
    {
      id: "sp1.jpg",
      description: "Character natin to sa pokemon unite dati nung naglalaro pa tayo. <3"
    },
    // {
    //   id: "mac.jpg",
    //   description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    // }
  ];

  return (
    <>
    {/* <audio autoPlay loop controls>
      <source src="/audio/music.mp3" type="audio/mpeg" />
    </audio> */}

    <HTMLFlipBook 
      width={470} 
      height={600}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover first-page">
          {/* <img 
            src="/images/front.png" 
            alt="Book Logo" 
            className="pokemon-logo"
          /> */}
        </div>
      </div>

      {pokemonData.map((pokemon) => (
        <div className="page" key={pokemon.id}>
          <div className="page-content">
            <div className="pokemon-container">
              <img 
                src={`${import.meta.env.BASE_URL}/images/${pokemon.id}`} 
                // alt={pokemon.name} 
              />
              <div className="pokemon-info">
                <p className="pokemon-description">{pokemon.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="page" style={{ background: 'transparent' }}>
        <div className="page-content cover last-page">

        </div>
      </div>
    </HTMLFlipBook>
    </>
  );
}

export default Book
import { useState } from 'react'
import Header from './componentes/Header'
import Footer from '../src/componentes/Footer'
import AppRoutes from '../src/routes'
import './App.css'

function App() {

  function primaryRequest() {
    const valores= fetch('https://opentdb.com/api.php?amount=30&category=15').then(batata=>{

    batata.json().then(bacon=>{

        console.log(bacon.data)
        
        var btn=document.querySelector('#botao')

        btn.addEventListener('click',()=>{
                var img = document.querySelector('#img')

                img.src=bacon.data.memes[Math.floor(Math.random()*100)].url
                legenda()

        })

    }) 

    })
      
}
function legenda(){
    fetch('https://opentdb.com/api.php?amount=30&category=15').then(category=>category.json()
    .then(dados=>{

                 var category = document.querySelector("#category")

                 category.innerHTML = `${dados.content}`

    }))

    function tipo(){
      fetch('https://opentdb.com/api.php?amount=30&category=15').then(type=>type.json()
      .then(dados=>{
  
                   var type = document.querySelector("#category")
  
                   type.innerHTML = `${dados.content}`
  
      }))
}}

primaryRequest()



  return (
    <>
   <div> <button id="botao">API</button></div>
   <div><figure>
   <figcaption id="category">
     
     Olá
     </figcaption>  
     <img src="" id="img" alt="" srcset=""></img>
     
     </figure></div>
    </>
  )
}



export default App

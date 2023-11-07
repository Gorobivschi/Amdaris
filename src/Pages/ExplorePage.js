import React from 'react'
function ExplorePage() {
    return (
        <div>
        
            <head>

    <link rel="stylesheet" href="./style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    <link rel="icon" href="./icon.png"></link>
    <script src="../js/script.js"></script>
    
    <title>STEAM on WHEELS</title>
            </head>
<body>
    <header>
        <img class="logo" src="./icon.png"></img>
       <navbar>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/explore">Explore</a>
          <a href="/contacts">Contacts</a>
       </navbar> 
       <i id="hamburger"onclick="mobileMenu()" class="fa-solid fa-bars"></i>
    </header>

  <main>
     <section>
        <h1 class="centered">Explorează locurile vizitate de SPR</h1>
     
        <div class="loc">
            <h2>STEAM pe Roți la Soroca</h2>
            <img src="./Soroca.jpg" alt="Soroca"></img>
            <p>În data de 22 septembrie, laboratorul mobil #STEAMpeRoti 🚌 a ajuns la copii din Soroca, satul  Racovăț
            Ne dorim să subliniem că #STEAMpeRoti este un proiect ce se bucură de susținerea caldă a 
         UNICEF Moldova @unicefmoldova
          ,care încurajează curiozitatea și creativitatea tinerilor în călătoria lor spre cunoaștere.
         Educația pentru viitor este o prioritate și suntem bucuroși să fim parte din această călătorie! 💫</p>

        </div>
        <div class="loc">
            <h2>STEAM pe Roți la Orhei</h2>
            <img src="./Orhei.jpg" alt="Orhei"></img>
            <p>Luna septembrie a început tot cu laboratorului nostru mobil #STEAMpeRoti 🚌, care a ajuns la  copii din Orhei cu o abordare inovatoare.
                Tinerii curioși și dornici de aventuri intelectuale au avut ocazia  de a se alătura unei expediții educaționale incredibile, care a cuprins sesiuni captivante
                Nu puteți uita să menționați că STEAM pe Roți este un proiect ce poartă amprenta UNICEF Moldova @unicefmoldova
                 ,  care susține și încurajează această călătorie de explorare a cunoașterii și creativității. 💫</p>

        </div>
        <div class="loc">
        <h2>STEAM pe Roți la Drochia</h2>
        <img src="./Drochia.jpg" alt=""></img>
        <p>🚀Luna octombrie continuă tot cu laboratorului nostru mobil #STEAMpeRoti 🚌, care a ajuns la copii din Drochia,satul Chetrosu
            cu o abordare inovatoare.Tinerii curioși și dornici de aventuri intelectuale au avut ocazia de a se alătura unei expediții educaționale incredibile, care a cuprins sesiuni captivante
         Nu putem uita să menționăm că STEAM pe Roți este un proiect ce poartă amprenta UNICEF Moldova @unicefmoldova, care susține și încurajează această călătorie de explorare a cunoașterii și creativității. 💫</p>

        </div>
      </section>
  </main>
<footer>
    <span>Tekedu</span>
</footer>
</body>

        </div>

    )
}

export default ExplorePage;
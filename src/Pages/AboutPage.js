import React from 'react'
function AboutPage() {
    return (
        <div>
            
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
          <a href="/contactes">Contacts</a>
       </navbar> 
       <i id="hamburger"onclick="mobileMenu()" class="fa-solid fa-bars"></i>
    </header>

  <main>
     <section>
        <h1 class="centered"> About STEAM on Wheels</h1>
        <p> Pentru a ajuta la dezvoltarea tinerilor din Moldova în domeniul STEAM, TEKEDU – o organizație non-profit care împuternicește tinerii în și prin tehnologie,
            leadership și antreprenoriat social, a lansat STEAM pe roți, o inițiativă de sensibilizare inovativă a GirlsGoIT pentru a crește gradul de conștientizare
            în rândul fetelor și băieților, inclusiv ucrainenii și familiile lor despre educația și oportunitățile STEAM.
            STEAM pe roți este primul laborator educațional pe roți din Moldova, un autobuz echipat cu kituri STEAM precum seturi de robotică, arduino și laptopuri. 
            STEAM pe roți călătorește în toată țara organizând ateliere pop-up pentru tinerii din zonele rurale, inclusiv centrele pentru refugiați. Începând cu 7 iulie 2022, când a avut
             loc lansarea oficială a STEAM pe roți, proiectul a reușit să ajungă la peste 4 500 de tineri din Republica Moldova.</p>
 

             <h2>Curiozități</h2>


             <ul>
                <li>Educarea a peste 7.000 de tineri în STEAM în 2022
                    Fetele și băieții, inclusiv ucrainenii, au beneficiat de ateliere STEAM în HTML/CSS, Robotică, Arduino, Modelare 3D, Introducere în Python și Știința Datelor</li>
                    <li>Organizarea a peste 800 de ateliere pop-up STEAM
                        Laboratorul pe roți 🚌 a călători în peste 500 regiuni din Moldova și centre pentru refugiați organizând ateliere pop-up STEAM</li>
                      <li>Diseminarea campaniei STEAM la nivel național
                        Peste 20.000 de tineri care trăiesc în comunitățile rurale și centrele pentru refugiați au aflat despre oportunități STEAM</li>
                   </ul>
                   <iframe class="vframe" src="https://www.youtube.com/embed/mq0znfu-HlU?si=UYvpMQ_7YyTclTtq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
                 <p>În cadrul proiectului sunt disponibile ateliere de introducere în domenii precum:
                    # HTML/CSS – studierea domeniului Frontend Static prin crearea unei pagini web în editorul de cod Visual Studio Code, utilizând limbajul de marcare HTML și limbajul de stilizare CSS;
                    # modelare 3D – modelarea obiectelor în 3D în aplicația Fusion 360;
                    # intro to Python –  scopul acestui atelier e de a oferi participanților o introducere în programare prin studierea unui limbaj la nivel înalt, cum ar fi Python ,utilizând platforma GoogleColab;
                    # Data Science –  înțelegerea conceptului de Data Science și stabilirea unor pași simpli pentru învățarea independentă. Crearea unui proiect personal și unic aplicând algoritmi creați prealabil, utilizând platforma GoogleColab;
                    # arduino – crearea unui circuit de aprindere a unui LED la intervalul dorit de timp. Sesiunea include asamblarea circuitului, scrierea codului și testarea acestuia;
                    # robotică – descoperirea componentelor robotului Mbot2 prin realizarea diferitor misiuni ce țin de mișcarea robotului, detectarea obiectelor și a culorilor combinate între ele.</p>
                </section>
  </main>
<footer>
    <span>Tekedu</span>
</footer>
</body>
            </div>
        </div>
    )
}

export default AboutPage;
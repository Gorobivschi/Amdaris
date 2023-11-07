import React from 'react'
function ContactsPage() {
    return (
        <div>
            
            <div>
            <head>
    <link rel="stylesheet" href="./style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    <link rel="icon" href="./icon.png"></link>
    <script src="../js/script.js"></script>
    
    <title>STEAM on WHEELS Contacts</title>
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

        <h1 class="centered">STEAM on Wheels - Contacts</h1>

        <div class="row">
       
            <div class="col-50"> 
                    <div class="contacte">
                    <h2 class="centered">Date de contact</h2>
                    <b>Tekedu :</b>
                    <a href="mailto:irina@tekedu.md">irina@tekedu.md</a>
                    <br/><br/>
                    <b>STEAM pe Roti :</b>
                    <a href="mailto:paula@tekedu.md">paula@tekedu.md</a>
 <br/><br/>



                    </div>
            </div>
            <div class="col-50">
             <form class="cform">
             <h2 class="centered">Contactează STEAM pe Roți</h2>
               <input type="text" placeholder=" Nume Prenume"></input>
               <input type="text" placeholder="Solicitează SPR"></input>
               <textarea  rows="5" placeholder="Localitatea pentru care solicitați"></textarea>
               <input type="submit" value="Trimite"></input>
             </form>
            </div>

            <iframe  class="harta" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d404.33385339093206!2d28.821601608291992!3d47.02015152655262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2s!4v1699015457982!5m2!1sro!2s" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



        </div>
       
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

export default ContactsPage;
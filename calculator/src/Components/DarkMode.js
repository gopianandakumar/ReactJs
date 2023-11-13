
const DarkMode = () => {

  const toggleTheme =()=>{
    alert('HI')
  }



  return (
    <>
    <header>
        <a 
        href ="https://youtube.com" alt="logo">
        Ananda Naidu </a>

        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </nav>
    </header>

    <main>
       <section className="">


        <div className="container grid grid-two-column">
            <div className="hero-section-data">
                <h1>React Dark Mode</h1>
                <p>helloworld</p>
                <a href="#" className="btn" onClick={() => toggleTheme()}>
                    Toggle Mode
                </a>
            </div>
            <div className="hero-section-image">
                <img 
                src="https://img.freepik.com/free-photo/close-up-portrait-stylish-brunette-woman-glasses-laughing-smiling-posing-eyewear-agains_1258-88375.jpg"
                alt="lady with specs" />
            </div>
        </div>

       </section>
    </main>
    </>

    
  )
}

export default DarkMode
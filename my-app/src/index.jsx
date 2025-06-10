import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Header() {
    return (
        <header>
            
                <h2>Reasons I'm Excited to Learn React</h2>
                <nav>
                    <ul className='nav-list'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            
        </header>
    )
}
function Maincontent()
{
    return( <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
            )

}
function Footer()
{
    return( <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
            )

}
function Page() {
    return (
        <>
            <Header />
            <Maincontent />
            <Footer />
           
           
           
        </>
    )
}

  



const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    
        <Page />
    
); 


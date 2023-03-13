import '../index.css';
import Logo from './Logo';
import CarWidget from './CarWidget'

export default function Navbar(props) {
    return (
        <div>
            <header className='header'>
                <Logo/> 
                <h2 className='titulo'>Tienda Materiales de Construccion</h2>
                <nav>
                    <ul className='nav-links'>
                        <li> <a href='/'>Home</a></li>
                        <li> <a href='/'>Construccion</a></li>
                        <li> <a href='/'>Jardineria</a></li>
                        <li> <a href='/'>Linea Blanca</a></li>
                        <li> <a href='/'> <CarWidget items='->28 items'/> </a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
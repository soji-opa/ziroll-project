import React from 'react';
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'

export default function Footer(){
    return(
        <footer>
            <ul className='footer--list'>
                <li>
                    <img src={twitter}
                    alt='twitter img'/> 
                </li>
                <li>
                    <img src={facebook}
                    alt='facebook img'/>
                </li>
                <li>
                    <img src={instagram}
                    alt='ig img'/>
                </li>
                <li>
                    <img src={github}
                    alt='github img'/>
                </li>
            </ul> 
        </footer>
    )
}
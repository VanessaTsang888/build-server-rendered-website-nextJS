import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div class='content'>
      <header>
        <img
          src='logostellar.jpg'
          alt='Logo image of a house enclosing the letter S.'
          class='logo'></img>
        <h1>Stellar Sitting Services </h1>
      </header>
      <p>
        <img
          src='vintageredphone.png'
          alt='Image of a vintage red telephone.'
          class='round right'></img>
      </p>

      <nav>
        <ul>
          <li>
            <Link href='/home'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/house'>
              <a>House Sitting</a>
            </Link>
          </li>
          <li>
            <Link hrf='/pet'>
              <a>Pet Sitting</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>

      <h2 class='paleblue' id='contact'>
        Contact Stellar Sitting Services
      </h2>
      <p>
        {" "}
        You can contact us via email, or call or text via phone. On weekdays
        between 7 a.m. and 10 p.m. you can expect a response within one hour. On
        weekends response time may be up to 4 hours.
      </p>
      <p>
        Be sure to leave your name and a brief description of your request. We
        look forward to hearing from you!
      </p>

      <p class='contact'>
        Email: wecanhelp@stellarss.com <br></br>
        Phone or Text: 444-555-3333
      </p>

      <footer>&copy; Copyright 2007 Stellar Sitting Services, LLC</footer>
    </div>
  );
}

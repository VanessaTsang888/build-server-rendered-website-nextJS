/*
1. Setup NextJS app
2. create an index.js page with CSS and set up rnderng in index.js
3. Import navigation components into the NextJS app:
-> Add a Link to the Home Page
4. Create a Next Page for the Contact page

*/

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.content}>
      <header>
        <img
          src='logostellar.jpg'
          alt='Logo image of a house enclosing the letter S.'
          className={(styles.center, styles.logo)}></img>
        <h1>Stellar Sitting Services </h1>
      </header>

      <p>Looking for a pet and/or house sitter? We have you covered!</p>
      <p>
        <img
          src='doghouse.jpg'
          alt='Photo of a dog next to a large doghouse.'
          className={(styles.round, styles.right)}></img>{" "}
      </p>
      <p>
        Our company has been open and providing excellent services for over a
        dozen years. Our sitters are thoughtful, respectful, and well trained in
        home and pet care.
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

      <h2>About Stellar Sitting Services</h2>
      <p>
        At Stellar, we take pride in our exceptional customer service. We began
        our business with one employee - Janie Stellar, owner and founder.
        Janie's reputation for trustworthy and caring service grew over the
        years, as did the company. Stellar now employs over 300 sitters.
      </p>
      <p>
        Every one of our sitters has completed extensive security checks, along
        with intensive training on pet care, home care, and security/emergency
        procedures. You can trust a Stellar sitter!
      </p>

      <footer>&copy; Copyright 2007 Stellar Sitting Services, LLC</footer>
    </div>
  );
}

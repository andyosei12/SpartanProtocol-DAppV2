import React from 'react'
import { Container, Navbar, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ReactComponent as SpartaIcon } from '../../assets/icons/coin_sparta.svg'
import { ReactComponent as GitbookIcon } from '../../assets/icons/icon-gitbook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/icon-twitter.svg'
import { ReactComponent as GithubIcon } from '../../assets/icons/icon-github.svg'
import { ReactComponent as TelegramIcon } from '../../assets/icons/icon-telegram.svg'
import { ReactComponent as MediumIcon } from '../../assets/icons/icon-medium.svg'
import { ReactComponent as RedditIcon } from '../../assets/icons/icon-reddit.svg'

import './Footer.scss'

const Footer = () => {
  const isLightMode = window.localStorage.getItem('theme')

  return (
    <Navbar className="footer" sticky="bottom">
      <Container className="d-none d-sm-flex">
        <div className="text-footer mx-auto">A Spartan Community Project</div>
      </Container>
      <Container className="d-none d-sm-flex">
        <Link to="/" className="text-footer mx-auto">
          <SpartaIcon
            fill={isLightMode ? 'white' : 'black'}
            className="me-2"
            height="32"
          />
          <span>Spartan Protocol</span>
        </Link>
      </Container>
      <Container>
        <Link to="/" className="d-block d-sm-none">
          <SpartaIcon
            fill={isLightMode ? 'white' : 'black'}
            className="d-block d-sm-none"
            height="32"
          />
        </Link>

        <a
          href="https://docs.spartanprotocol.org/"
          target="_blank"
          rel="noreferrer"
          id="footer-gitbook"
        >
          <GitbookIcon
            fill={isLightMode ? 'black' : 'white'}
            height="24"
            width="24"
          />
          <Tooltip target="footer-gitbook" placement="top">
            Gitbook
          </Tooltip>
        </a>
        <a
          href="https://twitter.com/SpartanProtocol"
          target="_blank"
          rel="noreferrer"
          id="footer-twitter"
        >
          <TwitterIcon
            height="24"
            width="24"
            fill={isLightMode ? 'black' : 'white'}
          />
          <Tooltip target="footer-twitter" placement="top">
            Twitter
          </Tooltip>
        </a>
        <a
          href="https://github.com/spartan-protocol"
          target="_blank"
          rel="noreferrer"
          id="footer-github"
        >
          <GithubIcon
            height="24"
            width="24"
            fill={isLightMode ? 'black' : 'white'}
          />
          <Tooltip target="footer-github" placement="top">
            Github
          </Tooltip>
        </a>
        <a
          href="https://t.me/SpartanProtocolOrg"
          target="_blank"
          rel="noreferrer"
          id="footer-telegram"
        >
          <TelegramIcon
            height="24"
            width="24"
            fill={isLightMode ? 'black' : 'white'}
          />
          <Tooltip target="footer-telegram" placement="top">
            Telegram
          </Tooltip>
        </a>
        <a
          href="https://spartanprotocol.medium.com"
          target="_blank"
          rel="noreferrer"
          id="footer-medium"
        >
          <MediumIcon
            height="24"
            width="24"
            fill={isLightMode ? 'black' : 'white'}
          />
          <Tooltip target="footer-medium" placement="top">
            Medium
          </Tooltip>
        </a>
        <a
          href="https://www.reddit.com/r/SpartanProtocol"
          target="_blank"
          rel="noreferrer"
          id="footer-reddit"
        >
          <RedditIcon
            height="24"
            width="24"
            fill={isLightMode ? 'black' : 'white'}
          />
          <Tooltip target="footer-reddit" placement="top">
            Reddit
          </Tooltip>
        </a>
      </Container>
    </Navbar>
  )
}

export default Footer

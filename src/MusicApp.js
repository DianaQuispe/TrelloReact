import React, { Component } from 'react';
import {playAction, nextAction, stopAction} from './actions'
import {connect} from 'redux-zero/react'
import Form from './signIn.js'

import './MusicApp.css';

const Footer = ({}) => {
  return(
    <footer id="main_footer">
    <small>
      <a href="https://trello.com/" target="_blank">Trello</a> tribute for educational purposes
      crafted with ♥ for <a href="https://diacode.com/">Diacode</a>
      by <a href="https://twitter.com/bigardone">@bigardone</a></small>
  </footer>
  )
}

const MusicApp = ({songs, selectedSong}) => {
    return (
      <div>
       <div className='logo'></div>
       <Footer/>
      </div>
    );
  }


const mapToProps = ({songs, selectedSong}) => ({songs, selectedSong})

export default connect(mapToProps) (MusicApp);

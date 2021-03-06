import React, { Component } from 'react'
import { TweenMax, Elastic, Expo } from 'gsap'

import withTransition from 'helpers/withTransition'

class Home extends Component {
  transitionIn($section) {
    return new Promise(resolve => {
      TweenMax.staggerFromTo(
        $section.children,
        1,
        {
          autoAlpha: 0,
          scale: 0.8
        },
        {
          autoAlpha: 1,
          scale: 1,
          ease: Elastic.easeOut,
          onComplete: resolve
        },
        0.05
      )
    })
  }
  transitionOut($section) {
    return new Promise(resolve => {
      TweenMax.to($section, 0.3, {
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: resolve
      })
    })
  }
  render() {
    return (
      <section className="page">
        <h1>Home</h1>
        <p>Hello World !</p>
      </section>
    )
  }
}

export default withTransition(Home)

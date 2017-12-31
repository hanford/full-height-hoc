import React, { PureComponent } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'
import document from 'global/document'

const defaults = ['html', 'body', '#__next', '#root', '[data-reactroot]']

export default function FullHeightComponent(WrappedComponent, elements = []) {
  class FullHeightWrapper extends PureComponent {
    elements = [ ...defaults, ...elements ]

    componentDidMount () {
      if (document.querySelector) {
        this.elements.forEach((tag) => {
          const el = document.querySelector(tag)
          if (el) el.style.height = '100%'
        })

        // we can remove this once we're on Next.js@4.3.0
        if (document.body.firstChild.style) {
          document.body.firstChild.style.height = '100%'
        }
      }
    }

    componentWillUnmoun () {
      if (document.querySelector) {
        this.elements.forEach((tag) => {
          const el = document.querySelector(tag)
          if (el) el.style.height = 'initial'
        })

        // we can remove this once we're on Next.js@4.3.0
        if (document.body.firstChild.style) {
          document.body.firstChild.style.height = ''
        }
      }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatic(FullHeightWrapper, WrappedComponent)
}

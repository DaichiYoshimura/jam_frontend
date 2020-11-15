import React from 'react';
import NextApp, { AppContext } from 'next/app';
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import MyTheme from '../plugins/theme'
interface Props {
  pageProps: any;
}
class App extends NextApp<Props> {

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={MyTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default App;


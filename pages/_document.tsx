import * as React from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'
// ______________________________________________________
//
export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles as any}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}
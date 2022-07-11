import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'
import logoUrl from './logo.svg'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const app = createApp(pageContext)
  const appHtml = await renderToString(app)

  // See https://vite-plugin-ssr.com/head
  const { documentProps,pageProps } = pageContext
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = escapeInject`
      <!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">

    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="pragma" content="no-cache" />
      <meta http-equiv="Cache-Control" content="no-cache, must-revalidate" />
      <meta http-equiv="expires" content="0" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${desc}" />
      <title>${title}</title>
    </head>

    <body style="
            margin-top: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
            margin-right: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
            padding-right: 0px;
            font-size: 18px;
            font-family: Roboto;
          ">
      <td>
        <!--*|IF:MC_PREVIEW_TEXT|*-->
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText"
          style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
        <!--<![endif]-->
        <!--*|END:IF|*-->
        <table width="${import.meta.env.VITE_PAGE_WIDTH}" cellpadding="0" cellspacing="0" style="
            border-collapse: collapse;
            border-spacing: 0;
            table-layout: auto;
            margin:0 auto;
            min-width: ${import.meta.env.VITE_PAGE_WIDTH};
          ">
          <tr>
            <td style="
                table-layout: auto;
                text-align: center;
                background-color: #fff;
                font-weight: normal;
                padding-top: 20px;
                padding-bottom: 80px;
                font-size: 18px;
                font-family: Roboto;
              ">
              <table align="center" bgcolor="#fff" cellspacing="0" cellpadding="0" style="
                  float: none;
                  table-layout: auto;
                  background-color: #fff;
                  text-align: left;
                  margin-top: 0px;
                  margin-bottom: 0px;
                  margin-left: auto;
                  margin-right: auto;
                  max-width: 650px;
                  width: 100%;
                ">
                <tr>
                  ${dangerouslySkipEscape(appHtml)}
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <center>
          <br />
          <br />
          <table border="0" cellpadding="0" cellspacing="0" width="100%" id="canspamBarWrapper" style="
                                                background-color: #ffffff;
                                                border-top: 1px solid #e5e5e5;
                                              ">
            <tr>
              <td align="center" valign="top" style="
                                                    padding-top: 20px;
                                                    padding-bottom: 20px;
                                                  ">
                <table border="0" cellpadding="0" cellspacing="0" id="canspamBar">
                  <tr>
                    <td align="center" valign="top" style="
                                                          color: #606060;
                                                          font-family: Helvetica, Arial,
                                                            sans-serif;
                                                          font-size: 11px;
                                                          line-height: 150%;
                                                          padding-right: 20px;
                                                          padding-bottom: 5px;
                                                          padding-left: 20px;
                                                          text-align: center;
                                                        ">
                      This email was sent to
                      <a href="mailto:*|EMAIL|*" target="_blank" style="
                                                            color: #404040 !important;
                                                          ">*|EMAIL|*</a>
                      <br />
                      <a href="*|ABOUT_LIST|*" target="_blank" style="
                                                            color: #404040 !important;
                                                          "><em>why did I get this?</em></a>&nbsp;&nbsp;&nbsp;&nbsp;<a
                        href="*|UNSUB|*" style="
                                                            color: #404040 !important;
                                                          ">unsubscribe from this list</a>&nbsp;&nbsp;&nbsp;&nbsp;<a
                        href="*|UPDATE_PROFILE|*" style="
                                                            color: #404040 !important;
                                                          ">update subscription preferences</a>
                      <br />
                      *|LIST:ADDRESSLINE|*
                      <br />
                      <br />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <style type="text/css">
            @media only screen and (max-width: 480px) {
              table#canspamBar td {
                font-size: 14px !important;
              }

              table#canspamBar td a {
                display: block !important;
                margin-top: 10px !important;
              }
            }
          </style>
        </center>
      </td>
    </body>

    </html>
  `

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}

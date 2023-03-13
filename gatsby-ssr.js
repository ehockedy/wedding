import * as React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/RollanceBeauty.otf"
      as="font"
    //   type="font/oft"
      crossOrigin="anonymous"
      key="rollanceBeauty"
    />
  ])
}

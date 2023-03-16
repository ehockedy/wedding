import * as React from 'react'
import CustomLayout from "./wrapPageElement"

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

export const wrapPageElement = CustomLayout
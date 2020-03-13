import React, { ReactElement, FunctionComponent } from 'react'

type CoreLayoutProps = {
  children: ReactElement
}

export const CoreLayout: FunctionComponent<CoreLayoutProps> = ({ children }) => (
  <div>{children}</div>
)

export default CoreLayout
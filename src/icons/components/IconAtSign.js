import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconAtSign({ size, ...props }) {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 8.412a3.592 3.592 0 0 0-3.588 3.587A3.592 3.592 0 0 0 12 15.587 3.592 3.592 0 0 0 15.588 12 3.592 3.592 0 0 0 12 8.412zm0 5.883a2.298 2.298 0 0 1-2.295-2.296A2.298 2.298 0 0 1 12 9.704 2.298 2.298 0 0 1 14.295 12 2.298 2.298 0 0 1 12 14.295z"
      />
      <path
        fill="currentColor"
        d="M17.657 6.343A7.947 7.947 0 0 0 12 4a7.947 7.947 0 0 0-5.657 2.343A7.947 7.947 0 0 0 4 12.002c0 2.136.832 4.145 2.343 5.656A7.948 7.948 0 0 0 12 20a8.044 8.044 0 0 0 4.864-1.648.646.646 0 1 0-.786-1.027A6.744 6.744 0 0 1 12 18.707a6.664 6.664 0 0 1-4.743-1.964A6.664 6.664 0 0 1 5.293 12 6.715 6.715 0 0 1 12 5.293 6.715 6.715 0 0 1 18.707 12v.735c0 .86-.7 1.56-1.56 1.56-.86 0-1.56-.7-1.56-1.56V12a.646.646 0 1 0-1.292 0v.735a2.856 2.856 0 0 0 2.853 2.852A2.856 2.856 0 0 0 20 12.735v-.736a7.948 7.948 0 0 0-2.343-5.656z"
      />
    </svg>
  )
}

IconAtSign.propTypes = IconPropTypes
export default IconAtSign

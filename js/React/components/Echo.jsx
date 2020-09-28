import React from 'react'
import scss from './Echo.scss'

const Echo = ({ children }) => (
    <div className={scss.container}>{children}</div>
)

export default Echo

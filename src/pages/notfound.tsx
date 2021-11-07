import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div>
            <div className="not-found">
            <img
            src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
            alt="not-found"
            width="100%"
            />
            <Link to="/" className="link-home">
                Go Home
            </Link>
        </div>
        </div>
    )
}

export default Notfound

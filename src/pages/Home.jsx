import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <React.Fragment>
        <div className={'house'}>
            <div className={'px-[50px] mt-[80px] grid grid-cols-2'}>
                <div className={'kontol'}>
                    <p>Hi, I'm</p>
                    <p>Wahyudi Khoeris Salimi</p>
                </div>
                <div className={'tes'}>
                    a
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Home
import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                {/* <p>Ikeji II</p> */}
                <img src={assets.ikeji_banner} alt="" />
            </div>
            <div className='main-content'>
                <p>Generate your own Conference Display Picture</p>
                <form>
                    <img src={assets.ikeji_dp} alt="" />
                    <p>Create your entry below</p>
                    <label>
                       Your  Name:
                        <input type="text" name="ikeji-name" />
                    </label>

                    <label>
                       Upload Image here:
                        <input type="file" name="ikeji-image" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>  
            </div>
        </div>
    )
}

export default Main

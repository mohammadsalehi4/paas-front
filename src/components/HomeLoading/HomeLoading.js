import React,{useEffect,useState} from 'react'

const HomeLoading = () => {
    const [colorNumber,SetcolorNumber]=useState(0)

    useEffect(()=>{
        const adder=(lll)=>{
            setTimeout(() => {
                SetcolorNumber(lll)
                console.log(lll)
                adder(lll+1)
            }, 200);
        }
        adder(0)
    },[])

    return (
        <div>
            <p id='innerLoading'>
                Pas<br/>
                <div>
                    <div className='LoadingPoint'  style={colorNumber%4===0 ? {background:`#096ea8`} : {background:`#003757`}}></div>
                    <div className='LoadingPoint'  style={colorNumber%4===1 ? {background:`#096ea8`} : {background:`#003757`}}></div>
                    <div className='LoadingPoint'  style={colorNumber%4===2 ? {background:`#096ea8`} : {background:`#003757`}}></div>
                    <div className='LoadingPoint'  style={colorNumber%4===3 ? {background:`#096ea8`} : {background:`#003757`}}></div>
                </div>
            </p>

        </div>
    )
}

export default HomeLoading
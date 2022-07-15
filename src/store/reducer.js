const onetime=new Date()

const initialState={
    NowTime:Math.floor(onetime.getTime()/1000),
}

const reducer=(state=initialState,action)=>{
    if(action.type==="CHANGENOW"){
        return {
            ...state,
            NowTime:action.value
        }
    }
    return state
}

export default reducer
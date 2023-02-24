export const depositeMoney = (amout) =>{
    return (dispatch) => {

        dispatch({
            type:'deposit',
            payload: amout
        })

    }

}

export const withrawMoney = (amout) => {
    return (dispatch) => {

        dispatch({
            type:'withdraw',
            payload: amout
        })

    }

}
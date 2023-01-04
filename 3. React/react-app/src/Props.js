import React from "react"
/*
const Props = (prop) => {
    const { obs } = prop
    return (
        <div>
            This is prop destructuring
            the content of obs = {obs}
        </div>
    )
}
*/

const Props = ({ obs }) => {
    return (

        <div>
            The conent of obs ={obs}
        </div>
    )
}

export default Props
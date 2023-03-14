import React from "react";
import ban from '../bananab.png'
import straw from '../straw.png'

export const PictureFruit = ({fruit}) => {
    if (fruit.fruitys.fruit === "banana") {
        return (
            <>
                <img src={ban} alt="ban" className="banana"/>
                <p>{fruit.fruitys.color}</p>
            </>
        )
    }
    if (fruit.fruitys.fruit === "strawberry") {
        return <img src={straw} alt="straw" className="strawberry"/>
    }
}
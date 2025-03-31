import React from "react";


function SecondsCounter({digitFive, digitFour, digitThree, digitTwo, digitOne}){
    return(
        <div className="bigCounter d-flex justify-content-center bg-dark text-white">
            <div className="calendar p-3 bg-dark text-white ">
                <i className="far fa-clock"></i>
            </div>
            <div className="five p-3  ">{digitFive % 10}</div>
            <div className="four p-3 ">{digitFour % 10}</div>
            <div className="three p-3 ">{digitThree % 10}</div>
            <div className="two p-3 ">{digitTwo % 10}</div>
            <div className="one p-3 ">{digitOne % 10}</div>
        </div>
    )
}

export default SecondsCounter
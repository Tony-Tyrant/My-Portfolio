import React from "react";


export default function Header() {
    return (
        <>
            <h1 className="text-center text-success-emphasis font-weight-bold text-uppercase">
                tony{' '}
                <span className="text-success">ho</span>
            </h1>
            <div className="text-center">
            <h5 className="d-md-inline">
                +852 9242-4965&nbsp;&nbsp;
            </h5>
            <h5 className="d-md-inline">
                <a className=" fst-italic" href="mailto:tony.ho.cheuktung@gmail.com">
                    tony.ho.cheuktung@gmail.com
                </a>
            </h5>
            </div>
            <hr></hr>
        </>
    )
}
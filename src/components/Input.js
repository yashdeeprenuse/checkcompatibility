import React, { useEffect, useState } from 'react'

const Input = (props) => {

    const [l1, setl1] = useState("NA");
    let callme1 = (e) => {
        setl1(e.target.value)
    }

    const [l2, setl2] = useState("NA");
    let callme2 = (e) => {
        setl2(e.target.value)
    }

    const [signal, setSignal] = useState("None")

    let runOnClick = () => {


        if ((l2 === "Public Domain" && (l1 === "MIT/x11" || l1 === "BSD" || l1 === "Apache")) || (l1 === "Public Domain" && (l2 === "MIT/x11" || l2 === "BSD" || l2 === "Apache")) || (l1 === "MIT/x11" && l2 === "Public Domain") || (l1 === "BSD" && l2 === "MIT/x11") || (l1 === "MIT/x11" && l2 === "BSD") || (l1 === "BSD" && l2 === "Apache") || (l1 === "Apache" && l2 === "BSD") || (l1 === "BSD" && l2 === "MPL") || (l1 === "MPL" && l2 === "BSD")) {
            setSignal("Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }
        else if ((l1 === "LGPL-v2.1" && l2 === "BSD") || (l1 === "BSD" && l2 === "LGPL-v2.1") || (l1 === "BSD" && l2 === "LGPL-v2.1+") || (l1 === "LGPL-v2.1+" && l2 === "BSD") || (l1 === "BSD" && l2 === "LGPL-v3 or LGPL-v3+") || (l1 === "LGPL-v3 or LGPL-v3+" && l2 === "BSD") || (l1 === "LGPL-v2.1" && l2 === "LGPL-v2.1+") || (l1 === "LGPL-v2.1+" && l2 === "LGPL-v2.1") || (l1 === "LGPL-v3 or LGPL-v3+" && l2 === "LGPL-v2.1+") || (l1 === "LGPL-v2.1+" && l2 === "LGPL-v3 or LGPL-v3+")) {
            setSignal("Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }

        else if ((l1 === "LGPL-v2.1" && l2 === "GPL") || (l1 === "GPL" && l2 === "LGPL-v2.1") || (l1 === "LGPL-v2.1+" && l2 === "GPLX") || (l2 === "LGPL-v2.1+" && l1 === "GPLX") || (l2 === "LGPL-v2.1" && l1 === "GPLX") || (l1 === "LGPL-v2.1" && l2 === "GPLX") || (l1 === "LGPL-v3 or LGPL-v3+" && l2 === "GPL-v3") || (l2 === "LGPL-v3 or LGPL-v3+" && l1 === "GPL-v3") || (l1 === "AGPL" && l2 === "GPL-v3") || (l2 === "AGPL" && l1 === "GPL-v3") || (l1 === "GPLX" && l2 === "GPL-v3") || (l2 === "GPLX" && l1 === "GPL-v3") || (l1 === "GPLX" && l2 === "GPL") || (l2 === "GPLX" && l1 === "GPL")) {
            setSignal("Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }

        else if ((l1 === "BSD" && l2 === "AGPL") || (l2 === "BSD" && l1 === "AGPL") || (l1 === "BSD" && l2 === "GPL-v3") || (l2 === "BSD" && l1 === "GPL-v3") || (l1 === "BSD" && l2 === "GPL") || (l2 === "BSD" && l1 === "GPL") || (l1 === "BSD" && l2 === "GPLX") || (l2 === "BSD" && l1 === "GPLX")) {
            setSignal("Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }
        //exceptional cases direct arrows
        else if ((l1 === "Apache" && l2 === "AGPL") || (l2 === "Apache" && l1 === "AGPL") || (l1 === "Apache" && l2 === "GPL-v3") || (l2 === "Apache" && l1 === "GPL-v3")) {
            setSignal("Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }
        //exceptonal cases where resultant box is presnt not direct
        else if ((l1 === "Apache" && l2 === "GPLX") || (l2 === "Apache" && l1 === "GPLX") || (l1 === "Apache" && l2 === "LGPL-v2.1+") || (l2 === "Apache" && l1 === "LGPL-v2.1+")) {
            setSignal("Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }

        else if ((l1 === "Apache" && l2 === "GPL") || (l2 === "Apache" && l1 === "GPL")) {
            setSignal("Not Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA"); setl2("NA");
            }, 2500);
        }

        else {
            setSignal("Not Compatible")
            setTimeout(() => {
                setSignal("None")
                setl1("NA");
                setl2("NA");
            }, 2500);
        }


    }

    console.log(l1, l2, signal)
    return (
        <>



            <div className=" text-center container" >
                {/* <div><i>Please Select required License to check their Compatibilty</i></div> */}
                <div className="card-body">
                    <select className="form-select container" style={{ width: "50vw", marginTop: "80px" }} onChange={callme1} value={l1} aria-label="Default select example">
                        <option value="NA">Select First License</option>
                        <option value="Public Domain">Public Domain</option>
                        <option value="MIT/x11">MIT/x11</option>
                        <option value="BSD">BSD</option>
                        <option value="Apache">Apache</option>
                        <option value="LGPL-v2.1">LGPL-v2.1</option>
                        <option value="LGPL-v2.1+">LGPL-v2.1+</option>
                        <option value="LGPL-v3 or LGPL-v3+">LGPL-v3 or LGPL-v3+</option>
                        <option value="MPL">MPL</option>
                        <option value="GPL">GPL-v2</option>
                        <option value="GPLX">GPL-v2+</option>
                        <option value="GPL-v3">GPL-v3</option>
                        <option value="AGPL">AGPL</option>
                    </select>

                    <select className="form-select container" style={{ width: "50vw", marginTop: "15px" }} onChange={callme2} value={l2} aria-label="Default select example">
                        <option value="NA">Select Second License</option>
                        <option value="Public Domain">Public Domain</option>
                        <option value="MIT/x11">MIT/x11</option>
                        <option value="BSD">BSD</option>
                        <option value="Apache">Apache</option>
                        <option value="LGPL-v2.1">LGPL-v2.1</option>
                        <option value="LGPL-v2.1+">LGPL-v2.1+</option>
                        <option value="LGPL-v3 or LGPL-v3+">LGPL-v3 or LGPL-v3+</option>
                        <option value="MPL">MPL</option>
                        <option value="GPL">GPL-v2</option>
                        <option value="GPLX">GPL-v2+</option>
                        <option value="GPL-v3">GPL-v3</option>
                        <option value="AGPL">AGPL</option>
                    </select>
                    <button disabled={(l1 === l2) || (l1 === "NA") || (l2 === "NA")} onClick={runOnClick} id='btn2' className='btn btn-primary mt-5' style={{ backgroundColor: "mediumseagreen" }} >Check Compatibility</button>
                </div>

                {
                    (signal !== "None") && <>
                        <img src={(signal === "Compatible") ? "https://img.freepik.com/premium-vector/green-shield-icon-with-checkmark-confirmation-protection-security-shield-protected-icon-vector_662353-818.jpg?w=740" : "https://static.vecteezy.com/system/resources/previews/026/958/541/original/danger-warning-error-alert-sign-in-badge-style-security-shield-exclamation-mark-for-website-logo-app-ui-guard-attention-warning-icon-illustration-filled-outline-style-eps10-vector.jpg"} style={{ width: "30vw", height: "30vh", objectFit: 'contain' }}></img>
                        <div>{`${l1} and ${l2} are ${signal}`}</div>
                    </>
                }
            </div>


        </>
    )
}

export default Input

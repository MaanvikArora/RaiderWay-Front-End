function Choice({onNav}){
    return(
        <div className="">
            <br></br>
            <h2 className="text-5xl font-bold font-mono text-slate-950 text-center">How do you want to create your RoadMap?</h2>
            <br />
            <div className="flex flex-row justify-center">
                <button className="btn btn-lg btn-neutral mx-10 mt-10" onClick={() => onNav("interest")}>Use Interests</button>
                <button className="btn btn-lg btn-neutral mx-10 mt-10" onClick={() => onNav("program")}>Use Program</button>

            </div>
            <ul className="steps steps-vertical lg:steps-horizontal mb-50 ml-140 mt-20">
                <li className="step step-primary text-slate-950 text-mono">Filter</li>
                <li className="step text-slate-950 text-mono">Select Criteria</li>
            </ul>
        
        </div>   
    )
}

export default Choice;
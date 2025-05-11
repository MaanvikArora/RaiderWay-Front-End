function Choice({onNav}){
    return(
        <div className="">
            <br></br>
            <h2 className="text-4xl font-bold font-mono text-slate-950 text-center">How do you want to create your RoadMap?</h2>
            <br />
            <div className="flex flex-row justify-center">
                <button className="btn btn-neutral mx-10 mb-80" onClick={() => onNav("interest")}>Use Interests</button>
                <button className="btn btn-neutral mx-10 mb-88" onClick={() => onNav("program")}>Use Program</button>
            </div>
            <br></br>
            
        
        </div>   
    )
}

export default Choice;
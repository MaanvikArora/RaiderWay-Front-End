function Choice({onNav}){
    return(
        <div className="bg-white">
            <h2 className="text-3xl font-bold font-mono text-slate-950 text-center">How do you want to create your RoadMap?</h2>
            <button className="btn btn-neutral flex size 14 ml-150" onClick={() => onNav("interest")}>Use Interests</button>
            <button className="btn btn-neutral flex size 14 ml-150" onClick={() => onNav("program")}>Use Program</button>
        </div>   
    )
}

export default Choice;
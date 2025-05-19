function Programs(){

    return(
        
        <div className="h-full mt-0">
            <img className="z-0 m-0 absolute opacity-15 w-full h-135" src="src\assets\UniLogos2.JPG"></img>
            <ul className="steps steps-vertical">
                <li className="step step-primary font-bold text-red-50">Home Page</li>
                <li className="step font-bold text-red-50">Search for Program</li>
            </ul>
            <h2 className=" ml-10 text-3xl font-bold text-red-50 font-sans">Explore hundreds of programs and <br /> post-secondary opportunities</h2>
            <br></br>
            <h2 className="ml-10 text-lg font-bold text-red-50 font-sans">Enter Institution Name</h2>
            <label className="ml-10 input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Institution Name..." />
            </label>

            <br />

            <h2 className="ml-10 text-lg font-bold text-red-50 font-sans">Select Program</h2>
            <select defaultValue="Select Program" className=" ml-10 select mb-45">
                <option>Engineering</option>
                <option>Physics</option>
                <option>Accounting</option>
            </select>

            <div className="card card-border bg-base-100 w-76 h-86 absolute top-40 right-21">
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center">Not sure where to start? Try these.</h2>
                    <br />
                    <div className="justify-center card-actions">
                        <button className="btn btn-primary w-56 h-12 text-lg text-center">🛠️  Engineering </button>
                        <button className="btn btn-primary w-56 h-12 text-lg text-center">📈  Business </button>
                        <button className="btn btn-primary w-56 h-12 text-lg text-center">🧬  Biology </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;
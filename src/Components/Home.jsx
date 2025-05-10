function Home({onNav}){
    return(
        <div>
            <h1 className="text-5xl font-bold font-mono text-slate-950 text-center">Your Journey Starts Here....</h1>
            <p className="py-6 font-mono text-slate-950 text-justify">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button onClick={onNav} className="btn btn-neutral flex size 14 ml-150">Generate RoadMap</button>
        </div>
    );
}

export default Home;
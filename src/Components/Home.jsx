function Home({onNav}){
    return(
        <div>
            <br />
            <br />
            <h1 className="text-5xl font-bold font-mono text-slate-950 text-center">  Your Journey Starts Here....</h1>
            <div className="w-250 h-30 text-wrap">
                <p className="py-6 font-mono text-slate-950 text-center ml-76">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <button onClick={onNav} className="btn btn-neutral flex justify-self-center size 14 mb-68" >Generate RoadMap</button>
        </div>
    );
}

export default Home;
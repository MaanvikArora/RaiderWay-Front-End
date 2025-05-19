function Home({onNav}){
    return(
        <div className="h-full">
            <br />
            <br />
            <h1 className="text-5xl font-bold font-mono text-slate-950 text-center">  Your Journey Starts Here....</h1>
            <div className="w-250 h-30 text-wrap">
                <p className="py-6 font-mono text-slate-950 text-center ml-76">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <button onClick={onNav} className="btn btn-neutral flex justify-self-center size 14 mb-58" >Generate RoadMap</button>
            <div className="w-full bg-amber-500">
                <p className="font-mono text-center"> NOTE: We do not represent KCI or the WRDSB. This is a tool built by the KCI CS Club. <br /> Please double check information before submitting courses.</p>
            </div>
        </div>
    );
}

export default Home;
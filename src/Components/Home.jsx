function Home({onNav}){
    return(
        <div className="flex flex-col items-center space-y-6 grow">

            <h1 className="mt-5 text-5xl font-bold font-mono text-slate-950 text-center">  Your Journey Starts Here....</h1>
            <p className="text-center py-6 font-mono text-slate-950 px-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


            <div className="flex grow my-2 justify-center">
                <button onClick={onNav} className="btn btn-neutral">
                    Generate RoadMap
                </button>
            </div>

            <div className="bg-amber-500 w-full">
                <p className="font-mono text-center px-4"> NOTE: We do not represent KCI or the WRDSB. This is a tool built by the KCI CS Club. <br /> Please double check information before submitting courses.</p>
            </div>
        </div>
    );
}

export default Home;
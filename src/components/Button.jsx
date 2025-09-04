export default function Button({children , ...props}) {
     ;
    return(
        <>
            <button
             className=" cursor-pointer px-4 py-2 bg-indigo-950 text-white rounded hover:bg-indigo-900" {...props} >
                {children}
                </button>
        </>
    )
}

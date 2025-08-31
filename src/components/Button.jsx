export default function Button({children , ...props}) {
     ;
    return(
        <>
            <button className="bg-indigo-950 text-white px-5 py-1 rounded " {...props} >{children}</button>
        </>
    )
}

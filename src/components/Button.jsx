export default function Button({children , ...props}) {
    const buttonCss = "bg-indigo-950 text-white px-5 py-1 rounded" ;
    return(
        <>
            <button className={buttonCss} {...props} >{children}</button>
        </>
    )
}

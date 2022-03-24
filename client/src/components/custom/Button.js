
export default function Button(props) {
    return (
        <div className="flex justify-center">
            <button
                className={`w-2/3 p-3 rounded text-white bg-blue-900
            ${props.loading && 'opacity-60'} hover:opacity-60
            
            `}
            >
                {props.loading ? props.loadingTitle : props.title}
            </button>
        </div>
    )
}

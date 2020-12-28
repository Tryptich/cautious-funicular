const Button = props => (
    <button
        type={props.type}
        className="bg-red-400 hover:bg-red-400 text-white text-sm 
         duration-300 p-2 rounded border border-red-800"
    >
        {props.children}
    </button>
);
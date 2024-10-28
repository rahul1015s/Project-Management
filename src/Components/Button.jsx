export default function Button({ children, ...props }) {

    return  <button className="px-4 py-2 md:text-base text-xs rounded-md bg-stone-700 hover:bg-stone-600 text-stone-400 hover:text-stone-100" {...props}>
    {children}
    </button>
}
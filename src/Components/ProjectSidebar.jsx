export default function ProjectSidebar() {
    return<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="font-bold upperclass mb-8 md: text-xl text-stone-200">Your Projects</h2>
        <div>
           <button className="px-4 py-2 md:text-base text-xs rounded-md bg-stone-700 hover:bg-stone-600 text-stone-400 hover:text-stone-100">
           + Add Project
           </button>
        </div> 
        <ul></ul>
    </aside>
}
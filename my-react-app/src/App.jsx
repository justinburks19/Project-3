import {motion} from 'framer-motion'

export function App() {

  return (
    <>
    <div className="min-h-screen grid place-items-center bg-red-500">
      <h1 className="text-5xl font-extrabold text-white drop-shadow">
        Tailwind is ON ✅
      </h1>
      <button className="mt-6 px-4 py-2 rounded bg-white text-slate-900 hover:bg-slate-100">
        Test Button
      </button>
    </div>
    </>
  )
}

export default App

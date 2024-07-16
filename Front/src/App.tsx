import {MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2 } from 'lucide-react'
import { useState } from 'react'

function App() {

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)

  function openGuestInput() {
    setIsGuestInputOpen(true)
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className='flex flex-col items-center gap-3'>
          <img className='size-24' src="../public/planner.png" alt="planner" />

          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
      
      <div className='space-y-4'>
        <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center gap-3">
          <div className='flex items-center gap-2 flex-1'>
            <MapPin className='size-5 text-zinc-400'/>
            <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400'/>
            <input disabled={isGuestInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-28 outline-none"/>
          </div>

          <div className='w-px h-6 bg-zinc-800'/>

          {isGuestInputOpen ? (
            <button onClick={closeGuestInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-600">
              Alterar local/data
              <Settings2 className='size-5'/>
            </button>
          ) : (
            <button onClick={openGuestInput} className="bg-emerald-200 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-emerald-500">
              Continuar
            < ArrowRight className='size-5'/>
          </button>
          )}
        </div>

        {isGuestInputOpen && (
          <div className="bg-zinc-900 h-16 px-4 rounded-xl flex items-center gap-3">
          <div className='flex items-center gap-2 flex-1'>
            <UserRoundPlus className='size-5 text-zinc-400'/>
            <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-52"/>
          </div>

          <div className='w-px h-6 bg-zinc-800'/>

          <button className="bg-emerald-200 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-emerald-500">
            Confirmar viagem
            < ArrowRight className='size-5'/>
          </button>
        </div>
        )}
      </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pelo plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="">Termos de Uso</a> e <a className="text-zinc-300 underline" href="">Políticas de Privacidade</a>.
        </p>
      </div>
    </div>
  )
}

export default App

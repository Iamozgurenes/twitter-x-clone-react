import { Popover, Disclosure } from "@headlessui/react"
import classNames from "classnames"
import { Link } from "react-router-dom"

export default function More() {
    return (
        <Popover className="relative">
            <Popover.Button  className="py-1 block group outline-none">

        <div className="px-4  py-3 rounded-full inline-flex  items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]">
                <div className="w-[26.25px] h-[26.25px] relative">
        
                <svg viewBox="0 0 24 24"  >
                    <path fill="#e7e9ea" d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/>          
                </svg>
        
                </div>
                <div className="text-xl pr-4">
                    Daha Fazla
                </div>
            </div>
        

            </Popover.Button>

            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">
                
            <button  className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">

<div className="p-3 rounded-full inline-flex  items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]">
        <div className="w-[26.25px] h-[26.25px] relative">

        <svg viewBox="0 0 24 24"  >
        <path fill="#e7e9ea" d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"></path>
 </svg>

        </div>
        <div className="text-xl pr-4">
            Bağlan
        </div>
    </div>

    </button>

    <button  className="p-3 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">

<div className="p-3 rounded-full inline-flex  items-center gap-5 transition-colors group-hover:bg-[#eff3f41a]">
        <div className="w-[26.25px] h-[26.25px] relative">

        <svg viewBox="0 0 24 24"  >
        <path fill="#e7e9ea" d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"/>
 </svg>

        </div>
        <div className="text-xl pr-4">
            Para Kazanma
        </div>
    </div>

    </button>
    
    <div className="h-px bg-[#2f3336] my-0.5 w-[89%] mx-auto"/>
    
    <Disclosure>
      {({open}) => (
        <>
        <Disclosure.Button className="h-[52px] flex items-center px-4 font-bold justify-between w-full hover:bg-[#eff3f41a]">
        İçerik Üreticisi Stüdyosu 

        <svg  className={classNames("transition-all h-[1.172rem]" , {"rotate-180 text-[#1d9bf0]": open})} viewBox="0 0 24 24">
            <path fill="currentColor" d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
        </svg>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        <Link to="/" className="flex items-center px-3 gap-3 h-11 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" class="h-[1.172rem]"><path fill="currentColor" d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></svg>

        İstatistikler
        </Link>
      </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <Disclosure>
     
     {( {open} ) => (
      <>
       <Disclosure.Button className="h-[52px] flex items-center px-4 font-bold justify-between w-full hover:bg-[#eff3f41a]">
        Profesyonel Araçlar

        <svg className={classNames("transition-all h-[1.172rem]" , {"rotate-180 text-[#1d9bf0]" : open})} viewBox="0 0 24 24">
            <path fill="currentColor" d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
        </svg>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 gap-3 h-11 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
      <svg viewBox="0 0 24 24" class="h-[1.172rem]"><path fill="currentColor" d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"></path></svg>
        Reklamlar
        </Link>
      </Disclosure.Panel>
      </>
     )}

    </Disclosure>

    <Disclosure>
        {( {open} ) => (
            <>
                    <Disclosure.Button className="h-[52px] flex items-center px-4 font-bold justify-between w-full hover:bg-[#eff3f41a]">
        Ayarlar Ve Destek

        <svg className={classNames("h-[1.172rem] transition-all" , {"rotate-180 text-[#1d9bf0]": open})} viewBox="0 0 24 24">
            <path fill="currentColor" d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
        </svg>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
      <Link to="/" className="flex items-center px-3 gap-3 h-11 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
      <svg viewBox="0 0 24 24" class="h-[1.172rem]"><path fill="currentColor" d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></svg>        Ayarlar ve gizlilik
        </Link>
        <Link to="/" className="flex items-center px-3 gap-3 h-11 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" class="h-[1.172rem]"><path fill="currentColor" d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></svg>
        Yardım Merkezi
        </Link>
        <Link to="/" className="flex items-center px-3 gap-3 h-11 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" class="h-[1.172rem]"><path fill="currentColor" d="M20 12h2v6.5c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-13C2 4.12 3.12 3 4.5 3H11v2H4.5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h15c.27 0 .5-.22.5-.5V12zm2.31-6.78l-6.33 7.18c-.2 2.02-1.91 3.6-3.98 3.6H8v-4c0-2.07 1.58-3.78 3.6-3.98l7.18-6.33c.99-.88 2.49-.83 3.43.1.93.94.98 2.44.1 3.43zm-1.52-2.01c-.19-.19-.49-.2-.69-.02l-6.08 5.36c.59.35 1.08.84 1.43 1.43l5.36-6.08c.18-.2.17-.5-.02-.69z"></path></svg>
        Görünüm
        </Link>
        <Link to="/" className="flex items-center px-3 gap-3 h-11 text-[15px] font-medium hover:bg-[#eff3f41a] transition-colors text-white">
        <svg viewBox="0 0 24 24" class="h-[1.172rem]"><path fill="currentColor" d="M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z"></path></svg>
        Klavye kısayolları
        </Link>
      </Disclosure.Panel>
            </>
        )}
    </Disclosure>

    
                
            </Popover.Panel>
        </Popover>
    )
}
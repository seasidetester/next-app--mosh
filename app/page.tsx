import Image from 'next/image'
import Link from 'next/link'
import Products from './products/page'

export default function Home() {
  return (
    <main className='p-10'>
      <h1 
        className='text-4xl font-bold text-center'>Hello World
      </h1>
      <button 
        className='bg-green-500 px-4 py-2 rounded-md'>
        <Link href="/users">Click Me to go to users</Link>
      </button>
      <Products />    
    </main>
  )
}

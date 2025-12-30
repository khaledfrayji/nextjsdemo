import Link from 'next/link'


const  page = () => {
  return (
 <div>
    <h1 className='text-3xl text-center text-[#f2f2f2] font-anton'>Devs Page</h1>
    <ul className='text-center mt-10 space-y-4 text-xl' >
        <Link href="/dashboard/devs/1"><li>Dev 1</li></Link>
        <Link href="/dashboard/devs/2"><li>Dev 2</li></Link>
        <Link href="/dashboard/devs/3"><li>Dev 3</li></Link>
    </ul>
 </div>
  )
}

export default page
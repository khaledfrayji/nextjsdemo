import Link from 'next/link'


const page = () => {
  return (
 <div>
    <h1 className='text-3xl text-center text-[#f2f2f2] font-anton'>Users Page</h1>
    <ul className='text-center mt-10 space-y-4 text-xl' >
        <Link href="/dashboard/users/1"><li>User 1</li></Link>
        <Link href="/dashboard/users/2"><li>User 2</li></Link>
        <Link href="/dashboard/users/3"><li>User 3</li></Link>

    </ul>
 </div>
  )
}

export default page
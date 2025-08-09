import React from 'react'

const Contact = () => {
  return (
    
    <div name='contact' className='w-full min-h-screen sm:h-screen bg-[#474787] flex justify-center items-center p-4 pt-20 pb-20'>
        <form method='POST' action="https://getform.io/f/jbwljmya" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            
            <p className='text-[#AAABB8] text-4xl font-bold inline border-b-4 border-[#3a98a5]'>Contact</p>
            <p className='text-[#AAABB8] py-4 text-3xl'>Submit the form or shoot me an email for a resume</p>
          <p className='text-[#7DF9FF] text-4xl font-bold'>KrisMannino@gmail.com</p>
          </div>
          <input type="text" placeholder='Name' name='name' className='bg-[#ECECEC] p-2'/>
          <input type="text" placeholder='Email' name='email' className='my-4 bg-[#ECECEC] p-2'/>
          <textarea name="message" id="" rows="10" placeholder='Message........' className='bg-[#ECECEC] p-2'></textarea>
          <button className='rounded-full text-[#ECECEC] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#3a98a5] hover:border-[#3a98a5]'>Get in Touch!</button>
        </form>
    </div>
  )
}

export default Contact
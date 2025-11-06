import React from 'react'

const Contact = () => {
  return (
    
  <div name='contact' className='w-full min-h-screen sm:h-screen flex justify-center items-center p-4 pt-20 pb-20' style={{ backgroundColor: 'var(--page-bg)' }}>
        <form method='POST' action="https://getform.io/f/jbwljmya" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            
            <p className='text-[#161C2E] text-4xl font-bold inline border-b-4' style={{ borderBottomColor: 'var(--blue)' }}>Contact</p>
               <p className='py-4 text-3xl' style={{ color: 'var(--text-muted)' }}>Submit the form or shoot me an email for a resume</p>
               <p className='text-2xl font-bold' style={{ color: 'var(--text-primary)' }}>KrisMannino@gmail.com</p>
          </div>
              <input type="text" placeholder='Name' name='name' className='p-2' style={{ backgroundColor: '#ECECEC', color: 'var(--text-muted)' }}/>
              <input type="text" placeholder='Email' name='email' className='my-4 p-2' style={{ backgroundColor: '#ECECEC', color: 'var(--text-muted)' }}/>
              <textarea name="message" id="" rows="10" placeholder='Message........' className='p-2' style={{ backgroundColor: '#ECECEC', color: 'var(--text-muted)' }}></textarea>
              <button className='rounded-full text-primary border-2 px-4 py-3 my-8 mx-auto flex items-center' style={{ borderColor: 'var(--blue)' }} onMouseEnter={(e)=> e.currentTarget.style.backgroundColor='var(--blue)'} onMouseLeave={(e)=> e.currentTarget.style.backgroundColor='transparent'}>Get in Touch!</button>
        </form>
    </div>
  )
}

export default Contact
import { logo } from '../assets'

const Hero = () => {
  return (
<header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
  <img src={logo}/>
<button 
type='button'
onClick={() => window.open('https://github.com/ArnabChakraborty123')}
className='black_btn'
>
    Github
</button>
<button className='black_btn'>
    Sign in
</button>
    </nav>
    <h1 class="text-5xl font-extrabold bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text text-center py-10">
        <span>Summarize Articles with <br/>OpenAI Gpt-4</span>
    </h1>
    <h2 class="text-2xl italic text-center">
        Unlocking Insights, One Summarized Thought at a Time!
    </h2>
    </header>
  )
}

export default Hero
import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
    <>
        <div className='p-4' >
          <div className='flex justify-end gap-4'>
            <Button variant="primary" text="Add Content" startIcon={<PlusIcon size='lg'/>}></Button>
            <Button variant ="secondary" text="Share Brain" startIcon={<ShareIcon size='lg'/>}></Button>
          </div>
          
          <div className='flex gap-4' >
          <Card type="twitter" link="https://x.com/bryan_johnson/status/2001063756445733346?s=20" title="Immortal jonson"/>
          <Card type="youtube" link="https://www.youtube.com/watch?v=5X1uwNJkZFw" title="Youtube video"/>
          </div>
        </div>

    </>
  )
}                                                                                       

export default App
  
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useContents } from '../hooks/useContents'
import { BACKEND_URL } from '../config'
import axios from 'axios';



export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refetch } = useContents();
  const token = localStorage.getItem("token");


  return (
    <>  
        <div>

        <Sidebar />

          <div className='p-4 ml-72 min-h-screen bg-brand-bg border-2 border-brand-surface'>
          <CreateContentModal open={modalOpen} onClose={() => {
            setModalOpen(false);
          }} onContentAdded={refetch} />

          <div className='flex justify-end gap-4'>
            <Button onClick={() => {
              setModalOpen(true)
            }} variant="primary" text="Add Content" startIcon={<PlusIcon size='lg'/>}></Button>
            <Button onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share : true
              }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
              })
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`
              alert(shareUrl);

            }} variant ="secondary" text="Share Brain" startIcon={<ShareIcon size='lg'/>}></Button>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 flex-wrap' >
            {contents.map((content) => <Card key={content._id} type={content.type} link={content.link} title={content.title}/>)}
          </div>
          </div>
        </div>

    </>
  )
}                                                                                       


  
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { UserAvatar } from '../components/ui/UserAvatar'
import { Spinner } from '../components/ui/Spinner'
import { EmptyState } from '../components/ui/EmptyState'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar, type FilterType } from '../components/ui/Sidebar'
import { useContents } from '../hooks/useContents'
import { useUser } from '../hooks/useUser'
import { useTags } from '../hooks/useTags'
import { BACKEND_URL } from '../config'
import axios from 'axios';



export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>("all");
  const { contents, loading, error, refetch } = useContents();
  const { user, loading: userLoading, logout } = useUser();
  const { tags: availableTags, createTag } = useTags();
  const token = localStorage.getItem("token");

  const handleDeleteContent = async (contentId: string) => {
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: { contentId }
    });
    refetch();
  };

  // Filter contents based on selected filter
  const filteredContents = filter === "all"
    ? contents
    : contents.filter(content => content.type === filter);


  return (
    <>
        <div>

        <Sidebar filter={filter} onFilterChange={setFilter} tags={availableTags} />

          <div className='p-4 ml-72 min-h-screen bg-brand-bg border-2 border-brand-surface'>
          <CreateContentModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onContentAdded={refetch}
            availableTags={availableTags}
            onCreateTag={createTag}
          />

          <div className='flex justify-end items-center gap-4'>
            <Button onClick={() => {
              setModalOpen(true)
            }} variant="primary" text="Add Content" startIcon={<PlusIcon size='lg'/>}></Button>
            <Button onClick={async () => {
              try {
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
                }, {
                  headers: {
                    "Authorization": `Bearer ${token}`
                  }
                });
                const shareUrl = `${window.location.origin}/share/${response.data.hash}`;
                await navigator.clipboard.writeText(shareUrl);
                alert("Share link copied to clipboard!");
              } catch (error) {
                alert("Failed to generate share link. Please try again.");
              }
            }} variant="secondary" text="Share Brain" startIcon={<ShareIcon size='lg'/>}></Button>

            {!userLoading && user && (
              <UserAvatar user={user} onLogout={logout} />
            )}
          </div>
          
          {/* Content Area */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Spinner size="lg" />
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-red-400 mb-4">{error}</p>
              <Button onClick={refetch} variant="secondary" text="Try Again" />
            </div>
          ) : contents.length === 0 ? (
            <EmptyState onAction={() => setModalOpen(true)} />
          ) : filteredContents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-brand-text-muted mb-2">No {filter} content found</p>
              <button
                onClick={() => setFilter("all")}
                className="text-brand-primary hover:underline"
              >
                View all content
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
              {filteredContents.map((content) => (
                <Card
                  key={content._id}
                  contentId={content._id}
                  type={content.type}
                  link={content.link}
                  title={content.title}
                  tags={content.tags}
                  onDelete={handleDeleteContent}
                />
              ))}
            </div>
          )}
          </div>
        </div>

    </>
  )
}                                                                                       


  
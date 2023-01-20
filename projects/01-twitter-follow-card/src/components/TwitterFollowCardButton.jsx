import { useState } from 'react'

export function TwitterFollowCardButton() {
  const [isFollowing, setIsFollowing] = useState(false)

  if (isFollowing)
    return (
      <>
        <button
          className='w-32 rounded-3xl border border-[#67070f] bg-[#331f24] px-4 py-2 text-[#f4212c]'
          onClick={() => setIsFollowing(!isFollowing)}
        >
          <span className=''>Siguiendo</span>
          <span className='hidden'>Dejar de seguir</span>
        </button>
      </>
    )

  return (
    <button
      className='rounded-3xl border bg-[#eff3f4] px-4 py-2 text-black hover:opacity-80'
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? 'Siguiendo' : 'Seguir'}
    </button>
  )
}

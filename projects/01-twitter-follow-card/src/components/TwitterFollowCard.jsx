import { TwitterFollowCardButton } from './TwitterFollowCardButton'

export function TwitterFollowCard({ children, userName }) {
  return (
    <article className='flex items-center justify-between gap-4 text-xs'>
      <header className='flex items-center gap-2'>
        <img
          className='h-16 w-16 rounded-full'
          src={`https://unavatar.io/${userName}`}
          alt={`Avatar de ${children}`}
        />
        <div className='flex flex-col'>
          <strong>{children}</strong>
          <span className='opacity-60'>@{userName}</span>
        </div>
      </header>

      <aside>
        <TwitterFollowCardButton />
      </aside>
    </article>
  )
}

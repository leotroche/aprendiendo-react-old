import { TwitterFollowCard, TwitterFollowCardContainer } from './components'

export function App() {
  return (
    <div className='grid min-h-screen place-items-center bg-black'>
      <TwitterFollowCardContainer>
        <h2 className='py-3 text-2xl font-bold'>Tal vez te guste</h2>
        <TwitterFollowCard userName='elonmusk'>Elon Musk</TwitterFollowCard>
        <TwitterFollowCard userName='billgates'>Bill Gates</TwitterFollowCard>
      </TwitterFollowCardContainer>
    </div>
  )
}

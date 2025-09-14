import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PoemDetail from '@/components/PoemDetail'
import { getPoemById, getCollectionByType } from '@/lib/collections'
import { notFound } from 'next/navigation'

interface PoemPageProps {
  params: {
    type: string
    id: string
  }
}

export default async function PoemPage({ params }: PoemPageProps) {
  const { type, id } = params
  const poem = await getPoemById(type, id)
  const collection = await getCollectionByType(type)

  if (!poem || !collection) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="">
        <PoemDetail poem={poem} collection={collection} />
      </div>
      <Footer />
    </main>
  )
}

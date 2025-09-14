import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionList from '@/components/CollectionList'
import { getCollectionByType } from '@/lib/collections'
import { notFound } from 'next/navigation'

interface CollectionPageProps {
  params: {
    type: string
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const collectionType = params.type
  const collection = await getCollectionByType(collectionType)

  if (!collection) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-1">
        <CollectionList collection={collection} />
      </div>
      <Footer />
    </main>
  )
}

// Comprehensive dummy data for all poetry collections
import { Collection, Poem, About, GalleryItem, Contact } from './api';

export const dummyCollections: Collection[] = [
  {
    id: '1',
    type: 'nohey',
    title: 'Elegies (Nohey)',
    description: 'Traditional elegiac poetry expressing grief and mourning, particularly for the martyrdom of Imam Hussain (AS) and his companions.',
    image: '/images/collections/nohey.jpg',
    poemCount: 15,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    type: 'quasidey',
    title: 'Odes (Quasidey)',
    description: 'Classical Arabic and Persian odes celebrating the Prophet Muhammad (PBUH) and his family, written in traditional poetic forms.',
    image: '/images/collections/quasidey.jpg',
    poemCount: 12,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    type: 'manqabat',
    title: 'Praises (Manqabat)',
    description: 'Poems praising the virtues and qualities of the Ahl al-Bayt (AS), particularly Imam Ali (AS) and his descendants.',
    image: '/images/collections/manqabat.jpg',
    poemCount: 18,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    type: 'soz-o-salam',
    title: 'Grief and Salutations (Soz-o-Salam)',
    description: 'Poems expressing deep emotional connection with the tragedy of Karbala, combining grief (soz) with salutations (salam).',
    image: '/images/collections/soz-o-salam.jpg',
    poemCount: 20,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const dummyPoems: Poem[] = [
  // Nohey Collection
  {
    id: '1',
    title: 'The Evening of Karbala',
    content: `The evening of Karbala casts shadows on the heart,
In the rain of tears, grief spreads its art.
In the memory of Hussain, the heart finds no rest,
A scene of mourning, where sorrow is expressed.

On the day of Ashura, hearts ache with pain,
The sacrifice of Hussain is remembered again.
In the fields of Karbala, martyrdom was found,
For the sake of truth, life was laid down.

The sands of Karbala bear witness to the tale,
Of courage and faith that would never fail.
In the face of tyranny, truth stood firm,
A beacon of light in the darkest storm.`,
    slug: 'evening-of-karbala',
    collectionType: 'nohey',
    collectionId: '1',
    excerpt: 'The evening of Karbala casts shadows on the heart',
    isFeatured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'The Voice of Zainab',
    content: `In the voice of Zainab, there burns a flame,
Even after Karbala, grief remains the same.
In memory of her brother, tears flow free,
The pain in the heart will never cease to be.

After Hussain's departure, life became hard,
But the light of faith never lost its guard.
The secret of Zainab's strength lies in this,
That she remained steadfast in truth's bliss.

Through trials and tribulations, she stood tall,
Carrying the message of truth to all.
Her courage became a legend for all time,
A symbol of strength in the face of crime.`,
    slug: 'voice-of-zainab',
    collectionType: 'nohey',
    collectionId: '1',
    excerpt: 'In the voice of Zainab, there burns a flame',
    isFeatured: false,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    title: 'Remembering Ali Asghar',
    content: `The memory of Ali Asghar brings pain to the heart,
A six-month-old baby, torn apart.
In Hussain's arms, the child did lie,
But became the target of an arrow from the sky.

In the fields of Karbala, this scene was seen,
The child thirsted for water, but none was given.
Hussain prayed that the child might survive,
But the enemy's arrow took his life.

Oh, the cruelty that knew no bounds,
Against innocence, hatred resounds.
But in this tragedy, a lesson lies,
That truth and justice never dies.`,
    slug: 'remembering-ali-asghar',
    collectionType: 'nohey',
    collectionId: '1',
    excerpt: 'The memory of Ali Asghar brings pain to the heart',
    isFeatured: false,
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z'
  },

  // Quasidey Collection
  {
    id: '4',
    title: 'Love for the Prophet',
    content: `The love for the Prophet dwells in my heart,
Without him, life remains incomplete and apart.
When I hear the name of Muhammad, my heart soars,
In his memory, tears flow from my eyes in scores.

To follow his Sunnah is my only way,
On the path he showed, I must stay.
As part of his Ummah, I must remain,
Spreading his religion, easing others' pain.

His teachings guide me through life's maze,
In his footsteps, I walk through the days.
The Prophet's love is my guiding light,
Illuminating my path through the darkest night.`,
    slug: 'love-for-the-prophet',
    collectionType: 'quasidey',
    collectionId: '2',
    excerpt: 'The love for the Prophet dwells in my heart',
    isFeatured: true,
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    title: 'The Excellence of Medina',
    content: `What can I say about Medina's excellence?
The Prophet's city, a house of radiance.
To visit Medina is a great blessing,
To see the Prophet's grave, my heart is racing.

In Medina's air, there lies healing,
In Medina's soil, blessings are revealing.
Those who visit Medina receive mercy,
Medina's memory brings peace to the weary.

The Prophet's city, a sanctuary of peace,
Where worldly troubles find their release.
In Medina's embrace, souls find rest,
A sacred place, truly blessed.`,
    slug: 'excellence-of-medina',
    collectionType: 'quasidey',
    collectionId: '2',
    excerpt: 'What can I say about Medina\'s excellence?',
    isFeatured: false,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z'
  },

  // Manqabat Collection
  {
    id: '6',
    title: 'The Glory of Ali',
    content: `The glory of Ali is beyond compare,
His generosity is the highest of all.
The title of Haider Karrar he bears,
His bravery is known to one and all.

Ali is the gateway to knowledge,
From him we must seek wisdom's treasure.
Ali's love must dwell in our hearts,
Following his path brings endless pleasure.

In the battlefield, he was fearless and bold,
With his sword, he defended what's right.
His wisdom and courage stories are told,
A beacon of guidance in darkest night.`,
    slug: 'glory-of-ali',
    collectionType: 'manqabat',
    collectionId: '3',
    excerpt: 'The glory of Ali is beyond compare',
    isFeatured: true,
    createdAt: '2024-01-06T00:00:00Z',
    updatedAt: '2024-01-06T00:00:00Z'
  },
  {
    id: '7',
    title: 'The Greatness of Fatima',
    content: `What can I say about Fatima's greatness?
Her status is exalted and high.
The Prophet's daughter, Ali's wife,
Her rank reaches the sky.

Fatima's love must dwell in our hearts,
Following her path is the way.
In Fatima's memory, tears flow,
Her sorrow makes our hearts sway.

She was the mother of Hasan and Hussain,
The purest of all creation.
Her patience and wisdom are legendary,
A symbol of divine inspiration.`,
    slug: 'greatness-of-fatima',
    collectionType: 'manqabat',
    collectionId: '3',
    excerpt: 'What can I say about Fatima\'s greatness?',
    isFeatured: false,
    createdAt: '2024-01-07T00:00:00Z',
    updatedAt: '2024-01-07T00:00:00Z'
  },

  // Soz-o-Salam Collection
  {
    id: '8',
    title: 'Salutations to Hussain',
    content: `Salutations to Hussain, peace be upon him,
Salutations to the martyrs of Karbala.
Salutations to Zainab, salutations to Sakina,
Salutations to the sorrowful of Karbala.

Hussain's sacrifice comes to mind,
The scene of Karbala appears before our eyes.
They faced the enemy's oppression,
But remained steadfast on the path of truth.

In the fields of Karbala, they stood firm,
Against tyranny, they would not bend.
Their courage became a legend,
A message of truth they would send.`,
    slug: 'salutations-to-hussain',
    collectionType: 'soz-o-salam',
    collectionId: '4',
    excerpt: 'Salutations to Hussain, peace be upon him',
    isFeatured: true,
    createdAt: '2024-01-08T00:00:00Z',
    updatedAt: '2024-01-08T00:00:00Z'
  },
  {
    id: '9',
    title: 'The Grief of Karbala',
    content: `The grief of Karbala dwells in my heart,
In Hussain's memory, tears flow.
When the day of Ashura arrives,
The pain in my heart begins to grow.

What happened in Karbala,
Is written in history's pages.
Hussain's sacrifice,
Was made in truth's name.

The tragedy of that day,
Still echoes through time.
A lesson for all humanity,
That truth and justice will always shine.`,
    slug: 'grief-of-karbala',
    collectionType: 'soz-o-salam',
    collectionId: '4',
    excerpt: 'The grief of Karbala dwells in my heart',
    isFeatured: false,
    createdAt: '2024-01-09T00:00:00Z',
    updatedAt: '2024-01-09T00:00:00Z'
  },
  {
    id: '10',
    title: 'The Mourning of Zainab',
    content: `Zainab's mourning touches the heart,
In memory of her brother, tears flow.
After Karbala, life became difficult,
But the light of faith never dimmed.

The secret of Zainab's strength lies in this,
That she remained steadfast on the path of truth.
Even in front of the enemy, she stood firm,
And spread the message of truth.

Through trials and tribulations, she endured,
Carrying the banner of righteousness.
Her courage became a symbol for all,
A testament to faith's power and grace.`,
    slug: 'mourning-of-zainab',
    collectionType: 'soz-o-salam',
    collectionId: '4',
    excerpt: 'Zainab\'s mourning touches the heart',
    isFeatured: false,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  }
];

export const dummyAbout: About = {
  id: '1',
  title: 'About Asif Jalal Bijnori',
  content: `Asif Jalal Bijnori is a renowned poet who has dedicated his life to preserving and promoting the rich tradition of Islamic poetry. Born and raised in Bijnor, he has been composing poetry in Urdu, Arabic, and Persian for over three decades.

His work primarily focuses on religious poetry, including Nohey, Quasidey, Manqabat, and Soz-o-Salam. He has a deep understanding of Islamic history and theology, which is reflected in his profound verses about the Ahl al-Bayt (AS) and the events of Karbala.

Asif Jalal Bijnori's poetry is known for its emotional depth, spiritual insight, and linguistic beauty. He has performed at various religious gatherings and his work has been published in several collections. His commitment to preserving the oral tradition of Islamic poetry has made him a respected figure in the community.

Through his poetry, he continues to inspire people to connect with their faith and understand the sacrifices made by the Prophet's family for the preservation of Islam.`,
  image: '/images/about/author-portrait.jpg',
  updatedAt: '2024-01-01T00:00:00Z'
};

export const dummyGalleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Image 1',
    image: '/images/image_1.jpeg',
    description: '',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Image 2',
    image: '/images/image_2.jpeg',
    description: '',
    createdAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    title: 'Image 3',
    image: '/images/image_3.jpeg',
    description: '',
    createdAt: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    title: 'Image 4',
    image: '/images/image_4.jpeg',
    description: '',
    createdAt: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    title: 'Image 5',
    image: '/images/image_5.jpeg',
    description: '',
    createdAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '6',
    title: 'Image 6',
    image: '/images/image_6.jpeg',
    description: '',
    createdAt: '2024-01-06T00:00:00Z'
  },
  {
    id: '7',
    title: 'Image 7',
    image: '/images/image_7.jpeg',
    description: '',
    createdAt: '2024-01-07T00:00:00Z'
  },
  {
    id: '8',
    title: 'Image 8',
    image: '/images/image_8.jpeg',
    description: '',
    createdAt: '2024-01-08T00:00:00Z'
  },
  {
    id: '9',
    title: 'Image 9',
    image: '/images/image_9.jpeg',
    description: '',
    createdAt: '2024-01-09T00:00:00Z'
  },
  {
    id: '10',
    title: 'Image 10',
    image: '/images/image_10.jpeg',
    description: '',
    createdAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '11',
    title: 'Image 11',
    image: '/images/image_11.jpeg',
    description: '',
    createdAt: '2024-01-11T00:00:00Z'
  },
  {
    id: '12',
    title: 'Image 12',
    image: '/images/image_12.jpeg',
    description: '',
    createdAt: '2024-01-12T00:00:00Z'
  },
  {
    id: '13',
    title: 'Image 13',
    image: '/images/image_13.jpeg',
    description: '',
    createdAt: '2024-01-13T00:00:00Z'
  },
  {
    id: '14',
    title: 'Image 14',
    image: '/images/image_14.jpeg',
    description: '',
    createdAt: '2024-01-14T00:00:00Z'
  },
  {
    id: '15',
    title: 'Image 15',
    image: '/images/image_15.jpeg',
    description: '',
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '16',
    title: 'Image 16',
    image: '/images/image_16.jpeg',
    description: '',
    createdAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '17',
    title: 'Image 17',
    image: '/images/image_17.jpeg',
    description: '',
    createdAt: '2024-01-17T00:00:00Z'
  },
  {
    id: '18',
    title: 'Image 18',
    image: '/images/image_18.jpeg',
    description: '',
    createdAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '19',
    title: 'Image 19',
    image: '/images/image_19.jpeg',
    description: '',
    createdAt: '2024-01-19T00:00:00Z'
  },
  {
    id: '20',
    title: 'Image 20',
    image: '/images/image_20.jpeg',
    description: '',
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '21',
    title: 'Image 21',
    image: '/images/image_21.jpeg',
    description: '',
    createdAt: '2024-01-21T00:00:00Z'
  },
  {
    id: '22',
    title: 'Image 22',
    image: '/images/image_22.jpeg',
    description: '',
    createdAt: '2024-01-22T00:00:00Z'
  },
  {
    id: '23',
    title: 'Image 23',
    image: '/images/image_23.jpeg',
    description: '',
    createdAt: '2024-01-23T00:00:00Z'
  },
  {
    id: '24',
    title: 'Image 24',
    image: '/images/image_24.jpeg',
    description: '',
    createdAt: '2024-01-24T00:00:00Z'
  }
];

export const dummyContact: Contact = {
  id: '1',
  email: 'contact@asifjalalbijnori.com',
  phone: '+91-98765-43210',
  address: 'Bijnor, Uttar Pradesh, India',
  socialLinks: {
    facebook: 'https://facebook.com/asifjalalbijnori',
    twitter: 'https://twitter.com/asifjalalbijnori',
    instagram: 'https://instagram.com/asifjalalbijnori',
    youtube: 'https://youtube.com/asifjalalbijnori'
  },
  updatedAt: '2024-01-01T00:00:00Z'
};

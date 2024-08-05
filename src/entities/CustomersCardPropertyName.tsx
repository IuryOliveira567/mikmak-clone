interface ImageData {
  imageUrl: string,
  alt?: string
}

interface CustomerCardPropertyNames {
  title: string,
  description: string,
  costumerSucessStories: string[];
  note?: string,
  image: ImageData
}

export default CustomerCardPropertyNames;
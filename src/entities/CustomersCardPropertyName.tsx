export interface ImageData {
  imageUrl: string,
  alt?: string
}

interface CustomerCardPropertyNames {
  id: number,
  title: string,
  description: string,
  costumerSucessStories: string[];
  note?: string,
  image: ImageData
}

export default CustomerCardPropertyNames;
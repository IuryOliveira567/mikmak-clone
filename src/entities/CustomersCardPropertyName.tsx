export interface ImageData {
  imageUrl: string,
  alt?: string
}

interface CustomerCardPropertyNames {
  id: number,
  title: string,
  description: string,
  reference?: string,
  customerSuccessStories: string[];
  note?: string,
  image: ImageData
}

export default CustomerCardPropertyNames;
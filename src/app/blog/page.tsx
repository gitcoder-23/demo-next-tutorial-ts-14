import { Metadata } from 'next'


export const metadata: Metadata = {
    // title: 'Blog- Page'
    title: {
        absolute: "Blog-Page-after adding absolute in the root layout metadata"
    }
  }


export default function Blog() {

    return <h1>My Blog!</h1>
}
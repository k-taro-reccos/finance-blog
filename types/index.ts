import { MicroCMSImage } from "microcms-js-sdk"

export type Post = {
  id: string
  createdAt: string
  updatedAt: string
  published: string
  revisedat: string
  title: string
  content: string
  eyecatch: MicroCMSImage
  category: {
    id: string
    createAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  published: string
  revisedat: string
  name: string
}

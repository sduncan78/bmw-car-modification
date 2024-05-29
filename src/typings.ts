import type { AstroComponent } from 'astro/dist/runtime/server/render/astro'

export type ContractPage = {
  name: string
  url: string
  menuIcon: AstroComponent
}

export type ContractInfo = {
  name: string
  cosyName: string
  path: string
  textInfo: string
  pages: ContractPage[]
}

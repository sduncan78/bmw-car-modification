import { contracts } from './contracts'
import type { ContractPage } from './typings'

export const resolveStaticPathsForPage = (page: ContractPage) => {
  return contracts
    .filter(c => c.pages.includes(page))
    .map(c => ({ params: { contract: c.path }, props: { contract: c } }))
}

export const namedSlotToArrayElement = (props: Record<string, any>, key: string): any[] => {
  const arr: any[] = []
  let i = 1

  console.log(props)

  while (true) {
    if (props[`${key}${i}`] === undefined) {
      break
    }

    arr.push(props[`${key}${i}`])
    i++
  }

  console.log(arr)
  return arr
}

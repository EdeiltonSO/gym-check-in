import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr', // ssr pra back-end e web pra frfont-end
  async setup() {
    console.log('executado antes de cada suite de teste')

    return {
      teardown() {
        console.log('executado depois de cada suite de teste')
      },
    }
  },
}

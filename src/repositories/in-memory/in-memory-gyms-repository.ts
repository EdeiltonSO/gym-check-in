import { Gym } from '@prisma/client'
import { GymsRepository } from '../gyms-repository-interface'

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    return !gym ? null : gym
  }
}

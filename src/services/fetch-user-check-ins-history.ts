import { CheckIn } from '.prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository-interface'

interface FetchUserCheckInHistoryServiceRequest {
  userId: string
  page: number
}

interface FetchUserCheckInHistoryServiceResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsHistoryService {
  constructor(private checkInsRepository: CheckInsRepository) { }

  async execute({
    userId,
    page,
  }: FetchUserCheckInHistoryServiceRequest): Promise<FetchUserCheckInHistoryServiceResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}

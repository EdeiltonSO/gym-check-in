import { ValidateCheckInService } from '../validate-check-in'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeValidateCheckInService() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const service = new ValidateCheckInService(prismaCheckInsRepository)

  return service
}

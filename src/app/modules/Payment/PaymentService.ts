import { readFileSync } from 'fs'
import { join } from 'path'
import { AppError } from '../../utils/AppError'
import httpStatus from 'http-status'
import { verifyPayment } from './PaymentUtils'
import prisma from '../../helpers/prisma'

const confirmationService = async (transactionId: string) => {
  const verifyResponse = await verifyPayment(transactionId)
  //   const isExistRental = await rentals.findOne({ tran_id: transactionId })
  const isExistPayment = await prisma.payment.findUniqueOrThrow({
    where: {
      transactionId: transactionId,
    },
  })
  if (!isExistPayment) {
    throw new AppError(httpStatus.NOT_FOUND, 'Payment not found!')
  }

  if (verifyResponse && verifyResponse.pay_status === 'Successful') {
    await prisma.payment.update({
      where: {
        id: isExistPayment.id,
      },
      data: {
        status: 'PAID',
      },
    })
  }

  // eslint-disable-next-line no-undef
  const filePath = join(__dirname, '../../views/payment-successfully.html')
  const template = readFileSync(filePath, 'utf-8')

  return template
}

const failedPayment = async () => {
  // eslint-disable-next-line no-undef
  const filePath = join(__dirname, '../../views/payment-failed.html')
  const template = readFileSync(filePath, 'utf-8')
  return template
}
export const paymentServices = {
  confirmationService,
  failedPayment,
}

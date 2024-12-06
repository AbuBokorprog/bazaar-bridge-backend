import httpStatus from 'http-status'
import SuccessResponse from '../../utils/SuccessResponse'
import CatchAsync from '../../utils/CatchAsync'
import { followerServices } from './FollowersServices'

const FollowShop = CatchAsync(async (req, res) => {
  const data = await followerServices.FollowShop(req.body)

  SuccessResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Following successfully!',
    data,
  })
})

const unFollowShop = CatchAsync(async (req, res) => {
  const data = await followerServices.unFollowShop(req.body)

  SuccessResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Unfollow the shop successfully!',
    // data,
  })
})

// const retrieveAllFollower = CatchAsync(async (req, res) => {
//   const data = await followerServices.retrieveAllFollower()

//   SuccessResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Retrieve all followers successfully!',
//     data,
//   })
// })

// const retrieveFollowerById = CatchAsync(async (req, res) => {
//   const { id } = req.params
//   const data = await followerServices.retrieveFollowerById(id)

//   SuccessResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Retrieve follower by id successfully!',
//     data,
//   })
// })

// const updateFollowerById = CatchAsync(async (req, res) => {
//   const { id } = req.params
//   const data = await followerServices.updateFollowerById(id, req.body)

//   SuccessResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Update follower by id successfully!',
//     data,
//   })
// })

// const deleteFollowerById = CatchAsync(async (req, res) => {
//   const { id } = req.params
//   const data = await followerServices.deleteFollowerById(id)

//   SuccessResponse(res, {
//     status: httpStatus.OK,
//     success: true,
//     message: 'Delete follower by id successfully!',
//     data,
//   })
// })

export const followerController = {
  FollowShop,
  unFollowShop,
  // retrieveAllFollower,
  // retrieveFollowerById,
  // updateFollowerById,
  // deleteFollowerById,
}

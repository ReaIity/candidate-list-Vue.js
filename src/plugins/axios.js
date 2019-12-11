/* eslint-disable */
import axios_http from 'axios'

// insert all your axios logic here

export const axios = axios_http

export default {
  install (Vue, options) {
    Vue.prototype.$axios = axios_http
  }
}















/*export default {
  get: jest.fn(() => Promise.resolve({ data: { total_payout: 100.21 }})),
  default: mockNoop,
  post: mockNoop,
  put: mockNoop,
  delete: mockNoop,
  patch: mockNoop
};*/
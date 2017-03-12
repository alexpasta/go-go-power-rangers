import { POWER_RANGER_ENDPOINT } from 'constants/config'
import { AUTH_TOKEN } from 'constants/config'

export default {
  getSharedFilter: (managerId, cb) => {
    const api = `${POWER_RANGER_ENDPOINT}/filters/${managerId}`

    fetch(api)
      .then(response => response.json())
      .then(json => {
        let res = { currentFilter: {}, filterHistory: {}}
        res.currentFilter.facility = json.current_filter.facility
        res.filterHistory.facility = json.facility
        cb(res)
      })
  }
}
import * as Types from './types'

const initialState = {
  globalDetails: [],
  upgrade: {},
  claimCheck: '0',
  claim: {},
  feeBurnTally: '0',
  error: null,
  loading: false,
}

export const spartaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SPARTA_GLOBAL_DETAILS: {
      return {
        ...state,
        globalDetails: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SPARTA_UPGRADE: {
      return {
        ...state,
        upgrade: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.FALLENSPARTA_CHECK: {
      return {
        ...state,
        claimCheck: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.FALLENSPARTA_CLAIM: {
      return {
        ...state,
        claim: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SPARTA_FEEBURN_TALLY: {
      return {
        ...state,
        feeBurnTally: action.payload,
        error: null,
        loading: false,
      }
    }

    case Types.SPARTA_LOADING: {
      return {
        ...state,
        error: null,
        loading: true,
      }
    }

    case Types.SPARTA_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }
    default:
      return state
  }
}

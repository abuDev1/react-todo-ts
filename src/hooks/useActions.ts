import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../redux/action-creator'

export const useActions = () => {
 const dispatch = useDispatch()
 return bindActionCreators(ActionCreators, dispatch)
}

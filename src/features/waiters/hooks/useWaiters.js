import React from 'react'
import { WaitersApi } from '../../../api/server'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionSetList,
  actionSetEditItem,
} from '../../Counter/store/actions'

export function useTodo () {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.waiter.list)
  const waiter = useSelector((state) => state.waiter.todo)

    React.useEffect(() => {
    WaitersApi.getList().then((newList) => dispatch(actionSetList(newList)))
  }, [])

  const onWaiterSubmit = (formWaiter) => {
    if (formWaiter.id) {
      WaitersApi.update(formWaiter.id, formWaiter).then((newWaiter) => {
        const newList = list.map((waiter) => waiter.id === formWaiter.id ? newWaiter : waiter)

        dispatch(actionSetList(newList))
      })
    } else {
      WaitersApi.create(formWaiter).then((newWaiter) => dispatch(actionSetList([...list, newWaiter])))
    }
  }

  const onWaiterDelete = (id) => {
    const newList = list.filter((waiter) => waiter.id !== id)

    WaitersApi.delete(id).then(() => dispatch(actionSetList(newList)))
  }

  const onWaiterEdit = (editWaiter) => {
    dispatch(actionSetEditItem(editWaiter))
  }

  return {
    waiter,
    list,
    onWaiterSubmit,
    onWaiterDelete,
    onWaiterEdit,
  }
}
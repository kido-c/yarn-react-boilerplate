import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '@/components/molcules/Counter'
import { RootState } from 'src/stores'
import { decrease, increase, increaseBy } from '@/stores/counter'

const Main = () => {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch() // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(increase())
  }

  const onDecrease = () => {
    dispatch(decrease())
  }

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff))
  }
  return (
    <div className='App'>
      <h1>React Boilerplate with webpack</h1>
      <section>
        <ul>
          <li>yarn</li>
          <li>webpack</li>
          <li>typescript</li>
          <li>eslint</li>
          <li>prettier</li>
          <li>storybook</li>
          <li>jest</li>
        </ul>
      </section>
      <section>
        <div>redux 전역 상태 확인</div>
        <Counter
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onIncreaseBy={onIncreaseBy}
        />
      </section>
    </div>
  )
}

export default Main

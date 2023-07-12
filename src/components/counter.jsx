import { Text } from './text'
import { IconAdd } from './icons/iconAdd'
import { IconeMinuse } from './icons/iconMinuse'

import styles from './Counter.module.css'
import { useState } from 'react'

export const Counter = props => {
	return (
		<div className={styles.wrapper}>
			<Text>
				{props.count} {props.text}
			</Text>
			<nav>
				<IconAdd onClick={props.onIncrement} />
				<IconeMinuse onClick={props.onDecrement} />
			</nav>
		</div>
	)
}

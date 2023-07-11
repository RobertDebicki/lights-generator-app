import { Text } from './text'
import { IconAdd } from './icons/iconAdd'
import { IconeMinuse } from './icons/iconMinuse'

import styles from './Counter.module.css'
import { useState } from 'react';

export const Counter = (props) => {

const [value, setValue] = useState(0);

const handleIncrement = () => {
    setValue(value + 1)
}

const handleDecrement = () => {
    if(value <= 0) {
        return;
    }
    setValue(value - 1)
}

	return (
		<div className={styles.wrapper}>
			<Text>
				{value} {props.text}
			</Text>
			<nav>
				<IconAdd onClick={handleIncrement}/>
				<IconeMinuse onClick={handleDecrement}/>
			</nav>
		</div>
	);
};

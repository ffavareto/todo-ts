import { Circle, Trash } from 'phosphor-react';
import checkIcon from './assets/check.svg';
import styles from './Task.module.css';

import { Task } from './App';

interface TaskProps {
    task: Task,
    onToggleCompleteState: (id: string) => void,
    onHandleDeleteTask: (id: string) => void,
}

export function TaskItem({ task, onToggleCompleteState, onHandleDeleteTask }: TaskProps) {
    return (
        <div key={task.id} className={styles.task}>

            <div>
                <div className={styles.completeIcons} onClick={() => onToggleCompleteState(task.id)}>
                    {task.isComplete ? 
                    (<img src={checkIcon} width="22"/>) : 
                    (<Circle size={22} color="#4EA8DE"/>)}
                </div>

                <p className={task.isComplete ? styles.complete : styles.not_complete}>
                    {task.text}
                </p>
            </div>

            <Trash
                size={22}
                className={styles.delete}
                onClick={() => onHandleDeleteTask(task.id)}
            />
        </div>
    )
}
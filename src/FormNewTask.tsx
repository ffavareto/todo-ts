import styles from './FormNewTask.module.css';
import { PlusCircle  } from 'phosphor-react';
import { useState } from 'react';

interface formNewTaskProps {
    onAddTask: (text: string) => void;
};

export function FormNewTask({ onAddTask }: formNewTaskProps) {

    const [text, setText] = useState('');

    return (
        <div className={styles.form}>

            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={() => onAddTask(text)}>
                <span>Criar</span>
                <PlusCircle size={18}/>
            </button>

        </div>
    );
};
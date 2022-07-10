import { ClipboardText } from "phosphor-react";
import styles from './Tasks.module.css';

import { Task } from './App';
import { TaskItem } from "./TaskItem";

interface TasksProps {
    tasks: Task[],
    onToggleCompleteState: (id: string) => void,
    onHandleDeleteTask: (id: string) => void
}

export function Tasks({ tasks, onToggleCompleteState, onHandleDeleteTask }: TasksProps) {
    return (
        <div className={styles.tasks}>
            <header>
                <span>
                    Tarefas criadas <b>{tasks.length}</b>
                </span>
                <span>
                    Concluídas <b>{tasks.filter(task => task.isComplete).length} de {tasks.length}</b>
                </span>
            </header>

            <section>
                {tasks.length > 0 ? (
                    <div className={styles.container_tasks}>
                        {tasks.map(task => (
                            <TaskItem
                                task={task} key={task.id}
                                onToggleCompleteState={onToggleCompleteState}
                                onHandleDeleteTask={onHandleDeleteTask}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.no_tasks}>
                        <ClipboardText size={56} />
                        <b>Você ainda não tem tarefas cadastradas</b>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )}

            </section>
        </div>
    );
};
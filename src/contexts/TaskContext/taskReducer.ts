import { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionModel } from './taskActions';
import { TaskActionTypes } from './taskActions';


export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60; // Convertendo minutos para segundos

      return { 
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask], // Adiciona a nova tarefa ao array de tarefas
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
         secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
           if(state.activeTask && state.activeTask.id === task.id) {
             return { ...task, interruptDate: Date.now() };
          
          } 
          return task;
        }),

    };
  }

    case TaskActionTypes.RESET_STATE: {
      return state;
    }

    default:
      return state;
  }

  // sempre deve-se retornar o estado atual, mesmo que não tenha mudado
  return state;
}

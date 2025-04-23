import { TaskModel } from './TaskModel';
export type TaskStateModel = {
  tasks: TaskModel[]; // array de tasks
  secondsRemaining: number; // segundos restantes
  formattedSecondsRemaining: string; // segundos restantes formatados
  activeTask: TaskModel | null; // task ativa
  currentCycle: number; // 1 a 8
  config: {
    workTime: number; // tempo de trabalho em segundos
    shortBreakTime: number; // tempo de descanso curto em segundos
    longBreakTime: number; // tempo de descanso longo em segundos
  };
};
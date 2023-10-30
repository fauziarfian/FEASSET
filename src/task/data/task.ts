export interface Task{
    task_id: number;
    task_name: string;
    task_description: string;
}
export const tasks = [
    {
        task_id: 1,
        task_name:"Task 1",
        task_description:"Task 1 Description"
    },
    {
        task_id: 2,
        task_name:"Task 2",
        task_description:"Task 2 Description"
    }
]
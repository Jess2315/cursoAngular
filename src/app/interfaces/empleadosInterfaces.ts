export interface IEmpleado{
    status:string
    data: IDataEmpleado[]
    message: string 
}
    export interface IDataEmpleado{
        id: number
        employee_name: string
        employee_salay: number 
        employee_age: number
        profile_image: string 
    }
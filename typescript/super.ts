class Human
{
    name : string;
    constructor(name :string)
    {
        this.name = name;
        console.log('Human constructor');

    }
}
class Teacher extends Human
{
    constructor(name : string)
    {
        super(name);
        console.log('Teacher constructor',this.name);
    }
}
let teacher = new Teacher('Tk');
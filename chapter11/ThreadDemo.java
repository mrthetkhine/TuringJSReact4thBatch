public class ThreadDemo extends Thread
{
    String name;
    ThreadDemo(String name)
    {
        this.name = name;
    }
    public void run()
    {
        for(int i=0;i<30;i++)
        {
            System.out.println("Thread "+this.name+ " i "+i);
        }
    }
    public static void main(String[]args)
    {
        ThreadDemo t1 = new ThreadDemo("ThreadOne");
        ThreadDemo t2 = new ThreadDemo("ThreadTwo");
        ThreadDemo t3 = new ThreadDemo("ThreadThree");

        t1.start();
        t2.start();
        t3.start();
    }
}
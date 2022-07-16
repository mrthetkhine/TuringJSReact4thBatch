interface Flyable
{
    void fly();
}
class Bird implements Flyable
{
    public void fly()
    {
        System.out.println("Birdy Fly");
    }
}
class Aeroplane implements Flyable
{
    public void fly()
    {
        System.out.println("Aeroplane Fly");
    }
}
public class StaticType
{
    public static void main(String[]args)
    {
        Flyable b = new Bird();
        b.fly();

        b = new Aeroplane();
        b.fly();
    }
}
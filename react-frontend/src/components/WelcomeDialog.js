import FancyBorder from "./FancyBorder";
export default function WelcomeDialog() {
    let header = <h1>This is header</h1>;
    return (
        <FancyBorder color="blue" header={header}>
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}
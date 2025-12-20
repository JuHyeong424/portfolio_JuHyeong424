export default function Header() {
    return (
        <header className="flex flex-row justify-between">
            <nav className="cursor-pointer">{'< JH />'}</nav>
            <div className="flex flex-row gap-6">
                <nav className=" cursor-pointer">01. About</nav>
                <nav className=" cursor-pointer">02. Skills</nav>
                <nav className=" cursor-pointer">03. Projects</nav>
                <nav className=" cursor-pointer">04. Experience</nav>
                <nav className=" cursor-pointer">05. Contact</nav>
            </div>
        </header>
    )
}

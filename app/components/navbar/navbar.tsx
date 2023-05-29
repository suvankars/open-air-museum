import Container from "../container"
import Logo from "./logo"
import Search from "./search"

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className={"border-b-[1px]"}>
                <Container>
                    <div className="
                    flex
                    flex-row
                    gap-3
                    items-center
                    justify-between
                    md: gap-0
                    ">
                       <Logo/>
                       <Search/>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar
import { CreditCard, Home } from 'react-feather'
import Heading from './Heading'
import NavbarLInk from './NavbarLInk'

export default function Navbar() {
    return (
        <div
            className="flex justify-center text-white w-full h-12 p-3 top-0 sticky flex justify-center mt-8
        "
        >
            <div className="flex gap-5 items-center">
                <NavbarLInk
                    icon={<Home className="h-5 w-5" />}
                    path="/"
                    title="buy electricity"
                />
                <div className='rounded-full bg-white h-2 w-2'>

                </div>
                <NavbarLInk
                    icon={<CreditCard className="h-5 w-5" />}
                    path="/meter-tokens"
                    title="my meter tokens"
                />
            </div>
        </div>
    )
}

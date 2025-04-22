import { useTheme } from '@/context/theme-provider'
import { Link } from 'react-router-dom'
import { CitySearch } from './city-search'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    return (
        <div className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60'>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
                <Link to={"/"}>
                    <img src={isDark ? "/logo.png" : "logo2.png"} alt="Cl;imate Logo" className='h-14' /> </Link>

                <div className="flex gap-4">
                    {/* search */}

                    <CitySearch />
                    {/* Theme Toggle */}

                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default Header
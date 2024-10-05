import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="py-4 bg-white text-gray-900 transition-colors shadow-md duration-300 ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold ">
          <Link href="/">Daily news</Link>
        </div>

        {/* Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className="hover: text-gray-600">
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2">
                    <li>
                      
                      <NavigationMenuLink
                        href="/services/web-development"
                        className="hover: text-gray-600"
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/apps"
                        className="hover: text-gray-600"
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className="hover: text-gray-600"
                      >
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover: text-gray-600">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="hover: text-gray-600">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        
      </nav>
    </header>
  );
};

export default Navbar;

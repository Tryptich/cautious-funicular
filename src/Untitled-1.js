<div className="container mx-auto">
        <nav className="flex justify-between p-4">
          <div className="flex items-center">
            <div className="inline-block h-6 w-6 rounded-full bg-gray-400" />
            <span className="ml-2">UpShell</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-2">
              <NavItem href="/product" text="Product" />
              <NavItem href="/download" text="Download" />
              <NavItem href="/remote-work" text="Remote work" />
              <NavItem href="/jobs" text="Jobs" />
              <NavItem href="/customer" text="Customer" />
              <NavItem href="/how-it-work" text="How It works" />
              <NavItem href="/login" text="Log In" />
              <NavItem href="/sing-up" text="Sign Up" />
            </ul>
          </div>
        </nav>
        <div className="text-center md:text-left md:left max-w-3x1 mx-auto mt-12 md:mt-24 space-x-3">
          <h1 className="font-black text-6x1 leading-tight">All in one place</h1>
          <div className="space-y-3">
            <p className="text-x1 font-light">
              Publish - Sell - Send
            </p>
            <div className ="md:hidden">
              <Button type="button">Download on Play Store</Button>
            </div>
            
            <form onSubmit={(event) => {
              event.preventDefault();
              console.log("TODO submit form");
            }}
              className="hidden md:block space-x-3"
            >
              <input type="text" placeholder="Enter your Email ..."
                className="bg-white rounded border-gray-300 p-2 " />
              <Button type="submit">Get Started</Button>
              <p className="text-gray-600 text-sm">
                for teams & inidividuals - web, mobile
              </p>
            </form>
          </div>
        </div>
      </div>






<div class="flex items-center justify-between">
            <div class="flex items-center justify-center">
              <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                <svg class="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                </svg>
                UPSHELL
              </div>   
              
              <div class="flex items-center ml-auto bg-gray-100 self-stretch custom-rounded px-4 w-2/3">
                <i class="fa fa-search"></i>
                <input type="text" class="px-4 self-stretch bg-transparent flex-grow outline-none" placeholder="Search"/>
             </div>



              <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                            Product
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                            Community
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                            Plans
                </a>
              </div>
            </div>
            <div class="hidden md:flex items-center justify-center">
              <a href="#" class="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">Login</a>
              <button class="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Sign Up</button>
            </div>
          </div>
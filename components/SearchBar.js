export function SearchBar(list) {
  return `
            <header class="bg-[hsl(209,23%,22%)] sticky top-0 z-10">
              <div class="h-18 max-w-200 w-9/10 mx-auto flex items-center">
                <label for="search" class="sr-only">
                  Search voters
                </label>
                <input 
                id="search"
                type="search"
                class="w-full focus:outline-none focus:ring-2 focus:ring-white/50 border text-xl placeholder:text-[hsl(211,13%, 63%)] border-[hsl(210,17%,95%)] bg-transparent h-11 px-5 text-white rounded-full"
                placeholder="Search Name"
                />
              </div>
            </header>
  `
}

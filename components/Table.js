import { TableBody } from "./TableBody.js"

export function Table(list) {
  return `<div class="bg-[hsl(209,26%,17%)] pb-10 min-h-screen overflow-x-auto">
            <div class="flex max-w-200 w-9/10 mx-auto justify-between items-center pt-4">
              <h2 class=" text-white text-2xl md:text-3xl ">${list.name}</h2>
              <button
                id="back-btn"
                class="inline-flex text-white items-center gap-2 px-6 py-1.5 rounded shadow-[0_0_4px_0_rgba(0,0,0,0.2)] cursor-pointer bg-[hsl(209,20%,28%)] hover:bg-[hsl(209,20%,35%)] "
              >
                 Back
              </button>
            </div>
            <table class="max-w-200 w-9/10 mx-auto text-white mt-12 border-collapse [&_td]:border [&_th]:border [&_td]:border-white [&_th]:border-white [&_td]:text-left [&_th]:text-left [&_td]:px-2 [&_th]:px-2 [&_td]:py-1 [&_th]:py-1">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Serial No.</th>
                </tr>
              </thead>

              <tbody>
              ${TableBody(list.voters)}
              </tbody>
            </table>
          </div>  
  `
}

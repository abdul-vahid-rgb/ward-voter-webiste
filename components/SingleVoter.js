const get = (value) => value ?? "Not available"

export function SingleVoter(voter) {
  const fields = [
    ["Serial Number", voter?.serialNumber],
    ["Name", voter?.name],
    ["Guardian Name", voter?.guardianName],
    ["Gender", voter?.gender],
    ["Age", voter?.age],
    ["Old Ward Number", voter?.oldWardNumber],
    ["House Number", voter?.houseNumber],
    ["House Name", voter?.houseName],
    ["New SEC ID Number", voter?.["New SEC ID Number"]],
  ]
  return `
    <div class="min-h-screen bg-[hsl(209,26%,17%)] text-white pb-10">

      <!-- Header -->
      <header class="sticky top-0 bg-[hsl(209,23%,22%)] z-10 shadow-md">
        <div class="max-w-5xl w-9/10 mx-auto h-18 flex items-center justify-end">
          <button
            id="back-btn"
            class="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-[hsl(209,26%,17%)] shadow-[0_0_4px_0_rgba(0,0,0,0.2)] cursor-pointer hover:opacity-90"
          >
            ← Back
          </button>
        </div>
      </header>

      <!-- Content -->
      <main class="max-w-5xl w-9/10 mx-auto mt-10">

        <!-- Title -->
        <h1 class="text-3xl font-semibold mb-8">
          ${get(voter?.name)}
        </h1>

        <!-- Card -->
        <section
          class="bg-[hsl(209,23%,22%)] rounded-2xl p-6 shadow-lg"
        >

          <dl class="grid md:grid-cols-2 gap-5">
            ${fields
              .map(
                ([label, value]) => `
                                     <div>
                                       <dt class="text-gray-400 text-sm ">
                                         ${label}
                                      </dt>
                                      <dd class="text-lg font-medium break-words">
                                        ${get(value)}
                                      </dd>
                                     </div>
                                    `,
              )
              .join("")}
          </dl>
        </section>
      </main>
    </div>
  `
}

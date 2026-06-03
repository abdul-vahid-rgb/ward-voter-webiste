export function Home() {
  const fields = [
    {
      wardNumber: 20,
      wardName: "PANNIYOORKULAM (no data available)",
      booths: [
        {
          boothNumber: 1,
          boothName: "AMUPS PUTHOORMADAM KINDER CARE NURSERY SCHOOL LEFT SIDE",
        },
        {
          boothNumber: 2,
          boothName: "AMUPS PUTHOORMADAM KINDER CARE NURSERY SCHOOL RIGHT SIDE",
        },
      ],
    },
    {
      wardNumber: 21,
      wardName: "PARAKKULAM (Only this section contains data)",
      booths: [
        {
          boothNumber: 1,
          boothName: "PARAKKULAM ANGANAVADI",
        },
        {
          boothNumber: 2,
          boothName: "PANNIYOORKULAM ANGANAVADI",
        },
      ],
    },
    {
      wardNumber: 22,
      wardName: "NEDUMPARAMBU (no data available)",
      booths: [
        {
          boothNumber: 1,
          boothName: "MALARVADI PRE SCHOOL",
        },
        {
          boothNumber: 2,
          boothName: "PRASANTHI SCHOOL",
        },
      ],
    },
  ]
  return `
    <div class="font-sans bg-[hsl(210,20%,24%)] w-full min-h-screen p-4 md:p-20">
      <div class="bg-white rounded-2xl p-4 md:p-6">
        <h2 class="text-[rgba(34, 34, 34, .75)] font-bold">Voter List</h2>
        <hr class="my-2" />
        <section class="space-y-4">

          ${fields
            .map(({ wardNumber, wardName, booths }) => {
            return `
      <div>      
        <h3 class="inline-block border-b">Ward ${wardNumber} - ${wardName}</h3>
        <div class="flex flex-col">
        ${booths
          .map(({boothName, boothNumber}) => {
            return `
          <a
          href="#${wardNumber}/${boothNumber}"
          class="relative w-fit  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          ${String(boothNumber).padStart(3, '0')} - ${boothName}
        </a>
          `
          })
          .join("")}
          </div>
      </div>
          `
            })
          .join("")}
        </section>
      </div>
    </div>
  `
}

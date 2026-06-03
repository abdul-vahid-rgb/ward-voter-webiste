export function TableBody(voters) {
  return `
  ${voters
    .map(
      (el) =>
        ` <tr data-serial="${el.serialNumber}" class="cursor-pointer duration-300 hover:bg-white/10 transition-colors"">
                  <td>${el.name}</td>
                  <td>${el["serialNumber"]}</td>
               </tr>`,
    )
    .join("")}
  `
}

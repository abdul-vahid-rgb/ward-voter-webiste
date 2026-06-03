import Fuse from "https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.min.mjs"
import { Home } from "./components/Home.js"
import { SearchBar } from "./components/SearchBar.js"
import { Table } from "./components/Table.js"
import { Error } from "./components/Error.js"
import { TableBody } from "./components/TableBody.js"
import { SingleVoter } from "./components/SingleVoter.js"
import { voterDetails } from "./voterdata.js"

const root = document.getElementById("root")
router()

window.addEventListener("hashchange", router)

function router() {
  const [ward, booth, serial] = location.hash.slice(1).split("/")

  if (!ward) {
    root.innerHTML = Home()
    return
  }

  const boothData = voterDetails[ward]?.[booth]

  if (!boothData) {
    root.innerHTML = Error("ward or booth")
    return
  }

  if (serial) {
    const voter = boothData.voters.find(
      (v) => v.serialNumber === Number(serial),
    )

    root.innerHTML = voter ? SingleVoter(voter) : Error("voter serial number")

    addBackButtonListener()

    return
  }

  renderBooth(boothData)
}

function renderBooth(boothData) {
  root.innerHTML = SearchBar() + Table(boothData)

  initSearch(boothData.voters)
  initTableNavigation()
  addBackButtonListener()
}

function initSearch(voters) {
  const input = document.querySelector("#search")
  const tableBody = document.querySelector("tbody")

  if (!input || !tableBody) return

  const fuse = new Fuse(voters, {
    keys: ["name"],
    threshold: 0.4,
  })

  input.addEventListener("input", (e) => {
    const value = e.target.value

    const filtered =
      value.trim() === "" ? voters : fuse.search(value).map((r) => r.item)

    tableBody.innerHTML = TableBody(filtered)
  })
}

function initTableNavigation() {
    const [ward, booth] = location.hash.slice(1).split("/")

    document.querySelector('tbody').addEventListener("click", (e) => {
    const row = e.target.closest("tr")

    if (!row) return

    location.hash = `${ward}/${booth}/${row.dataset.serial}`
  })
}

function addBackButtonListener() {
  document.querySelector("#back-btn")?.addEventListener("click", () => {
    history.back()
  })
}

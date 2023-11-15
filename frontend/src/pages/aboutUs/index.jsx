import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  CarouselPage from './Mission/car/index'
import {
  faBox,
  faGlobe,
  faHandHoldingDroplet,
  faVialCircleCheck,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLessThan,
  faGreaterThan,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../homepage/compoments/Navbar";
import Footer from "../homepage/compoments/footer";

// import Umer from "../../assets/images/umer.jpg";
// import Jawwad from "../../assets/images/jawwad.jpeg";
// import Profile from "../../assets/images/profile.png";

function AboutUs() {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-white min-h-screen">
      {/* Top section  */}

      <div className="banner w-full h-80 bg-gray-600 justify-center text-center text-lg flex items-center ">
        <h1 className="text-white text-6xl font-bold font-serif">About Amor</h1>
      </div>

      {/* end top section */}
      <div className="">
        <div className="flex text-4xl font-bold justify-center underline font-serif my-9">
          Our Values
        </div>
        <div className="flex justify-between my-10 mx-56 ">
          <div className="">
            <FontAwesomeIcon
              className="text-green-300 w-12 h-12 mx-24"
              icon={faBox}
            />
            <h1 className="text-lg font-semibold mx-5">
              Packaging Sustainability
            </h1>
            <p className="text-sm text-blue-950">
              We care for our forests | FSC Certified
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-orange-300 w-12 h-12 mx-24"
              icon={faGlobe}
            />
            <h1 className="text-lg font-semibold mx-5">Worldwide Shipping</h1>
            <p className="text-sm text-blue-950">
              Low Charges | 1,99€ Standard Shipping
            </p>
          </div>
        </div>
        <div className="flex justify-between mx-20">
          <div>
            <FontAwesomeIcon
              className="text-blue-950 w-12 h-12 mx-16"
              icon={faBullhorn}
            />
            <h1 className="text-lg font-semibold mx-5">Vegan Products</h1>
            <p className="text-sm text-blue-950">Vegan Products available!</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-blue-500 w-12 h-12 mx-24"
              icon={faHandHoldingDroplet}
            />
            <h1 className="text-lg font-semibold mx-14">Mild Formula</h1>
            <p className="text-sm text-blue-950">
              Less irritation | Suitable for sensitive skin
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-red-300 w-12 h-12 mx-24"
              icon={faVialCircleCheck}
            />
            <h1 className="text-lg font-semibold mx-14">Cruelty Free</h1>
            <p className="text-sm text-blue-950">
              We don't sell Products tested on animals!
            </p>
          </div>
        </div>
      </div>
      {/*Pre Products */}
      <div className='pt-4'>
             <CarouselPage/>
      </div>
      {/* Story */}
      <div className="  py-2 grid md:grid-cols-2">
        <div className="w-full rounded-r-sm bg-red-200"> <img className="w-3/4 ml-14 h-96 rounded-sm" src="https://beautyproducts.pk/cdn/shop/collections/skin_care-mosaic_3_1500x.jpg?v=1646666404" alt="story image" /></div>
        <div className=" w-full h-96 bg-red-100 p-10  overflow-scroll lg:overflow-hidden ">
          <h2 className="text-2xl font-bold text-black mb-4">Our Story</h2>
          <p className="text-slate-500 text-lg ">
            We are a company that values integrity, quality, and community. Our
            team is dedicated to providing the best products and services to our
            customers. We believe that by working together, we can achieve more
            than we could alone. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Temporibus, sint labore provident voluptatum
            libero dignissimos assumenda odit repellendus nisi aspernatur ullam.
            Veritat\
          </p>
        </div>

        {/* Team  sectionn*/}
        <div className="col-span-2 px-10">
          <h2 className="text-2xl font-bold text-black my-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-12">
            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img className="rounded-lg"
                  src="data:image/jpeg;base64,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"
                  alt="Umer"
                   className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Umer Nawaz</p>
                <p>Founder, MAC</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Saqlain Haider</p>
                <p>Founder, COO</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src="https://icon-library.com/images/female-profile-icon/female-profile-icon-1.jpg"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Atika Javed</p>
                <p>Founder, Olay</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRYVFRUZGRQaHBgcGBwcGBoYHBgZGB0ZHh8hJBgcITQnHR8rHx0kJjgmKy8xNjU3HCQ7QDs0Py40NTEBDAwMEA8QHxISGjQhJCs0NDQxNDE0MTQ0MTQ0NDQ0MTQ0NDQ0NEA0MTQxNDQ0NDQ0MTE0ND80NDQxNDQ0NDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwIEAQYHCAX/xABBEAABAgIHBQYEAwcDBQEAAAABAAIDEQQSEyExUYFBYXGRoQUGBzKx0SKCwfBSU5MUFSNykqKyQlRiNHPC4fEk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAfEQEBAQEAAQUBAQAAAAAAAAAAAQIRMQMSIUFhE1H/2gAMAwEAAhEDEQA/AOsKUPEcQiocjyWWgzFxxGxBbSo2B09VKuMxzUIjgQQDMoK6bR8dPZQqHI8lODcb7rttyCyq9J2a/RNrjMc0qNfKV+OF6BKsUfDX2SahyPJOhGQvuv23IHKpG8x+9isVxmOaREBJJAmEC1bZgOAVaocjyVhjhIXjBAxUVbrjMc1VqHI8kGYeI4hXFUaDMXHEbFYrjMc0EY2B09VWViI4EEAzKTUOR5IJ0fHT2VlVoNxvuu23J1cZjmgVSdmv0SU6NfKV+OF6XUOR5IHUfDX2TkmEZC+6/bcp1xmOaCvG8x+9igmRASSQJhRqHI8kEUKVQ5HkhBcUH4HgVG1GfQrDngggG8oK6nB8w+9iLJ2XopMYWmZwQWUmkYa+6zajPoVGI6YkLygQnUbbp9VCydl6KcP4Z1rp/exBYVakY6e6ZajPoUuIKxmLwgUrMHAa+qTZOy9FK1DR8RAlMknADG8oLKpxMTxK0fvD4p0aASyjtMd4mCQS2GD/ADkTd8olvWkUrxQp73EssmN2AMLv7nOv5IO2q8uF0DxTpbT/ABWQojdsmljtHAkdF03u331olNaaj6kQCbmP+Fw3g4OG8INkfgeBVRMh0yG8EMe1x/4uB9Fiydl1CAg+YfexW1WYwtMzgmWoz6FBikYa+6rp8R0xIXlLsnZeiCdG26fVWFXh/DOtdP72KdqM+hQLpGOnulJsQVjMXhRsnZeiB0HAa+qakscGiRxWbUZ9CgahKtRn0KygqqUPEcQp2B3IsiL7rr+SCylRsDp6rFuMisF4NwxKBCbR8dPZFgdyy1tW88LkFhV6Ts1+ilbjIqLviw2Z70CVYo+GvsoWB3KTXVbjxuQZjRWsa5ziA1oJcTcABeSdFwXv531fTXvhwyWUQGQAuMSV1Z+7JvPduPjF2+WQWUVhk6LN0T/ttuq/M6WjSuOoIqSEIBRIUkIJ0WO+E8PhuLHgghzDVMxfiF3Hw175GmsdBjEftEMAzAkIjMK0vxC4O4g7VwtfV7rdpuotLgRgbmvaHb2PNVw5GeiD0vGwOnqqye54cJDb/wDVGwO5AUfHT2VlV2tq3nhcpW4yKCNJ2a/RJTnfFhsz3rFgdyCdHw19k5Ia6rceNyzbjIoFRvMfvYoJrmF14wKLA7kCkJtgdyEFlQfgeBSrfd1RbTuljdjmgSpwfMPvYp2G/oipK+c5ILCTSMNfdRt93VFatdhtzQJTqNt0+qLDf0R5d89MEFhVqRjp7rNvu6oq1r8NmaDgnijSC/tCICbmMhsH9IcerlqK2/xVo5Z2jEng9sNw/pDfVqT3H7p/tz3ue8sgsIDqvme431Qdl15K5bydrslt5GqL61H7vUlzDEMMw4QxfF/hsvwlWvcTgKoM5rtnZXdmiUaVlAYHfjcK7/6nX8l9Z7AZTAMsJgGSyvq/5Gs9L/a8/wBB7tUuOf4dHiFuxzmFjTvrPkr3aHdF9FYH0qNDY53khsnFiP4NEgB/yJku6KJhtnOqJ5yE5cVz+td/lHm+NRIjBXdDe1hMg5zHNaTkHESJlkUuE8Nc0uE2gguGYBvHJd671dhMpkKq4n4GxHMA/GWEMPykzkuE0CiuixIcIeaI9jBdORe4Nw2yn0Wude5lrPtr03QHhzWOb5S1pbwLZjovoL59BodjDhsrVqjGMnKU6rQ2eN2E1Yt93VUlKkYa+6rp1atdhtzRYb+iAo23T6qwq/l3z0wRb7uqDFIx090pOq1r8NmaLDf0QTg4DX1TVXryulOSLfd1QWEKvb7uqECVKHiOITrAb0GEBffdfyQOSo2B09Uu3O5DXl1xwKBSbR8dPZTsBvWHNq3jhegeq9J2a/RYtzuWW/Fjsy3oEqxR8NfZFgN6i51W4cb0HJfGuhSiUeOBcQYbuIm9vStyX2vC6jVKAx0pF74jjvAcWDo3qvq+IHZppNEitAm9ra7P5mTPUTGqh3KhhtBooGFm06um49Ssd6+OfrfGfnv4+6hCFk2CEIQYeLjwK474Y9mWvaFcibIJc8/zkuazrM/KuxrVfDXsqwgviEfHGiPf8jXODNJTPzLTF4y3nrfo2B09VWTWvLrjgVOwG9bvOhR8dPZWUhzat44XqNudyDNJ2a/RJTm/Fjsy3qVgN6Ao+GvsnKu51W4cb1i3O5BGN5j97FBPDAbziVmwG9BXQrFgN6EDlB+B4FV7V2fosteSZE3FAtTg+YfexOshl1Kw9oaJjFA5JpGGvulWrs/RShmsZG8IFJ1G26fVTshl1KhE+GVW6f3tQWFWpGOnuo2rs/RMhtmJm8oKsVswqFCozYTGw2eRok3cNgX27EZdSqFJhyJlgsfUz9tvS19UpCELJuEIQgFOiQQ1oAEmgANGQFyILKxAX0RBbl1K09PP2x9TXPgmD5h97FbSXtDRMYpVq7P0W7A2kYa+6rpsM1jI3hMshl1KCFG26fVWFXifDKrdP72qFq7P0QSpGOnulJ8NsxM3lSshl1KAg4DX1TVWe8tMhgo2rs/RBbQqlq7P0WEEVKHiOIVmoMhyWHtEjcMEDEqNgdPVIrnM81KGSSATMIFptHx09k6oMhyUIokLrr9lyByr0nZr9EuuczzTIN8534Y3oEqxR8NfZTqDIckmLcbrrtlyCyqdIbMn72LFc5nmnwwCJnqg+Y4SMkIp8w6sPLIJDY+YXk1ZNWPZmW5lPQAkmOMlKjEuc0nyg35Lkst5HbLJ2r0FkiOIV5LIEiQBgkVjmea9cnJx47e3tPjYHT1VZMhkkgEzCfUGQ5LrhNHx09lZSYokLrr9lyTXOZ5oGUnZr9ElOg3znfhjem1BkOSCFHw19k5Votxuuu2XKFc5nmgzG8x+9igrENoIBImVOoMhyQVEK3UGQ5IQTUH4HgVUWYeI4hBhTg+YfexW0qPgdPVA1JpGGvuq6bR8dPZApOo+3T6p61zvH3oo1EkIj5vkZMZJz9mycm8TJCTrY183tWnwoArxYjWNli4gchidFyntjxEpMSbYDRBbnc9/MiQ0C1Ck0h8Rxe97nvOLnEuPMqbVzF+3Te1/EmEybaMwxHfjf8DOXmPRJ7j97Y9JpL4dIcCHtJY0ANa1zDMgDeCcScFzNXexqcaPHhRh/oe1x3tnJw1bNc7WnsnHoBVY1F2t5KyxwIBF4IBG8ETHRWYMLadEuJqfLPO7m/D5UGizvdcMldaJXDBWosKeGKqrmcTPh3W7ry03xC7xRaKILIDqkRxc91wM2NukQdhJ6L5vY/iWLm0mFI/jh4cSwmY0K1fv32jb02KQZshyhs4MHxf3E9Fry71UzOfL0H2P2xApMnQYrX5gGThdtabwvsrzIx5aQ5pIcMCDIjULauyO/tLgyDyIzMn+YcHi/nNdmk3H+O10jDX3SFr3dvvpRqSQ2sYcQ3VHyEzd5XAydwuO5bcqRZwijbdPqrCr0nZr9ElHDaRjp7pSsUfDX2TkCoGA19U1VI3mP3sUEF5CooQSqHI8lloMxccRsVtQfgeBQFcZjmoRHAggGZVdTg+YfexBiocjyU4Nxvuu23Kykx8BxQal4g95zRIQZCcLeJMNIkajRi7jsH/pcXiPLiXOJLiZkkzJJ2knFfe789oGPTYpnNjCGM3Bgkebpla+ot63xOQIQhSoIQhB0Xur3xe99CotWQALIjjIl5DXBkssBPNdTa4SF4wC86di0mzpEB/4YjDoHCfReg3YniVcY7nKtVxmOa0DvX3udQ6SIdWswwpkYOa9xdVM9ouEwt0XFfEOk16fHyYWMHysbPqSmr8OZna1tziSSbySSTmTeVhCFDcIQhALqnhp3qdE/wDyx31nAThOOLmjFpO0jEHIHJcrVvsmmmBGhRWm9j2u4tB+IaiY1XZeJ1Ox6KjXylfjhel1DkeSlRHBwrDAgEcDeFaWjAmEZC+6/bcp1xmOaTSMdPdKQMiAkkgTCjUOR5J8HAa+qagp1DkeSFcQgVajPoVhzwQQDeVXUoeI4hBmydl6KTGFpmcFZSo2B09UBajPoVU7VpghwYkSd0Njnng1pKktX8RabZUF7Z3xC2GNTWd/a0rldk7XGXvLiXHEkk8TeVhCFm9AQhCAQhCDE16J7KimLBhRBg9jH/1NB+q87ru/h9SK9Ao//FpZ/Q4tHQK8s9+H27I5ei89ds0q1pEaJ+N73DgXGXReg+1qTZQIsT8DHu5AlebWCQCac9NJCEKGoQhCAQhCDu/cWnWtCguJvDah4wyW+gC2G1GfQrm/hPTa0KNBOLHteODwQerOq39aTww1OU14rGYvCjZOy9E2j4a+ycupJY4NEjis2oz6FJjeY/exQQWbUZ9CsqqhA2wO5FkRfddfyVlQfgeBQQtxkVgvBuGJSFOD5h97EErA7ly7xbpfxwIE/K1z3cXGqOgPNdZXAu/NPt6dHcDNrXVG8GCr/lPmpvhWJ8vgIQhQ3CF9HsLst1JihgnVDXvefwtY0k8zIfMvmgroyhCFwC654TUwfssRhxZFJ0e1p9QVyNdB8JaRKJSIf4mMcPlLgf8AIKs+U68Ny8QKaGUCkSnNwawfO4A9Jrhi6v4rUirRobPxxBPgxrj6kLlCa8uY8BCEKVhCF9DtLst0KHR4uLIzC4HJzXOa5vQHVdHz0IQuDbfDSl1Ka1k5CIxzPmHxN9Oq7PYHcvOnZlLMGNCijGG9j9GuBPS7Vej4UQOAcLwQCOBE1cY7nz1Frqtx43LNuMioUjHT3SlSDXMLrxgUWB3JkHAa+qagrWB3IVlCCvb7uqLad0sbsc0lSh4jiEDLDf0RUlfOclYSo+B09UFHtbtMQIMSKRcxjnY7QLhzXnUuJvJmTeTmTiV1vxRp9Sithg/FFeAf5GfEesguSKNNcT46EIV7sPs11Jjw4Lf9bviP4WC9x0E1LR0Pw/7KsqHHpDm/HFY6ruhta6XMzOgXLGYBehqTBayjvYwSa2G5rRkGsIA5Lzy3AKrEZvepIQhSsLa/DSPVpzGzkHsezUNrj/Baovrd1aTZ0yjPyiMB4ONU9HLsTrw2zxdjyiUeHPBr3H5nVR/iVz1bb4nUitT3j8DGN6F3/mtSS+TPgIQhcUF1Edk/tXY0FrWziMaXszJa50xq2Y5Lly7j3F/6Cj/yn/JyqI1eOGhZWw9+ex/2alPDRKG/42ZAO8w0dPoteXFS9gXc+4XadrQYM73MFm6++bLh/bJcMXRfCenydHo5OIa9vEfC76LufKdz4dQq1r8NmaLDf0UqPhr7Jytir15XSnJFvu6qEbzH72KCB1vu6oSUILFgN6DCAvvuv5Jyg/A8CgTbncgPLrjgUpTg+YfexByjxLZGjUsMZCiOZDY1oIhvcC503OIIEjcWj5VqB7KpH5EX9N/svSCTHw191Ni5vk486fuuP+RF/Tf7LpPhb3fdDbEpEVrmvd8DA4VS1o8xkRO8yHyre5p1H26fVJnhd9nCO0YAsokpk1Hy3/CV58b2VSJD+BF/Tf7L0iq8fHT3XbOuZ1x52/dcf8iL+m/2WR2VSPyIv6b/AGXoOaswcBr6rntV/T8ec/3TSP8Abxf03+ykzs2kNcHCBFmCCP4b8QZ5L0cqjzeeJT2nv/HCu8EGPHpMaKIEWT3kj+G/DAbMgvn/ALppH+3i/pv9l6DmrqcPf+PN/wC6qR+RF/Tf7LH7rj/kRf03+y9HvwPAqpNPaf0/Hnwdl0j8iL+m/wBl2zuPRi2g0cODmuDTMESINZ2wiYX2oR+IfexWkk4nWutM8Ruwv2ijV2AmLCNZoAmXNl8TRpfxaFyH91x/yIv6b/ZejI+A4+6rzS567nXI8+DsqkfkRf03+y+13QhR6PTID3QYobWqP/hv8rxVM7sBMHRdvo+3T6p6cLvv0rudVuHG9FudyKRjp7pSpB4YDecSs2A3rMHAa+qagTYDehOQgqWrs/RZa8kyJuKWpQ8RxCB9kMupWHtDRMYpyVGwOnqgTauz9FKGaxkbwlJtHx09kDLIZdSoRPhlVun97VYVek7Nfoghauz9EyG2YmbykKxR8NfZBmyGXUpb3lpkMFZVSN5j97EBauz9E1rAQCReVXVtmA4BBGyGXUpNq7P0VtUUDGvJMibim2Qy6lIh4jiFcQJe0NExilWrs/ROjYHT1VZA2GaxkbwmWQy6lLo+OnsrKCvE+GVW6f3tULV2fop0nZr9ElA+G2YmbypWQy6lYo+GvsnIKz3lpkMFG1dn6IjeY/exQQTtXZ+iwooQClDxHEIQguJUbA6eqyhBVTaPjp7IQgsqvSdmv0QhAlWKPhr7IQgcqkbzH72IQggrbMBwCEIJqihCCUPEcQriEIFRsDp6qshCBtHx09lZQhBXpOzX6JKEILFHw19k5CEFSN5j97FBCEAhCEH/2Q=="
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Muhammad Jawwad</p>
                <p>Founder, Loreal</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src="https://icon-library.com/images/female-profile-icon/female-profile-icon-1.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Anbreen Baig</p>
                <p>Founder, Neutrogena</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFRYVFRUZGRQaHBgcGBwcGBoYHBgZGB0ZHh8hJBgcITQnHR8rHx0kJjgmKy8xNjU3HCQ7QDs0Py40NTEBDAwMEA8QHxISGjQhJCs0NDQxNDE0MTQ0MTQ0NDQ0MTQ0NDQ0NEA0MTQxNDQ0NDQ0MTE0ND80NDQxNDQ0NDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwIEAQYHCAX/xABBEAABAgIHBQYEAwcDBQEAAAABAAIDEQQSEyExUYFBYXGRoQUGBzKx0SKCwfBSU5MUFSNykqKyQlRiNHPC4fEk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAfEQEBAQEAAQUBAQAAAAAAAAAAAQIRMQMSIUFhE1H/2gAMAwEAAhEDEQA/AOsKUPEcQiocjyWWgzFxxGxBbSo2B09VKuMxzUIjgQQDMoK6bR8dPZQqHI8lODcb7rttyCyq9J2a/RNrjMc0qNfKV+OF6BKsUfDX2SahyPJOhGQvuv23IHKpG8x+9isVxmOaREBJJAmEC1bZgOAVaocjyVhjhIXjBAxUVbrjMc1VqHI8kGYeI4hXFUaDMXHEbFYrjMc0EY2B09VWViI4EEAzKTUOR5IJ0fHT2VlVoNxvuu23J1cZjmgVSdmv0SU6NfKV+OF6XUOR5IHUfDX2TkmEZC+6/bcp1xmOaCvG8x+9igmRASSQJhRqHI8kEUKVQ5HkhBcUH4HgVG1GfQrDngggG8oK6nB8w+9iLJ2XopMYWmZwQWUmkYa+6zajPoVGI6YkLygQnUbbp9VCydl6KcP4Z1rp/exBYVakY6e6ZajPoUuIKxmLwgUrMHAa+qTZOy9FK1DR8RAlMknADG8oLKpxMTxK0fvD4p0aASyjtMd4mCQS2GD/ADkTd8olvWkUrxQp73EssmN2AMLv7nOv5IO2q8uF0DxTpbT/ABWQojdsmljtHAkdF03u331olNaaj6kQCbmP+Fw3g4OG8INkfgeBVRMh0yG8EMe1x/4uB9Fiydl1CAg+YfexW1WYwtMzgmWoz6FBikYa+6rp8R0xIXlLsnZeiCdG26fVWFXh/DOtdP72KdqM+hQLpGOnulJsQVjMXhRsnZeiB0HAa+qakscGiRxWbUZ9CgahKtRn0KygqqUPEcQp2B3IsiL7rr+SCylRsDp6rFuMisF4NwxKBCbR8dPZFgdyy1tW88LkFhV6Ts1+ilbjIqLviw2Z70CVYo+GvsoWB3KTXVbjxuQZjRWsa5ziA1oJcTcABeSdFwXv531fTXvhwyWUQGQAuMSV1Z+7JvPduPjF2+WQWUVhk6LN0T/ttuq/M6WjSuOoIqSEIBRIUkIJ0WO+E8PhuLHgghzDVMxfiF3Hw175GmsdBjEftEMAzAkIjMK0vxC4O4g7VwtfV7rdpuotLgRgbmvaHb2PNVw5GeiD0vGwOnqqye54cJDb/wDVGwO5AUfHT2VlV2tq3nhcpW4yKCNJ2a/RJTnfFhsz3rFgdyCdHw19k5Ia6rceNyzbjIoFRvMfvYoJrmF14wKLA7kCkJtgdyEFlQfgeBSrfd1RbTuljdjmgSpwfMPvYp2G/oipK+c5ILCTSMNfdRt93VFatdhtzQJTqNt0+qLDf0R5d89MEFhVqRjp7rNvu6oq1r8NmaDgnijSC/tCICbmMhsH9IcerlqK2/xVo5Z2jEng9sNw/pDfVqT3H7p/tz3ue8sgsIDqvme431Qdl15K5bydrslt5GqL61H7vUlzDEMMw4QxfF/hsvwlWvcTgKoM5rtnZXdmiUaVlAYHfjcK7/6nX8l9Z7AZTAMsJgGSyvq/5Gs9L/a8/wBB7tUuOf4dHiFuxzmFjTvrPkr3aHdF9FYH0qNDY53khsnFiP4NEgB/yJku6KJhtnOqJ5yE5cVz+td/lHm+NRIjBXdDe1hMg5zHNaTkHESJlkUuE8Nc0uE2gguGYBvHJd671dhMpkKq4n4GxHMA/GWEMPykzkuE0CiuixIcIeaI9jBdORe4Nw2yn0Wude5lrPtr03QHhzWOb5S1pbwLZjovoL59BodjDhsrVqjGMnKU6rQ2eN2E1Yt93VUlKkYa+6rp1atdhtzRYb+iAo23T6qwq/l3z0wRb7uqDFIx090pOq1r8NmaLDf0QTg4DX1TVXryulOSLfd1QWEKvb7uqECVKHiOITrAb0GEBffdfyQOSo2B09Uu3O5DXl1xwKBSbR8dPZTsBvWHNq3jhegeq9J2a/RYtzuWW/Fjsy3oEqxR8NfZFgN6i51W4cb0HJfGuhSiUeOBcQYbuIm9vStyX2vC6jVKAx0pF74jjvAcWDo3qvq+IHZppNEitAm9ra7P5mTPUTGqh3KhhtBooGFm06um49Ssd6+OfrfGfnv4+6hCFk2CEIQYeLjwK474Y9mWvaFcibIJc8/zkuazrM/KuxrVfDXsqwgviEfHGiPf8jXODNJTPzLTF4y3nrfo2B09VWTWvLrjgVOwG9bvOhR8dPZWUhzat44XqNudyDNJ2a/RJTm/Fjsy3qVgN6Ao+GvsnKu51W4cb1i3O5BGN5j97FBPDAbziVmwG9BXQrFgN6EDlB+B4FV7V2fosteSZE3FAtTg+YfexOshl1Kw9oaJjFA5JpGGvulWrs/RShmsZG8IFJ1G26fVTshl1KhE+GVW6f3tQWFWpGOnuo2rs/RMhtmJm8oKsVswqFCozYTGw2eRok3cNgX27EZdSqFJhyJlgsfUz9tvS19UpCELJuEIQgFOiQQ1oAEmgANGQFyILKxAX0RBbl1K09PP2x9TXPgmD5h97FbSXtDRMYpVq7P0W7A2kYa+6rpsM1jI3hMshl1KCFG26fVWFXifDKrdP72qFq7P0QSpGOnulJ8NsxM3lSshl1KAg4DX1TVWe8tMhgo2rs/RBbQqlq7P0WEEVKHiOIVmoMhyWHtEjcMEDEqNgdPVIrnM81KGSSATMIFptHx09k6oMhyUIokLrr9lyByr0nZr9EuuczzTIN8534Y3oEqxR8NfZTqDIckmLcbrrtlyCyqdIbMn72LFc5nmnwwCJnqg+Y4SMkIp8w6sPLIJDY+YXk1ZNWPZmW5lPQAkmOMlKjEuc0nyg35Lkst5HbLJ2r0FkiOIV5LIEiQBgkVjmea9cnJx47e3tPjYHT1VZMhkkgEzCfUGQ5LrhNHx09lZSYokLrr9lyTXOZ5oGUnZr9ElOg3znfhjem1BkOSCFHw19k5Votxuuu2XKFc5nmgzG8x+9igrENoIBImVOoMhyQVEK3UGQ5IQTUH4HgVUWYeI4hBhTg+YfexW0qPgdPVA1JpGGvuq6bR8dPZApOo+3T6p61zvH3oo1EkIj5vkZMZJz9mycm8TJCTrY183tWnwoArxYjWNli4gchidFyntjxEpMSbYDRBbnc9/MiQ0C1Ck0h8Rxe97nvOLnEuPMqbVzF+3Te1/EmEybaMwxHfjf8DOXmPRJ7j97Y9JpL4dIcCHtJY0ANa1zDMgDeCcScFzNXexqcaPHhRh/oe1x3tnJw1bNc7WnsnHoBVY1F2t5KyxwIBF4IBG8ETHRWYMLadEuJqfLPO7m/D5UGizvdcMldaJXDBWosKeGKqrmcTPh3W7ry03xC7xRaKILIDqkRxc91wM2NukQdhJ6L5vY/iWLm0mFI/jh4cSwmY0K1fv32jb02KQZshyhs4MHxf3E9Fry71UzOfL0H2P2xApMnQYrX5gGThdtabwvsrzIx5aQ5pIcMCDIjULauyO/tLgyDyIzMn+YcHi/nNdmk3H+O10jDX3SFr3dvvpRqSQ2sYcQ3VHyEzd5XAydwuO5bcqRZwijbdPqrCr0nZr9ElHDaRjp7pSsUfDX2TkCoGA19U1VI3mP3sUEF5CooQSqHI8lloMxccRsVtQfgeBQFcZjmoRHAggGZVdTg+YfexBiocjyU4Nxvuu23Kykx8BxQal4g95zRIQZCcLeJMNIkajRi7jsH/pcXiPLiXOJLiZkkzJJ2knFfe789oGPTYpnNjCGM3Bgkebpla+ot63xOQIQhSoIQhB0Xur3xe99CotWQALIjjIl5DXBkssBPNdTa4SF4wC86di0mzpEB/4YjDoHCfReg3YniVcY7nKtVxmOa0DvX3udQ6SIdWswwpkYOa9xdVM9ouEwt0XFfEOk16fHyYWMHysbPqSmr8OZna1tziSSbySSTmTeVhCFDcIQhALqnhp3qdE/wDyx31nAThOOLmjFpO0jEHIHJcrVvsmmmBGhRWm9j2u4tB+IaiY1XZeJ1Ox6KjXylfjhel1DkeSlRHBwrDAgEcDeFaWjAmEZC+6/bcp1xmOaTSMdPdKQMiAkkgTCjUOR5J8HAa+qagp1DkeSFcQgVajPoVhzwQQDeVXUoeI4hBmydl6KTGFpmcFZSo2B09UBajPoVU7VpghwYkSd0Njnng1pKktX8RabZUF7Z3xC2GNTWd/a0rldk7XGXvLiXHEkk8TeVhCFm9AQhCAQhCDE16J7KimLBhRBg9jH/1NB+q87ru/h9SK9Ao//FpZ/Q4tHQK8s9+H27I5ei89ds0q1pEaJ+N73DgXGXReg+1qTZQIsT8DHu5AlebWCQCac9NJCEKGoQhCAQhCDu/cWnWtCguJvDah4wyW+gC2G1GfQrm/hPTa0KNBOLHteODwQerOq39aTww1OU14rGYvCjZOy9E2j4a+ycupJY4NEjis2oz6FJjeY/exQQWbUZ9CsqqhA2wO5FkRfddfyVlQfgeBQQtxkVgvBuGJSFOD5h97EErA7ly7xbpfxwIE/K1z3cXGqOgPNdZXAu/NPt6dHcDNrXVG8GCr/lPmpvhWJ8vgIQhQ3CF9HsLst1JihgnVDXvefwtY0k8zIfMvmgroyhCFwC654TUwfssRhxZFJ0e1p9QVyNdB8JaRKJSIf4mMcPlLgf8AIKs+U68Ny8QKaGUCkSnNwawfO4A9Jrhi6v4rUirRobPxxBPgxrj6kLlCa8uY8BCEKVhCF9DtLst0KHR4uLIzC4HJzXOa5vQHVdHz0IQuDbfDSl1Ka1k5CIxzPmHxN9Oq7PYHcvOnZlLMGNCijGG9j9GuBPS7Vej4UQOAcLwQCOBE1cY7nz1Frqtx43LNuMioUjHT3SlSDXMLrxgUWB3JkHAa+qagrWB3IVlCCvb7uqLad0sbsc0lSh4jiEDLDf0RUlfOclYSo+B09UFHtbtMQIMSKRcxjnY7QLhzXnUuJvJmTeTmTiV1vxRp9Sithg/FFeAf5GfEesguSKNNcT46EIV7sPs11Jjw4Lf9bviP4WC9x0E1LR0Pw/7KsqHHpDm/HFY6ruhta6XMzOgXLGYBehqTBayjvYwSa2G5rRkGsIA5Lzy3AKrEZvepIQhSsLa/DSPVpzGzkHsezUNrj/Baovrd1aTZ0yjPyiMB4ONU9HLsTrw2zxdjyiUeHPBr3H5nVR/iVz1bb4nUitT3j8DGN6F3/mtSS+TPgIQhcUF1Edk/tXY0FrWziMaXszJa50xq2Y5Lly7j3F/6Cj/yn/JyqI1eOGhZWw9+ex/2alPDRKG/42ZAO8w0dPoteXFS9gXc+4XadrQYM73MFm6++bLh/bJcMXRfCenydHo5OIa9vEfC76LufKdz4dQq1r8NmaLDf0UqPhr7Jytir15XSnJFvu6qEbzH72KCB1vu6oSUILFgN6DCAvvuv5Jyg/A8CgTbncgPLrjgUpTg+YfexByjxLZGjUsMZCiOZDY1oIhvcC503OIIEjcWj5VqB7KpH5EX9N/svSCTHw191Ni5vk486fuuP+RF/Tf7LpPhb3fdDbEpEVrmvd8DA4VS1o8xkRO8yHyre5p1H26fVJnhd9nCO0YAsokpk1Hy3/CV58b2VSJD+BF/Tf7L0iq8fHT3XbOuZ1x52/dcf8iL+m/2WR2VSPyIv6b/AGXoOaswcBr6rntV/T8ec/3TSP8Abxf03+ykzs2kNcHCBFmCCP4b8QZ5L0cqjzeeJT2nv/HCu8EGPHpMaKIEWT3kj+G/DAbMgvn/ALppH+3i/pv9l6DmrqcPf+PN/wC6qR+RF/Tf7LH7rj/kRf03+y9HvwPAqpNPaf0/Hnwdl0j8iL+m/wBl2zuPRi2g0cODmuDTMESINZ2wiYX2oR+IfexWkk4nWutM8Ruwv2ijV2AmLCNZoAmXNl8TRpfxaFyH91x/yIv6b/ZejI+A4+6rzS567nXI8+DsqkfkRf03+y+13QhR6PTID3QYobWqP/hv8rxVM7sBMHRdvo+3T6p6cLvv0rudVuHG9FudyKRjp7pSpB4YDecSs2A3rMHAa+qagTYDehOQgqWrs/RZa8kyJuKWpQ8RxCB9kMupWHtDRMYpyVGwOnqgTauz9FKGaxkbwlJtHx09kDLIZdSoRPhlVun97VYVek7Nfoghauz9EyG2YmbykKxR8NfZBmyGXUpb3lpkMFZVSN5j97EBauz9E1rAQCReVXVtmA4BBGyGXUpNq7P0VtUUDGvJMibim2Qy6lIh4jiFcQJe0NExilWrs/ROjYHT1VZA2GaxkbwmWQy6lLo+OnsrKCvE+GVW6f3tULV2fop0nZr9ElA+G2YmbypWQy6lYo+GvsnIKz3lpkMFG1dn6IjeY/exQQTtXZ+iwooQClDxHEIQguJUbA6eqyhBVTaPjp7IQgsqvSdmv0QhAlWKPhr7IQgcqkbzH72IQggrbMBwCEIJqihCCUPEcQriEIFRsDp6qshCBtHx09lZQhBXpOzX6JKEILFHw19k5CEFSN5j97FBCEAhCEH/2Q=="
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Ronald Richards</p>
                <p>Founder, Louis Vuitton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default AboutUs;
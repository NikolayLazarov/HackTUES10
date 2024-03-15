import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import Map from '../components/Map/Map'

const listLocations = [{
    locationName: "location1",
    locationId: 1
    },{
        locationName: "location2",
        locationId: 2
    },{
        locationName: "location3",
        locationId: 3
    }

]

const InstitutionPage = () => {

    const renderedLocations = listLocations.map(location => 
        <li className='flex' key={location.locationId}>
            <a href='/complaint-form' className='btn btn-neutral btn-wide
'>{location.locationName} </a>
        
        </li>
    )

    return (
    <>
        <Navbar />

        <h2>Name Institution</h2>
        <p> info institution Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident ut distinctio placeat inventore quidem sed, atque tempora tenetur vero similique omnis voluptas earum suscipit quaerat nam, excepturi iste assumenda?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ipsa voluptatibus vero vel qui at necessitatibus magni, aut quibusdam atque, consectetur, ut accusantium. Provident nulla vitae nemo minima, a eveniet?
            Quasi, earum qui rem, omnis saepe odit harum asperiores reprehenderit a ratione necessitatibus, consequatur laborum similique illo recusandae perferendis aut quae? Delectus perferendis, placeat ut necessitatibus repellat quaerat cum officiis?
            Harum unde amet tempora nam eveniet iusto sapiente dignissimos illo veritatis et! Et molestiae maxime officiis nobis soluta delectus molestias. Temporibus et possimus ut eos nam voluptates, vitae ipsa quod.
            Distinctio animi fugiat in? Laudantium nihil quasi ab nostrum corporis, voluptate, amet, unde velit distinctio rem architecto fugit debitis voluptatum suscipit porro soluta! Provident blanditiis quod earum accusantium fugit dolorum.
            Nostrum repellendus eum quo, incidunt alias numquam iure laboriosam sint pariatur! Vitae distinctio at natus consectetur, officiis consequuntur voluptates repellendus odio aspernatur repellat fuga nostrum dolor porro laboriosam cumque reiciendis?
            Ut architecto, eaque quidem repellendus cumque aperiam alias quibusdam iusto provident accusamus maiores, hic recusandae est earum impedit. Cum repellat architecto eius. Consequatur non saepe laboriosam omnis quidem autem commodi?
            Enim sit similique tenetur eum voluptatem velit, aliquam eveniet dicta perferendis. Dolorem, aliquam optio accusantium ab veritatis quibusdam quia exercitationem amet, a magnam beatae sunt tempora, iste atque explicabo pariatur.
            Similique necessitatibus nisi ex rerum dolorem debitis sed incidunt quam eligendi autem quas aspernatur, doloribus repellendus sint, iusto maxime nihil deserunt natus est! Atque corporis vitae ullam quod possimus amet?
            Architecto modi ullam rem sapiente recusandae molestiae autem aut impedit culpa soluta optio eveniet, nulla, at perferendis repudiandae nesciunt corrupti vitae ex quas, exercitationem pariatur esse provident deserunt? Ipsum, ipsam.
            Labore esse vero aspernatur? Eveniet illum sit inventore tempore doloribus cum harum enim asperiores dolorum a? Inventore nemo voluptate eius quaerat quae, qui quas eaque perspiciatis vero magni perferendis cum!
        </p>
        <main className='flex flex-row'>

        <div className='w-1/3'>
                {renderedLocations}

            </div>

            <Map width="" height= "" />


        </main>
    </>
  )
}

export default InstitutionPage
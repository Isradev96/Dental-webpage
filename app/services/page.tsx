import ServicesCard from '@/Components/ServicesCard'
import React from 'react'
import { servicesItems, servicesSecItems } from '@/data/data'
import Link from 'next/link'
import Cta from '@/Components/Cta'

const Services = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          {/* Title */}
          <div className="flex gap-6 flex-wrap items-center justify-between">
            <div className="space-y-6">
              <h2 className="title">Our Services</h2>
              <p className="max-w-md">
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
                vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>
            <Link href={"/contact"} className="primary-btn uppercase">
              BOOK AN APPOINTMENT
            </Link>
          </div>
          {/* Wrapper */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {servicesItems.map((item) => (
              <ServicesCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <Cta />
      </section>
    </>
  );
}

export default Services
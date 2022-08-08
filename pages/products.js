import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';

const products = [
  {
    id: 1,
    title: 'Nitrile Exam Gloves | AS-580',
    subtitle: 'Medical grade, Exceptional tactile sensitivity',
    pack: 'BOX: 200 gloves | CASE: 2,000 gloves',
    unitPrice: '$6.50',
    totalPrice: '$ 1,260.00',
    multiple: true,
    minimum: 'Minimum order 1 case',
  },
  {
    id: 2,
    title: 'Nitrile Exam Gloves | AS-600',
    subtitle: 'Chemo-Rated, Strenght and Durability',
    pack: 'BOX: 100 gloves  |  CASE: 1,000 gloves',
    unitPrice: '$6.50',
    totalPrice: '$ 1,260.00',
    multiple: true,
    minimum: 'Minimum order 1 case',
  },
  {
    id: 3,
    title: 'Level 3 Surgical Masks | AM-300',
    subtitle: 'Medical grade, Highly Breathable',
    pack: 'BOX: 50 gloves  |  CASE: 2,500 gloves',
    unitPrice: '$6.50',
    totalPrice: '$ 1,260.00',
    multiple: false,
    minimum: 'Minimum order 10 boxes',
  },
]

export default function Products() {
  return (
    <>
    <Header />
    <section className="amerisano-products">
      <div className="amerisano-section">
        {
          products.map((product, index) => {
            const { id, title, subtitle, pack, unitPrice, totalPrice, multiple, minimum } = product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                subtitle={subtitle}
                pack={pack}
                unitPrice={unitPrice}
                totalPrice={totalPrice}
                multiple={multiple}
                minimum={minimum}
              />
            )
          })
        }
      </div>
    </section>
    </>
  )
}
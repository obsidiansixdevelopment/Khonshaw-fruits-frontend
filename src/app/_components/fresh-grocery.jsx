import React from 'react'

export default function FreshGrocery() {
  return (
    <section className="py-16 bg-secondary-main text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Fresh Grocery Imports</h2>
      <p className="mb-8">Providing fresh fruits for Iraqi grocery markets.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="">
          <img
            alt="Image of a farm"
            className="rounded-lg mb-4 h-96 object-cover"
            height={300}
            // src="https://storage.googleapis.com/a1aa/image/tC9K8j4MHOY3IVyeKRg3yvyD3VnlvSD8B0wFEpTaIp5RNhfTA.jpg"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTixZQ2rCb6Db7eqqPmKZKAM6vrd-9_hQKqkQ&s'
            width={400}
          />
          <h3 className="text-xl font-bold mb-2">
            Quality Products Guaranteed
          </h3>
          <p>Yearly 600 tons of products</p>
        </div>
        <div className="">
          <img
            alt="Image of people in a farm"
            className="rounded-lg mb-4 h-96 object-cover"
            height={300}
            // src="https://storage.googleapis.com/a1aa/image/grfVMW8KQzyVf0dSCzYDQcyzFSe3rfJdeQTMl63lAXK9UT4fE.jpg"
            src='https://media.istockphoto.com/id/1221401461/photo/fresh-vegetable-home-delivery-service-during-covid-19.jpg?s=612x612&w=0&k=20&c=-bcx-wAo6_dXRK3u7Kw6el-v6pgT2YTfsXJ_TxD8uqs='
            width={400}
          />
          <h3 className="text-xl font-bold mb-2">Shipping Services</h3>
          <p>
            Ensuring on-time shipping of imported groceries to Iraqi grocery
            markets.
          </p>
        </div>
        <div className="">
          <img
            alt="Image of oranges in crates"
            className="rounded-lg mb-4 h-96"
            height={300}
            src="https://storage.googleapis.com/a1aa/image/1xoSrYpzqYZPIV5fnYCEMsOIHeE7XNByxxM3GxPO3v9laCfnA.jpg"
            width={400}
          />
          <h3 className="text-xl font-bold mb-2">Reliable Market Supplier</h3>
          <p>Customer Satisfaction Priority</p>
        </div>
      </div>
    </div>
  </section>
  )
}
